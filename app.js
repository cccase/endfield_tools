document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();
});

let charactersData = [];

async function fetchCharacters() {
  try {
    const response = await fetch('./data/characters.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    charactersData = data;
    renderCharacters(data);
  } catch (error) {
    console.error("Failed to load character data:", error);
    document.getElementById('char-selection').innerHTML = `<p style="color:red">Failed to load data.</p>`;
  }
}

function renderCharacters(data) {
  const container = document.getElementById('char-selection');
  container.innerHTML = '';

  data.forEach(char => {
    const card = document.createElement('div');
    card.className = 'char-card';

    // Icon and Name wrapper
    const header = document.createElement('div');
    header.className = 'char-header';

    if (char.icon) {
      const img = document.createElement('img');
      img.src = char.icon;
      img.alt = char.name;
      img.className = 'char-icon';
      header.appendChild(img);
    }

    const nameEl = document.createElement('h3');
    nameEl.textContent = char.name;
    header.appendChild(nameEl);

    card.appendChild(header);

    const skillsList = document.createElement('div');
    skillsList.className = 'skills-list';

    if (char.skills && Array.isArray(char.skills)) {
      char.skills.forEach((skill, index) => {
        const skillEl = document.createElement('div');
        const isUlt = skill.name === '必殺技' || skill.spCost > 0;
        skillEl.className = `skill-item ${isUlt ? 'skill-ult' : 'skill-normal'}`;
        skillEl.draggable = true;

        let label = `${skill.name} (CT: ${skill.cooldown}s`;
        if (skill.spCost > 0) label += `, SP: -${skill.spCost}`;
        if (skill.spGain > 0) label += `, SP: +${skill.spGain}`;
        label += ')';

        skillEl.textContent = label;

        // Store data for drag and drop
        const skillData = {
          charId: char.id,
          charName: char.name,
          charIcon: char.icon,
          skillName: skill.name,
          cooldown: skill.cooldown,
          spCost: skill.spCost || 0,
          spGain: skill.spGain || 0,
          isUlt: isUlt
        };

        skillEl.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('application/json', JSON.stringify(skillData));
          e.dataTransfer.effectAllowed = 'copy';
        });

        skillsList.appendChild(skillEl);
      });
    }

    card.appendChild(skillsList);
    container.appendChild(card);
  });
}

// --- Timeline Drag & Drop ---
const pixelsPerSecond = 50;
let placedSkills = [];
let nextSkillId = 1;

document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.getElementById('timeline');
  const tracks = document.getElementById('timeline-tracks');

  timeline.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  });

  timeline.addEventListener('dragenter', (e) => {
    e.preventDefault();
  });

  timeline.addEventListener('drop', (e) => {
    e.preventDefault();
    const dataStr = e.dataTransfer.getData('application/json');
    if (!dataStr) return;

    try {
      const skillData = JSON.parse(dataStr);

      // Calculate drop time based on X coordinate relative to the timeline grid
      const rect = timeline.getBoundingClientRect();
      const x = e.clientX - rect.left;

      // Snap to nearest 0.5s or similar if desired, here just use direct calculation
      let time = Math.max(0, x / pixelsPerSecond);

      placeSkillOnTimeline(skillData, time);
    } catch(err) {
      console.error("Drop error:", err);
    }
  });
});

function placeSkillOnTimeline(skillData, time) {
  const tracks = document.getElementById('timeline-tracks');
  const id = nextSkillId++;

  const width = Math.max(20, skillData.cooldown * pixelsPerSecond); // min width for visibility if instant

  // Calculate dynamic vertical offset based on overlap
  let offsetY = 20;
  const overlappingSkills = placedSkills.filter(s => {
    return (time < s.endTime) && ((time + skillData.cooldown) > s.time);
  });
  if (overlappingSkills.length > 0) {
    offsetY = 20 + overlappingSkills.length * 35; // move down to avoid overlap
  }

  // Create Skill block
  const skillBlock = document.createElement('div');
  skillBlock.className = `placed-skill ${skillData.isUlt ? 'skill-ult' : 'skill-normal'}`;
  skillBlock.style.left = `${time * pixelsPerSecond}px`;
  skillBlock.style.top = `${offsetY}px`;
  // We make the skill block itself represent 1 second of action for visual clarity, or a fixed width.
  const blockWidth = 50;
  skillBlock.style.width = `${blockWidth}px`;

  if (skillData.charIcon) {
    const iconImg = document.createElement('img');
    iconImg.src = skillData.charIcon;
    iconImg.className = 'placed-skill-icon';
    skillBlock.appendChild(iconImg);
  } else {
    skillBlock.textContent = skillData.charName;
  }

  skillBlock.title = `${skillData.charName} - ${skillData.skillName}\nTime: ${time.toFixed(1)}s`;

  // Create Cooldown block
  const cdBlock = document.createElement('div');
  cdBlock.className = 'placed-cooldown';
  cdBlock.style.left = `${time * pixelsPerSecond + blockWidth}px`;
  cdBlock.style.top = `${offsetY}px`;
  cdBlock.style.width = `${Math.max(0, (skillData.cooldown * pixelsPerSecond) - blockWidth)}px`;

  tracks.appendChild(skillBlock);
  tracks.appendChild(cdBlock);

  // Save to state
  placedSkills.push({
    id,
    ...skillData,
    time,
    endTime: time + skillData.cooldown,
    element: skillBlock,
    cdElement: cdBlock
  });

  // Re-sort by time
  placedSkills.sort((a, b) => a.time - b.time);

  // Trigger SP Update (to be implemented next)
  if (typeof updateSP === 'function') {
    updateSP();
  }
}

// --- SP Calculation & Playback Simulation ---
let isPlaying = false;
let playbackTime = 0;
let lastTimestamp = null;
let animationFrameId = null;

const maxSp = 100; // Define a max SP for visual bar representation

function updateSP() {
  // Calculates static SP flow across the whole timeline based on placed skills
  let currentSp = 0;

  for (const skill of placedSkills) {
    if (skill.spGain > 0) {
      currentSp += skill.spGain;
    }
    if (skill.spCost > 0) {
      currentSp -= skill.spCost;
    }
    // clamp SP between 0 and max (though in-game it might overcap depending on chars, let's keep it simple or allow overflow in text)
    if (currentSp < 0) currentSp = 0;
  }

  // We just use this for debugging or general stat. The real-time meter is updated during playback.
  document.getElementById('sp-value').textContent = currentSp.toString();

  const percentage = Math.min(100, Math.max(0, (currentSp / maxSp) * 100));
  document.getElementById('sp-bar').style.width = `${percentage}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  const btnPlay = document.getElementById('btn-play');
  const btnStop = document.getElementById('btn-stop');
  const btnClear = document.getElementById('btn-clear');

  btnPlay.addEventListener('click', () => {
    if (isPlaying) {
      // Pause
      isPlaying = false;
      btnPlay.textContent = '再生';
      cancelAnimationFrame(animationFrameId);
    } else {
      // Play
      isPlaying = true;
      btnPlay.textContent = '一時停止';
      if (playbackTime >= 60) playbackTime = 0; // reset if at end
      lastTimestamp = performance.now();
      animationFrameId = requestAnimationFrame(animationLoop);
    }
  });

  btnStop.addEventListener('click', () => {
    isPlaying = false;
    btnPlay.textContent = '再生';
    cancelAnimationFrame(animationFrameId);
    playbackTime = 0;
    renderPlaybackState();
  });

  btnClear.addEventListener('click', () => {
    // Clear all skills
    placedSkills.forEach(s => {
      s.element.remove();
      s.cdElement.remove();
    });
    placedSkills = [];
    playbackTime = 0;
    updateSP();
    renderPlaybackState();
  });
});

function animationLoop(timestamp) {
  if (!isPlaying) return;

  const deltaTime = (timestamp - lastTimestamp) / 1000; // in seconds
  lastTimestamp = timestamp;

  playbackTime += deltaTime;

  if (playbackTime > 60) {
    playbackTime = 60;
    isPlaying = false;
    document.getElementById('btn-play').textContent = '再生';
  }

  renderPlaybackState();

  if (isPlaying) {
    animationFrameId = requestAnimationFrame(animationLoop);
  }
}

function renderPlaybackState() {
  // Update Cursor
  const cursor = document.getElementById('cursor');
  cursor.style.display = 'block';
  cursor.style.left = `${playbackTime * pixelsPerSecond}px`;

  // Update SP based on skills triggered UP TO playbackTime
  let currentSp = 0;

  placedSkills.forEach(skill => {
    // Highlight if active
    if (playbackTime >= skill.time && playbackTime < skill.time + 1) { // 1 second active window visual
      skill.element.style.transform = 'scale(1.1)';
      skill.element.style.zIndex = '20';
    } else {
      skill.element.style.transform = 'scale(1)';
      skill.element.style.zIndex = '1';
    }

    // Accumulate SP
    if (playbackTime >= skill.time) {
      if (skill.spGain > 0) currentSp += skill.spGain;
      if (skill.spCost > 0) currentSp -= skill.spCost;
      if (currentSp < 0) currentSp = 0;
    }
  });

  document.getElementById('sp-value').textContent = Math.floor(currentSp).toString();
  const percentage = Math.min(100, Math.max(0, (currentSp / maxSp) * 100));
  document.getElementById('sp-bar').style.width = `${percentage}%`;
}
