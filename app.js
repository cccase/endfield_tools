let allCharacters = [];
let party = [];
let timelineSequence = []; // Array of skill objects placed on timeline

document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();
  setupTimelineDrop();
  document.getElementById('btn-clear-timeline').addEventListener('click', clearTimeline);
});

async function fetchCharacters() {
  try {
    const res = await fetch('data/characters.json');
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    allCharacters = await res.json();
    renderRoster();
  } catch (e) {
    console.error("Failed to load characters", e);
    const container = document.getElementById('roster-list');
    if (container) {
      container.innerHTML = '<div style="color: #ff7675; padding: 10px; border: 1px solid #ff7675; border-radius: 4px; grid-column: 1 / -1;">キャラクターデータの読み込みに失敗しました。<br>ローカルでHTMLファイルを直接（file://）開いている場合、ブラウザのセキュリティ制限によりデータの取得(fetch)がブロックされます。<br>VSCodeのLive Serverなどのローカルサーバーを使用するか、GitHub Pagesにデプロイしてご確認ください。</div>';
    }
  }
}

function renderRoster() {
  const container = document.getElementById('roster-list');
  container.innerHTML = '';
  allCharacters.forEach(char => {
    const el = document.createElement('div');
    el.className = 'roster-char';
    el.innerHTML = `<img src="${char.icon}" class="char-icon" alt="${char.name}"><span>${char.name}</span>`;
    el.addEventListener('click', () => addToParty(char));
    container.appendChild(el);
  });
}

function addToParty(charData) {
  if (party.length >= 4) {
    alert("パーティーは最大4人までです。");
    return;
  }
  if (party.find(p => p.id === charData.id)) {
    return; // Already in party
  }

  let defaultEfficiency = 100;
  if (charData.name === 'タンタン') defaultEfficiency = 107;
  if (charData.name === 'ギルベルタ') defaultEfficiency = 202.9;
  if (charData.name === 'オクギ') defaultEfficiency = 153.4;
  if (charData.name === 'ザイヒ') defaultEfficiency = 133.7;

  party.push({
    ...charData,
    efficiency: defaultEfficiency, // Default updated per requirement
    potential: 0     // Default 0凸
  });

  renderParty();
  renderPalette();
  updateSimulation();
}

function removeFromParty(index) {
  party.splice(index, 1);
  // Also remove their skills from timeline
  const removedIds = allCharacters.map(c => c.id); // Not needed actually, just filter timeline
  renderParty();
  renderPalette();

  // Re-filter timeline (remove skills of characters no longer in party)
  const currentPartyIds = party.map(p => p.id);
  timelineSequence = timelineSequence.filter(item => {
    if (item.type === 'refund') return currentPartyIds.includes(item.charId);
    return currentPartyIds.includes(item.charId);
  });
  renderTimeline();
}

function renderParty() {
  const container = document.getElementById('party-list');
  container.innerHTML = '';

  party.forEach((p, index) => {
    const el = document.createElement('div');
    el.className = 'party-member';

    // Potentials options
    let potOptions = `<option value="0">0凸</option>`;
    if (p.potentials) {
      p.potentials.forEach(pot => {
        potOptions += `<option value="${pot.level}">${pot.level}凸</option>`;
      });
    }

    el.innerHTML = `
      <img src="${p.icon}" class="char-icon" style="margin:0; width:30px; height:30px;">
      <span style="font-weight:bold; width:80px;">${p.name}</span>
      <div class="settings-group">
        <label>効率:</label>
        <input type="number" value="${p.efficiency}" min="0" max="500" step="0.1" style="width:70px;" onchange="updatePartySetting(${index}, 'efficiency', this.value)"> %
      </div>
      <div class="settings-group">
        <label>凸数:</label>
        <select onchange="updatePartySetting(${index}, 'potential', this.value)">
          ${potOptions}
        </select>
      </div>
      <button class="remove-btn" onclick="removeFromParty(${index})">×</button>
    `;

    // Sync select value
    const select = el.querySelector('select');
    select.value = p.potential;

    container.appendChild(el);
  });
}

window.updatePartySetting = function(index, key, value) {
  party[index][key] = parseFloat(value);
  updateSimulation();
}

function renderPalette() {
  const container = document.getElementById('skill-palette');
  container.innerHTML = '';

  party.forEach(p => {
    const group = document.createElement('div');
    group.className = 'palette-group';

    // Icon header
    group.innerHTML = `<img src="${p.icon}" class="char-icon" style="margin:0; width:30px; height:30px;">`;

    // Refund Panel (if applicable)
    if (p.baseRefundSP > 0 || (p.potentials && p.potentials.some(pot => pot.type === 'refund_sp_boost'))) {
      const refundEl = createDraggableBlock({ type: 'refund', charId: p.id, charName: p.name, icon: p.icon }, `返還SP`);
      refundEl.classList.add('bg-refund');
      group.appendChild(refundEl);
    }

    // Skills
    p.skills.forEach(s => {
      const skillEl = createDraggableBlock({ type: 'skill', charId: p.id, skillId: s.id, charName: p.name, icon: p.icon, skillData: s }, s.name);
      if (s.type === 'skill') skillEl.classList.add('bg-skill');
      if (s.type === 'combo') skillEl.classList.add('bg-combo');
      if (s.type === 'ult') skillEl.classList.add('bg-ult');
      group.appendChild(skillEl);
    });

    container.appendChild(group);
  });
}

function createDraggableBlock(data, text) {
  const el = document.createElement('div');
  el.className = 'skill-block';
  el.draggable = true;
  el.innerHTML = `<img src="${data.icon}"> <span>${text}</span>`;

  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('application/json', JSON.stringify(data));
  });

  // Also allow click-to-add
  el.addEventListener('click', () => {
    // Only add if it's from the palette (doesn't have an index yet)
    if (data.index === undefined) {
      timelineSequence.push(JSON.parse(JSON.stringify(data)));
      renderTimeline();
    }
  });

  return el;
}

function setupTimelineDrop() {
  const timeline = document.getElementById('timeline');
  timeline.addEventListener('dragover', e => {
    e.preventDefault();
    // Highlight drop target if we are dragging over a timeline item
    const draggingElement = document.querySelector('.dragging');
    if (!draggingElement) return;
    const afterElement = getDragAfterElement(timeline, e.clientX);
    if (afterElement == null) {
      timeline.appendChild(draggingElement);
    } else {
      timeline.insertBefore(draggingElement, afterElement);
    }
  });

  timeline.addEventListener('drop', e => {
    e.preventDefault();
    const dataStr = e.dataTransfer.getData('application/json');
    if (!dataStr) return;
    try {
      const data = JSON.parse(dataStr);
      // Check if this is a reorder drop
      if (data.isReorder) {
        // Handled by dragend listener to sync DOM order with state
        return;
      }

      // New item from palette
      // Insert at the position where the drop occurred
      const afterElement = getDragAfterElement(timeline, e.clientX);
      let insertIndex = timelineSequence.length;
      if (afterElement) {
        insertIndex = parseInt(afterElement.getAttribute('data-index'));
      }

      timelineSequence.splice(insertIndex, 0, data);
      renderTimeline();
    } catch(err) { console.error(err); }
  });
}

function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll('.timeline-item:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

window.updateTimelineRefund = function(index, value) {
  timelineSequence[index].customRefund = parseFloat(value) || 0;
  updateSimulation();
};

function renderTimeline() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  if (timelineSequence.length === 0) {
    timeline.innerHTML = `<div class="drop-zone">ここにスキルをドロップ</div>`;
    updateSimulation();
    return;
  }

  timelineSequence.forEach((item, index) => {
    const wrap = document.createElement('div');
    wrap.className = 'timeline-item';
    wrap.setAttribute('data-index', index);
    wrap.draggable = true;

    wrap.addEventListener('dragstart', e => {
      wrap.classList.add('dragging');
      // Encode that this is a reorder
      const data = JSON.parse(JSON.stringify(item));
      data.isReorder = true;
      data.originalIndex = index;
      e.dataTransfer.setData('application/json', JSON.stringify(data));
      // Required for Firefox drop effect
      e.dataTransfer.effectAllowed = 'move';
    });

    wrap.addEventListener('dragend', () => {
      wrap.classList.remove('dragging');
      // Sync DOM order back to state array
      const timelineNodes = document.querySelectorAll('.timeline-item');
      const newSequence = [];
      timelineNodes.forEach(node => {
        const oldIndex = parseInt(node.getAttribute('data-index'));
        newSequence.push(timelineSequence[oldIndex]);
      });
      timelineSequence = newSequence;
      renderTimeline();
    });

    const block = document.createElement('div');
    block.className = 'skill-block';

    let text = "";
    if (item.type === 'refund') {
      block.classList.add('bg-refund');

      const stats = getCharacterStats(item.charId);
      const defaultRefund = stats ? stats.refundSP : 0;
      const currentVal = item.customRefund !== undefined ? item.customRefund : defaultRefund;

      text = `返還SP <input type="number" value="${currentVal}" min="0" step="1" class="refund-input" onchange="updateTimelineRefund(${index}, this.value)" onclick="event.stopPropagation();">`;
    } else {
      if (item.skillData.type === 'skill') block.classList.add('bg-skill');
      if (item.skillData.type === 'combo') block.classList.add('bg-combo');
      if (item.skillData.type === 'ult') block.classList.add('bg-ult');
      text = item.skillData.name;
    }

    block.innerHTML = `<img src="${item.icon}"> <span>${text}</span>`;

    const delBtn = document.createElement('div');
    delBtn.className = 'delete-overlay';
    delBtn.textContent = '×';
    delBtn.onclick = () => {
      timelineSequence.splice(index, 1);
      renderTimeline();
    };

    wrap.appendChild(block);
    wrap.appendChild(delBtn);
    timeline.appendChild(wrap);
  });

  // Add a small drop zone at the end
  const dropEnd = document.createElement('div');
  dropEnd.className = 'drop-zone';
  dropEnd.style.minWidth = '50px';
  timeline.appendChild(dropEnd);

  updateSimulation();
}

function clearTimeline() {
  timelineSequence = [];
  renderTimeline();
}

// --- Simulation Logic ---

function getCharacterStats(charId) {
  const p = party.find(x => x.id === charId);
  if (!p) return null;

  // Calculate final potentials
  let refundSpBoost = 0;
  let ultCostReduction = 0; // percentage

  if (p.potentials) {
    p.potentials.forEach(pot => {
      if (p.potential >= pot.level) {
        if (pot.type === 'refund_sp_boost') refundSpBoost += pot.value;
        if (pot.type === 'ult_cost_reduction_percent') ultCostReduction += pot.value;
      }
    });
  }

  return {
    efficiency: p.efficiency / 100, // as multiplier (1.0 = 100%)
    refundSP: p.baseRefundSP + refundSpBoost,
    ultCostReduction: ultCostReduction
  };
}

function updateSimulation() {
  let totalSpSpent = 0;
  let currentRefundSpPool = 0;

  // Check if start max charge is checked
  const startMaxChargeCheckbox = document.getElementById('start-max-charge');
  const startMaxCharge = startMaxChargeCheckbox ? startMaxChargeCheckbox.checked : false;

  // Initialize EP state for party
  const epState = {};
  party.forEach(p => {
    const stats = getCharacterStats(p.id);
    const ultSkill = p.skills.find(s => s.type === 'ult');
    let maxEp = ultSkill ? ultSkill.epCost : 100;
    if (ultSkill && stats.ultCostReduction > 0) {
      maxEp = maxEp * (1 - stats.ultCostReduction / 100);
    }

    epState[p.id] = {
      current: startMaxCharge ? maxEp : 0,
      warnings: [],
      ultCount: 0
    };
  });

  // Process sequence
  timelineSequence.forEach((step, index) => {
    const stats = getCharacterStats(step.charId);
    if (!stats) return; // Character removed from party but still in timeline somehow

    if (step.type === 'refund') {
      const refundVal = step.customRefund !== undefined ? step.customRefund : stats.refundSP;
      currentRefundSpPool += refundVal;
    }
    else if (step.type === 'skill') {
      const s = step.skillData;

      if (s.type === 'skill') {
        // SP Consumption
        totalSpSpent += s.spCost;

        // EP Calculation
        // base EP gain is 6.5 for all party members
        // Calculate penalty if refund SP is used
        let epBase = 6.5;
        let consumedRefund = 0;

        if (currentRefundSpPool > 0) {
          // If we have refund SP, we consume it first up to the skill cost
          consumedRefund = Math.min(currentRefundSpPool, s.spCost);
          currentRefundSpPool -= consumedRefund;
          // Formula: ((s.spCost - consumedRefund) / s.spCost) * 6.5
          epBase = ((s.spCost - consumedRefund) / s.spCost) * 6.5;
        }

        // Apply to all party members
        party.forEach(p => {
          const pStats = getCharacterStats(p.id);
          epState[p.id].current += epBase * pStats.efficiency;
        });

      }
      else if (s.type === 'combo') {
        // EP Calculation: 10 for the casting character only
        epState[step.charId].current += 10 * stats.efficiency;
      }
      else if (s.type === 'ult') {
        // Ult Cost consumption
        let cost = s.epCost;
        if (stats.ultCostReduction > 0) {
           cost = cost * (1 - stats.ultCostReduction / 100);
        }

        if (epState[step.charId].current < cost) {
           epState[step.charId].warnings.push(`ステップ ${index+1}: EP不足 (必要: ${cost.toFixed(1)}, 現在: ${epState[step.charId].current.toFixed(1)})`);
        }
        // Always reset to 0 upon using ult
        epState[step.charId].current = 0;
        epState[step.charId].ultCount += 1;
      }
    }
  });

  renderStatus(totalSpSpent, currentRefundSpPool, epState);
}

function renderStatus(totalSpSpent, currentRefundSpPool, epState) {
  document.getElementById('total-sp-spent').textContent = totalSpSpent;
  document.getElementById('current-refund-sp').textContent = currentRefundSpPool;

  const container = document.getElementById('ep-status-list');
  container.innerHTML = '';

  party.forEach(p => {
    const stats = getCharacterStats(p.id);
    const state = epState[p.id];

    // Find ult cost for max bar visualization
    const ultSkill = p.skills.find(s => s.type === 'ult');
    let maxEp = ultSkill ? ultSkill.epCost : 100;
    if (ultSkill && stats.ultCostReduction > 0) {
      maxEp = maxEp * (1 - stats.ultCostReduction / 100);
    }

    const percentage = Math.min(100, (state.current / maxEp) * 100);

    let warningHtml = '';
    if (state.warnings.length > 0) {
      warningHtml = `<div class="ep-warning">${state.warnings.join('<br>')}</div>`;
    }

    const row = document.createElement('div');
    row.className = 'ep-row';
    row.innerHTML = `
      <div class="ep-info">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${p.icon}" class="char-icon" style="margin:0; width:30px; height:30px;">
          <span>${p.name}</span>
        </div>
        <span style="color: #f39c12; font-size: 14px;">必殺発動回数: ${state.ultCount}回</span>
      </div>
      <div class="ep-bar-container">
        <div class="ep-bar" style="width: ${percentage}%;"></div>
        <div class="ep-text">${state.current.toFixed(1)} / ${maxEp.toFixed(1)}</div>
      </div>
      ${warningHtml}
    `;
    container.appendChild(row);
  });
}
