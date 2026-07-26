let allCharacters = [];
let party = [];
let timelineCycles = [
  []
]; // Array of skill objects placed on timeline

document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();

  document.getElementById('btn-clear-timeline').addEventListener('click', clearTimeline);
  document.getElementById('btn-export-url').addEventListener('click', exportUrl);
  document.getElementById('btn-export-image').addEventListener('click', exportImage);
  loadFromUrl();
});

function exportUrl() {
  const data = {
    party: party,
    timelineCycles: timelineCycles
  };
  const jsonStr = JSON.stringify(data);
  const base64 = btoa(encodeURIComponent(jsonStr));
  const newUrl = window.location.origin + window.location.pathname + "#" + base64;

  navigator.clipboard.writeText(newUrl).then(() => {
    alert("URLをクリップボードにコピーしました！");
  }).catch(err => {
    console.error(err);
    alert("URLのコピーに失敗しました。");
  });
}

function loadFromUrl() {
  if (window.location.hash) {
    try {
      const base64 = window.location.hash.substring(1);
      const jsonStr = decodeURIComponent(atob(base64));
      const data = JSON.parse(jsonStr);
      if (data.party && data.timelineCycles) {
        party = data.party;
        timelineCycles = data.timelineCycles;
        renderParty();
        renderPalette();
        renderTimeline();
      }
    } catch (err) {
      console.error("Failed to load state from URL", err);
    }
  }
}

function exportImage() {
  const elementToCapture = document.querySelector('main');
  if (!elementToCapture) return;

  html2canvas(elementToCapture, {
    backgroundColor: '#121212',
    scale: 2
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'endfield_timeline.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    console.error("Image generation failed", err);
    alert("画像の生成に失敗しました。");
  });
}

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
  let defaultPotential = 0;

  if (charData.name === 'タンタン') {
     defaultEfficiency = 107;
     defaultPotential = 1;
  }
  if (charData.name === 'ギルベルタ') {
     defaultEfficiency = 202.9;
  }
  if (charData.name === 'オクギ') {
     defaultEfficiency = 153.4;
     defaultPotential = 1;
  }
  if (charData.name === 'ザイヒ') {
     defaultEfficiency = 133.7;
     defaultPotential = 4;
  }

  party.push({
    ...charData,
    efficiency: defaultEfficiency,
    potential: defaultPotential
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
  timelineCycles = timelineCycles.map(cycle => {
    return cycle.filter(item => {
      if (item.type === 'separator') return true;
      if (item.type === 'refund' && !item.charId) return true; // Keep generic refund
      return currentPartyIds.includes(item.charId);
    });
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

    // Skills
    p.skills.forEach(s => {
      const skillEl = createDraggableBlock({
        type: 'skill',
        charId: p.id,
        skillId: s.id,
        charName: p.name,
        icon: p.icon,
        skillData: s
      }, s.name);
      if (s.type === 'skill') skillEl.classList.add('bg-skill');
      if (s.type === 'combo') skillEl.classList.add('bg-combo');
      if (s.type === 'ult') skillEl.classList.add('bg-ult');
      group.appendChild(skillEl);
    });

    // Refund Panel (if applicable) - Moved to far right
    if (p.baseRefundSP > 0 || (p.potentials && p.potentials.some(pot => pot.type === 'refund_sp_boost')) || p.name === 'タンタン') {
      const refundEl = createDraggableBlock({
        type: 'refund',
        charId: p.id,
        charName: p.name,
        icon: p.icon
      }, `返還SP`);
      refundEl.classList.add('bg-refund');
      group.appendChild(refundEl);
    }

    container.appendChild(group);
  });

  const globalGroup = document.createElement('div');
  globalGroup.className = 'palette-group';

  const refundData = {
    type: 'refund'
  };
  const refundBlock = document.createElement('div');
  refundBlock.className = 'skill-block bg-refund';
  refundBlock.draggable = true;
  refundBlock.innerHTML = `<span>返還SP (任意)</span>`;
  refundBlock.addEventListener('dragstart', e => e.dataTransfer.setData('application/json', JSON.stringify(refundData)));
  refundBlock.addEventListener('click', () => {
    timelineCycles[timelineCycles.length - 1].push(refundData);
    renderTimeline();
  });
  globalGroup.appendChild(refundBlock);

  const sepData = {
    type: 'separator'
  };
  const separatorBlock = document.createElement('div');
  separatorBlock.className = 'skill-block bg-separator-palette';
  separatorBlock.draggable = true;
  separatorBlock.innerHTML = `<span>待機 (仕切り)</span>`;
  separatorBlock.addEventListener('dragstart', e => e.dataTransfer.setData('application/json', JSON.stringify(sepData)));
  separatorBlock.addEventListener('click', () => {
    timelineCycles[timelineCycles.length - 1].push(sepData);
    renderTimeline();
  });
  globalGroup.appendChild(separatorBlock);

  container.appendChild(globalGroup);
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
      timelineCycles[timelineCycles.length - 1].push(JSON.parse(JSON.stringify(data)));
      renderTimeline();
    }
  });

  return el;
}

window.updateTimelineRefund = function(cycleIndex, index, value) {
  timelineCycles[cycleIndex][index].customRefund = parseFloat(value) || 0;
  updateSimulation();
};

function renderTimeline() {
  const wrapper = document.getElementById('timeline-wrapper');
  wrapper.innerHTML = '';

  timelineCycles.forEach((cycle, cycleIndex) => {
    const cycleWrap = document.createElement('div');
    cycleWrap.className = 'cycle-wrapper';

    // Controls
    const controls = document.createElement('div');
    controls.className = 'cycle-controls';

    const cloneBtn = document.createElement('button');
    cloneBtn.textContent = '複製';
    cloneBtn.onclick = () => {
      const cloned = JSON.parse(JSON.stringify(timelineCycles[cycleIndex]));
      // Strip reorder flags just in case
      cloned.forEach(i => delete i.isReorder);
      timelineCycles.splice(cycleIndex + 1, 0, cloned);
      renderTimeline();
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.onclick = () => {
      timelineCycles.splice(cycleIndex, 1);
      if (timelineCycles.length === 0) timelineCycles = [
        []
      ];
      renderTimeline();
    };

    controls.appendChild(cloneBtn);
    controls.appendChild(delBtn);

    const timeline = document.createElement('div');
    timeline.className = 'sequence-timeline';
    timeline.setAttribute('data-cycle-index', cycleIndex);

    // Drop setup for the timeline
    timeline.addEventListener('dragover', e => {
      e.preventDefault();
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
        if (data.isReorder) {
          // Handled by dragend
          return;
        }

        const afterElement = getDragAfterElement(timeline, e.clientX);
        let insertIndex = cycle.length;
        if (afterElement) {
          insertIndex = parseInt(afterElement.getAttribute('data-index'));
        }

        timelineCycles[cycleIndex].splice(insertIndex, 0, data);
        renderTimeline();
      } catch (err) {
        console.error(err);
      }
    });

    if (cycle.length === 0) {
      timeline.innerHTML = `<div class="drop-zone">ここにスキルをドロップ</div>`;
    } else {
      cycle.forEach((item, index) => {
        const wrap = document.createElement('div');
        wrap.className = 'timeline-item';
        wrap.setAttribute('data-cycle', cycleIndex);
        wrap.setAttribute('data-index', index);
        wrap.draggable = true;

        wrap.addEventListener('dragstart', e => {
          wrap.classList.add('dragging');
          const data = JSON.parse(JSON.stringify(item));
          data.isReorder = true;
          data.sourceCycle = cycleIndex;
          data.sourceIndex = index;
          e.dataTransfer.setData('application/json', JSON.stringify(data));
          e.dataTransfer.effectAllowed = 'move';
        });

        wrap.addEventListener('dragend', () => {
          wrap.classList.remove('dragging');

          // Rebuild all cycles from DOM
          const newCycles = [];
          const cycleNodes = document.querySelectorAll('.sequence-timeline');
          cycleNodes.forEach(node => {
            const items = [];
            const itemNodes = node.querySelectorAll('.timeline-item');
            itemNodes.forEach(itemNode => {
              const oldCycle = parseInt(itemNode.getAttribute('data-cycle'));
              const oldIndex = parseInt(itemNode.getAttribute('data-index'));
              items.push(timelineCycles[oldCycle][oldIndex]);
            });
            newCycles.push(items);
          });
          timelineCycles = newCycles;
          if (timelineCycles.length === 0) timelineCycles = [
            []
          ];
          renderTimeline();
        });

        const block = document.createElement('div');
        block.className = 'skill-block';
        let text = "";

        if (item.type === 'refund') {
          block.classList.add('bg-refund');
          const stats = getCharacterStats(item.charId);
          let defaultRefund = stats ? stats.refundSP : 0;

          // Tangtang dynamic refund based on combos BEFORE this refund block
          if (item.charId === 'タンタン') {
            const p = party.find(x => x.id === 'タンタン');
            if (p) {
               // We need to count combos in the flattened sequence up to this point
               const flat = timelineCycles.flat();
               // find absolute index of this item
               let absIndex = 0;
               for (let i = 0; i < cycleIndex; i++) absIndex += timelineCycles[i].length;
               absIndex += index;

               let recentCombos = 0;
               for (let i = absIndex - 1; i >= 0; i--) {
                  const pastItem = flat[i];
                  if (pastItem.type === 'skill' && pastItem.charId === 'タンタン' && pastItem.skillData.type === 'combo') {
                      recentCombos++;
                  } else if (pastItem.type === 'skill' && pastItem.charId === 'タンタン' && pastItem.skillData.type === 'skill') {
                      break; // stop at last skill
                  } else if (pastItem.type === 'refund' && pastItem.charId === 'タンタン') {
                      break; // stop at last refund
                  }
               }
               recentCombos = Math.min(2, recentCombos);
               let refundPerCombo = p.potential >= 1 ? 25 : 20;
               defaultRefund = recentCombos * refundPerCombo;
            }
          }

          const currentVal = item.customRefund !== undefined ? item.customRefund : defaultRefund;
          text = `返還SP <input type="number" value="${currentVal}" min="0" step="1" class="refund-input" onchange="updateTimelineRefund(${cycleIndex}, ${index}, this.value)" onclick="event.stopPropagation();">`;
          block.innerHTML = text;
        } else if (item.type === 'separator') {
          block.classList.add('bg-separator');

        } else {
          if (item.skillData.type === 'skill') block.classList.add('bg-skill');
          if (item.skillData.type === 'combo') block.classList.add('bg-combo');
          if (item.skillData.type === 'ult') block.classList.add('bg-ult');
          text = item.skillData.name;
          block.innerHTML = `<img src="${item.icon}"> <span>${text}</span>`;
        }

        const delBtn = document.createElement('div');
        delBtn.className = 'delete-overlay';
        delBtn.textContent = '×';
        delBtn.onclick = () => {
          timelineCycles[cycleIndex].splice(index, 1);
          renderTimeline();
        };

        wrap.appendChild(block);
        wrap.appendChild(delBtn);
        timeline.appendChild(wrap);
      });

      const dropEnd = document.createElement('div');
      dropEnd.className = 'drop-zone';
      dropEnd.style.minWidth = '50px';
      timeline.appendChild(dropEnd);
    }

    const statsDiv = document.createElement('div');
    statsDiv.className = 'cycle-stats';
    statsDiv.id = `cycle-stats-${cycleIndex}`;
    statsDiv.innerHTML = `<div>消費SP: <span class="sp-spent">0</span></div><div>返還SP: <span class="sp-refund">0</span></div>`;

    const timelineContainer = document.createElement('div');
    timelineContainer.style.display = 'flex';
    timelineContainer.style.flexDirection = 'column';
    timelineContainer.style.gap = '5px';
    timelineContainer.style.flexGrow = '1';

    timelineContainer.appendChild(statsDiv);
    timelineContainer.appendChild(timeline);

    cycleWrap.appendChild(controls);
    cycleWrap.appendChild(timelineContainer);
    wrapper.appendChild(cycleWrap);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'add-cycle-btn';
  addBtn.textContent = '＋ サイクルを追加';
  addBtn.onclick = () => {
    timelineCycles.push([]);
    renderTimeline();
  };
  wrapper.appendChild(addBtn);

  updateSimulation();
}



function clearTimeline() {
  timelineCycles = [
    []
  ];
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
  let tangtangComboCount = 0;

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
      ultCount: 0,
      firstUltCost: maxEp,
      epGainedBeforeFirstUlt: 0,
      baseEpGainedBeforeFirstUlt: 0,
      hasCastUlt: false
    };
  });

  // Process sequence cycle by cycle
  timelineCycles.forEach((cycle, cycleIndex) => {
    let cycleSpSpent = 0;
    let cycleRefundSp = 0;

    cycle.forEach((step, index) => {
      const stats = getCharacterStats(step.charId);
      if (step.type === 'separator') return;
      if (step.type !== 'refund' && !stats) return;

      if (step.type === 'refund') {
        let baseVal = stats ? stats.refundSP : 0;
        if (step.charId === 'タンタン') {
          const p = party.find(x => x.id === 'タンタン');
          if (p) {
            let recentCombos = Math.min(2, tangtangComboCount);
            let refundPerCombo = p.potential >= 1 ? 25 : 20;
            baseVal = recentCombos * refundPerCombo;
            tangtangComboCount = 0; // consumed by the explicit refund block
          }
        }
        const refundVal = step.customRefund !== undefined ? step.customRefund : baseVal;
        currentRefundSpPool += refundVal;
        cycleRefundSp += refundVal;
      } else if (step.type === 'skill') {
        const s = step.skillData;

        if (s.type === 'skill') {
          // Tangtang custom logic for refund on skill use
          if (step.charId === 'タンタン') {
            const p = party.find(x => x.id === 'タンタン');
            if (p) {
              let refundPerCombo = p.potential >= 1 ? 25 : 20;
              let activeCombos = Math.min(2, tangtangComboCount);
              const autoRefund = activeCombos * refundPerCombo;
              currentRefundSpPool += autoRefund;
              cycleRefundSp += autoRefund;
            }
            tangtangComboCount = 0;
          }

          totalSpSpent += s.spCost;
          cycleSpSpent += s.spCost;
          let epBase = 6.5;
          let consumedRefund = 0;

          if (currentRefundSpPool > 0) {
            consumedRefund = Math.min(currentRefundSpPool, s.spCost);
            currentRefundSpPool -= consumedRefund;
            epBase = ((s.spCost - consumedRefund) / s.spCost) * 6.5;
          }

          party.forEach(p => {
            const pStats = getCharacterStats(p.id);
            const gain = epBase * pStats.efficiency;
            epState[p.id].current += gain;
            if (!epState[p.id].hasCastUlt) {
              epState[p.id].epGainedBeforeFirstUlt += gain;
              epState[p.id].baseEpGainedBeforeFirstUlt += epBase;
            }
          });

        } else if (s.type === 'combo') {
          if (step.charId === 'タンタン') {
            tangtangComboCount++;
          }
          const gain = 10 * stats.efficiency;
          epState[step.charId].current += gain;
          if (!epState[step.charId].hasCastUlt) {
              epState[step.charId].epGainedBeforeFirstUlt += gain;
              epState[step.charId].baseEpGainedBeforeFirstUlt += 10;
          }
        } else if (s.type === 'ult') {
          let cost = s.epCost;
          if (stats.ultCostReduction > 0) {
            cost = cost * (1 - stats.ultCostReduction / 100);
          }

          if (epState[step.charId].current < cost) {
            epState[step.charId].warnings.push(`発動時 EP不足 (必要: ${cost.toFixed(1)}, 現在: ${epState[step.charId].current.toFixed(1)})`);
          }
          epState[step.charId].current = 0;
          epState[step.charId].ultCount += 1;
          epState[step.charId].hasCastUlt = true;
        }
      }
    });

    // Update cycle stats UI
    const cycleStatsDiv = document.getElementById(`cycle-stats-${cycleIndex}`);
    if (cycleStatsDiv) {
        cycleStatsDiv.querySelector('.sp-spent').textContent = cycleSpSpent;
        cycleStatsDiv.querySelector('.sp-refund').textContent = cycleRefundSp;
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
        <div style="display: flex; flex-direction: column; align-items: flex-end;">
            <span style="color: #f39c12; font-size: 14px;">必殺発動回数: ${state.ultCount}回</span>
            ${state.hasCastUlt ? (state.baseEpGainedBeforeFirstUlt > 0 ? `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: ${((state.firstUltCost / state.baseEpGainedBeforeFirstUlt) * 100).toFixed(1)}%</span>` : `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: 計算不可</span>`) : `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: 必殺未発動</span>`}
        </div>
      </div>
      <div class="ep-bar-container">
        <div class="ep-bar" style="width: ${percentage}%;"></div>
        <div class="ep-text">${state.current.toFixed(1)} / ${maxEp.toFixed(1)} (${percentage.toFixed(1)}%)</div>
      </div>
      ${warningHtml}
    `;
    container.appendChild(row);
  });


}
window.renderTimeline = renderTimeline;

function getDragAfterElement(container, x) {
  const draggableElements = [...container.querySelectorAll('.timeline-item:not(.dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = x - box.left - box.width / 2;
    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child
      };
    } else {
      return closest;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY
  }).element;
}
