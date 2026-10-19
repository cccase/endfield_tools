// characters.json の読み込み（fetch）がCORSやローカルファイル(file://)制限でブロックされた場合のフォールバックデータ
const DEFAULT_DATA = {
  "defaultParty": [
    "スー",
    "リーノ",
    "オクギ",
    "タンタン"
  ],
  "characters": [
    {
      "id": "ザイヒ",
      "name": "ザイヒ",
      "icon": "image/xaihi.png",
      "defaultEfficiency": 144.6,
      "defaultPotential": 4,
      "baseRefundSP": 0,
      "potentials": [
        {
          "level": 4,
          "type": "ult_cost_reduction_percent",
          "value": 10
        }
      ],
      "skills": [
        { "id": "skill_zaihi", "type": "skill", "name": "戦技", "spCost": 100 },
        { "id": "combo_zaihi", "type": "combo", "name": "連携技" },
        { "id": "ult_zaihi", "type": "ult", "name": "必殺技", "epCost": 80 }
      ]
    },
    {
      "id": "オクギ",
      "name": "オクギ",
      "icon": "image/okugi.png",
      "defaultEfficiency": 146.4,
      "defaultPotential": 1,
      "baseRefundSP": 30,
      "potentials": [
        { "level": 1, "type": "refund_sp_boost", "value": 10 },
        { "level": 4, "type": "ult_cost_reduction_percent", "value": 15 }
      ],
      "skills": [
        { "id": "skill_okugi", "type": "skill", "name": "戦技", "spCost": 100 },
        { "id": "combo_okugi", "type": "combo", "name": "連携技" },
        { "id": "ult_okugi", "type": "ult", "name": "必殺技", "epCost": 100 },
        { "id": "ult2_okugi", "type": "ult2", "name": "必殺技2", "epCost": 0 }
      ]
    },
    {
      "id": "ギルベルタ",
      "name": "ギルベルタ",
      "icon": "image/gilberta.png",
      "defaultEfficiency": 202.9,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        { "level": 4, "type": "ult_cost_reduction_percent", "value": 10 }
      ],
      "skills": [
        { "id": "skill_gilberta", "type": "skill", "name": "戦技", "spCost": 100 },
        { "id": "combo_gilberta", "type": "combo", "name": "連携技" },
        { "id": "ult_gilberta", "type": "ult", "name": "必殺技", "epCost": 90 }
      ]
    },
    {
      "id": "タンタン",
      "name": "タンタン",
      "icon": "image/tangtang.png",
      "defaultEfficiency": 100,
      "defaultPotential": 1,
      "baseRefundSP": 0,
      "potentials": [
        { "level": 1, "type": "refund_sp_boost", "value": 5 },
        { "level": 4, "type": "ult_cost_reduction_percent", "value": 15 }
      ],
      "skills": [
        { "id": "skill_tangtang", "type": "skill", "name": "戦技", "spCost": 100 },
        { "id": "combo_tangtang", "type": "combo", "name": "連携技" },
        { "id": "ult_tangtang", "type": "ult", "name": "必殺技", "epCost": 90 },
        { "id": "ult_cancel_tangtang", "type": "ult_cancel", "name": "必殺キャンセル", "spCost": 0 }
      ]
    },
    {
      "id": "char_su",
      "name": "スー",
      "icon": "image/su.png",
      "defaultEfficiency": 133.4,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        { "level": 4, "type": "ult_cost_reduction_percent", "value": 10 }
      ],
      "skills": [
        { "id": "skill1_su", "type": "skill", "name": "戦技1", "spCost": 100 },
        { "id": "skill2_su", "type": "skill2", "name": "戦技2", "spCost": 15 },
        { "id": "combo_su", "type": "combo", "name": "連携技" },
        { "id": "ult_su", "type": "ult", "name": "必殺技", "epCost": 80 }
      ]
    },
    {
      "id": "char_lino",
      "name": "リーノ",
      "icon": "image/lino.png",
      "defaultEfficiency": 142.7,
      "defaultPotential": 0,
      "baseRefundSP": 0,
      "potentials": [
        { "level": 4, "type": "ult_cost_reduction_percent", "value": 15 }
      ],
      "skills": [
        { "id": "skill_lino", "type": "skill", "name": "戦技", "spCost": 25 },
        { "id": "combo_lino", "type": "combo", "name": "連携技", "epGain": 20 },
        { "id": "ult_lino", "type": "ult", "name": "必殺技", "epCost": 160 }
      ]
    }
  ]
};

let allCharacters = [];
let defaultPartyNames = [];
let party = [];
let timelineCycles = [
  []
]; // タイムライン上に配置されたスキルオブジェクトの配列（サイクルごと）
let cycleNames = ['サイクル 1'];

document.addEventListener('DOMContentLoaded', () => {
  fetchCharacters();

  document.getElementById('btn-clear-timeline').addEventListener('click', clearTimeline);
  document.getElementById('btn-save-timeline').addEventListener('click', saveTimeline);
  document.getElementById('btn-export-url').addEventListener('click', exportUrl);
  document.getElementById('btn-save-timeline').addEventListener('click', saveTimeline);
  document.getElementById('btn-export-image').addEventListener('click', exportImage);
  window.addEventListener('hashchange', loadFromUrl);
  loadFromUrl();
  // 初回描画を保証する
  if (!window.location.hash) {
    renderTimeline();
  }
});

function getExportUrl() {
  const data = {
    party: party,
    timelineCycles: timelineCycles,
    cycleNames: cycleNames
  };
  const jsonStr = JSON.stringify(data);
  const base64 = btoa(encodeURIComponent(jsonStr));
  const baseUrl = (window.location.origin && window.location.origin !== "null")
    ? (window.location.origin + window.location.pathname)
    : window.location.href.split('#')[0];
  return baseUrl + "#" + base64;
}

function exportUrl() {
  const newUrl = getExportUrl();

  navigator.clipboard.writeText(newUrl).then(() => {
    alert("URLをクリップボードにコピーしました！");
  }).catch(err => {
    console.error(err);
    alert("URLのコピーに失敗しました。");
  });
}

// 保存：現在の状態をURL化してクリップボードにコピーし、そのURLへ遷移する
async function saveTimeline() {
  const newUrl = getExportUrl();

  try {
    await navigator.clipboard.writeText(newUrl);
  } catch (err) {
    console.error(err);
  }

  // 保存したURL（URLをコピーと同じURL）へ遷移
  window.location.href = newUrl;
  alert("URLをクリップボードにコピーし、保存先URLへ遷移しました！");
}

function loadFromUrl() {
  if (window.location.hash) {
    try {
      const base64 = window.location.hash.substring(1);
      const jsonStr = decodeURIComponent(atob(base64));
      const data = JSON.parse(jsonStr);
      if (data.party && data.timelineCycles) {
        party = data.party;
        // 最新の characters.json の baseRefundSP や skills 情報を反映する
        if (allCharacters.length > 0) {
          syncPartyWithAllCharacters();
        }
        timelineCycles = data.timelineCycles;
        cycleNames = data.cycleNames || Array.from({length: timelineCycles.length}, (_, i) => 'サイクル ' + (i + 1));
        renderParty();
        renderPalette();
        renderTimeline();
      }
    } catch (err) {
      console.error("URLからの状態復元に失敗しました", err);
    }
  }
}

function syncPartyWithAllCharacters() {
  party.forEach(p => {
    const fresh = allCharacters.find(x => x.id === p.id);
    if (fresh) {
      p.baseRefundSP = fresh.baseRefundSP;
      p.potentials = fresh.potentials;
      p.skills = fresh.skills;
    }
  });
}

function exportImage() {
  const elementToCapture = document.getElementById('timeline-wrapper');
  if (!elementToCapture) return;

  html2canvas(elementToCapture, {
    backgroundColor: null, // 背景透過のPNG
    scale: 2,
    useCORS: true,
    onclone: (clonedDoc) => {
      const clonedWrapper = clonedDoc.getElementById('timeline-wrapper');
      if (clonedWrapper) {
        clonedWrapper.style.overflow = 'visible';
        clonedWrapper.style.width = 'max-content';
        clonedWrapper.style.maxWidth = 'none';
        clonedWrapper.style.padding = '10px';
      }

      // 不要なボタン・UI要素を非表示
      // 1. 各サイクルの複製・削除ボタン
      clonedDoc.querySelectorAll('.cycle-controls').forEach(el => el.style.display = 'none');
      // 2. 「＋ サイクルを追加」ボタン
      clonedDoc.querySelectorAll('.add-cycle-btn').forEach(el => el.style.display = 'none');
      // 3. 各スキルの削除オーバーレイ（×ボタン）
      clonedDoc.querySelectorAll('.delete-overlay').forEach(el => el.style.display = 'none');
      // 4. ドロップゾーン（空のドロップ領域）
      clonedDoc.querySelectorAll('.drop-zone').forEach(el => el.style.display = 'none');
      // 5. タイムライン上の返還SPブロックを非表示
      clonedDoc.querySelectorAll('.timeline-item').forEach(el => {
        if (el.querySelector('.bg-refund')) {
          el.style.display = 'none';
        }
      });
      // 6. サイクル情報内の返還SP表示を非表示
      clonedDoc.querySelectorAll('.cycle-stats div').forEach(el => {
        if (el.textContent.includes('返還SP')) {
          el.style.display = 'none';
        }
      });

      // タイムライン枠の背景・枠線を透過にしてスキルブロックのみを引き立てる
      clonedDoc.querySelectorAll('.sequence-timeline').forEach(el => {
        el.style.backgroundColor = 'transparent';
        el.style.border = 'none';
        el.style.padding = '4px 0';
        el.style.minHeight = 'auto';
        el.style.overflow = 'visible';
        el.style.width = 'max-content';
      });

      // サイクル情報表示の調整
      clonedDoc.querySelectorAll('.cycle-stats').forEach(el => {
        el.style.backgroundColor = 'transparent';
        el.style.border = 'none';
        el.style.color = '#fff';
      });

      // input要素のテキストずれ防止と見た目調整
      const inputs = clonedDoc.querySelectorAll('input[type="number"], input[type="text"]');
      inputs.forEach(input => {
        const span = clonedDoc.createElement('span');
        span.textContent = input.value;
        span.style.cssText = window.getComputedStyle(input).cssText;
        span.style.display = 'inline-block';
        span.style.boxSizing = 'border-box';
        span.style.lineHeight = 'normal';

        if (input.classList.contains('cycle-name-input')) {
          span.style.background = 'transparent';
          span.style.border = 'none';
          span.style.fontSize = '15px';
          span.style.fontWeight = 'bold';
          span.style.color = '#f39c12';
          span.style.padding = '0';
          span.style.width = 'auto';
        } else if (input.classList.contains('refund-input')) {
          span.style.background = '#2c2c2c';
          span.style.border = '1px solid #444';
          span.style.borderRadius = '4px';
          span.style.padding = '2px 4px';
          span.style.minWidth = '24px';
          span.style.textAlign = 'center';
        }
        input.parentNode.replaceChild(span, input);
      });
    }
  }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'endfield_timeline.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  }).catch(err => {
    console.error("画像の生成に失敗しました", err);
    alert("画像の生成に失敗しました。");
  });
}

async function fetchCharacters() {
  try {
    const res = await fetch('data/characters.json');
    if (!res.ok) throw new Error(`HTTPエラー! ステータス: ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      allCharacters = data;
      defaultPartyNames = ['スー', 'リーノ', 'オクギ', 'タンタン'];
    } else {
      allCharacters = data.characters || [];
      defaultPartyNames = data.defaultParty || [];
    }
  } catch (e) {
    console.warn("characters.json の fetch に失敗したため、組み込みデータを使用します:", e);
    allCharacters = JSON.parse(JSON.stringify(DEFAULT_DATA.characters));
    defaultPartyNames = JSON.parse(JSON.stringify(DEFAULT_DATA.defaultParty));
  }

  try {
    renderRoster();

    // URLから編成が復元されていない場合は、characters.jsonで指定されたデフォルト編成を追加する
    if (party.length === 0) {
      defaultPartyNames.forEach(name => {
        const c = allCharacters.find(x => x.name === name);
        if (c) addToParty(c);
      });
    } else {
      // 復元済みパーティーに最新のbaseRefundSPやスキルデータを同期する
      syncPartyWithAllCharacters();
      renderTimeline();
    }
  } catch (err) {
    console.error("キャラクターリストの描画中にエラーが発生しました:", err);
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
    return; // 既にパーティーに編成済み
  }

  // characters.json で指定された初期効率・初期凸数を設定
  const defaultEfficiency = charData.defaultEfficiency !== undefined ? charData.defaultEfficiency : 100;
  const defaultPotential = charData.defaultPotential !== undefined ? charData.defaultPotential : 0;

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
  renderParty();
  renderPalette();

  // パーティーから外れたキャラクターのスキルをタイムラインから除外する
  const currentPartyIds = party.map(p => p.id);
  timelineCycles = timelineCycles.map(cycle => {
    return cycle.filter(item => {
      if (item.type === 'separator') return true;
      if (item.type === 'refund' && !item.charId) return true; // 共通の返還SPブロックは残す
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

    // 凸数（潜在能力）の選択肢を生成
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

    // 選択中の凸数を反映
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

  const tableWrap = document.createElement('div');
  tableWrap.className = 'palette-table';

  // 列ヘッダー行（種類ごとの配置を明示）
  const headerRow = document.createElement('div');
  headerRow.className = 'palette-header-row';
  headerRow.innerHTML = `
    <div class="palette-header-cell"></div>
    <div class="palette-header-cell">戦技1</div>
    <div class="palette-header-cell">戦技2</div>
    <div class="palette-header-cell">連携技</div>
    <div class="palette-header-cell">必殺技</div>
    <div class="palette-header-cell">必殺追加</div>
    <div class="palette-header-cell">返還SP</div>
  `;
  tableWrap.appendChild(headerRow);

  party.forEach(p => {
    const row = document.createElement('div');
    row.className = 'palette-row';

    // 0. アイコン列
    const iconCell = document.createElement('div');
    iconCell.className = 'palette-cell palette-cell-char';
    iconCell.innerHTML = `<img src="${p.icon}" class="char-icon" style="margin:0; width:34px; height:34px;">`;
    row.appendChild(iconCell);

    // 1. 戦技1列（通常の戦技、またはスーの戦技1）
    const skill1Cell = document.createElement('div');
    skill1Cell.className = 'palette-cell';
    const s1 = p.skills.find(s => s.id === 'skill1_su' || (s.type === 'skill' && s.id !== 'skill2_su'));
    if (s1) {
      const el = createDraggableBlock({
        type: 'skill',
        charId: p.id,
        skillId: s1.id,
        charName: p.name,
        icon: p.icon,
        skillData: s1
      }, s1.name);
      el.classList.add('bg-skill');
      skill1Cell.appendChild(el);
    }
    row.appendChild(skill1Cell);

    // 2. 戦技2列（スーの戦技2など。持たないキャラは空セル）
    const skill2Cell = document.createElement('div');
    skill2Cell.className = 'palette-cell';
    const s2 = p.skills.find(s => s.type === 'skill2' || s.id === 'skill2_su');
    if (s2) {
      const el = createDraggableBlock({
        type: 'skill',
        charId: p.id,
        skillId: s2.id,
        charName: p.name,
        icon: p.icon,
        skillData: s2
      }, s2.name);
      el.classList.add('bg-skill');
      skill2Cell.appendChild(el);
    }
    row.appendChild(skill2Cell);

    // 3. 連携技列（全キャラ共通）
    const comboCell = document.createElement('div');
    comboCell.className = 'palette-cell';
    const combo = p.skills.find(s => s.type === 'combo');
    if (combo) {
      const el = createDraggableBlock({
        type: 'skill',
        charId: p.id,
        skillId: combo.id,
        charName: p.name,
        icon: p.icon,
        skillData: combo
      }, combo.name);
      el.classList.add('bg-combo');
      comboCell.appendChild(el);
    }
    row.appendChild(comboCell);

    // 4. 必殺技列（全キャラ共通）
    const ultCell = document.createElement('div');
    ultCell.className = 'palette-cell';
    const ult = p.skills.find(s => s.type === 'ult');
    if (ult) {
      const el = createDraggableBlock({
        type: 'skill',
        charId: p.id,
        skillId: ult.id,
        charName: p.name,
        icon: p.icon,
        skillData: ult
      }, ult.name);
      el.classList.add('bg-ult');
      ultCell.appendChild(el);
    }
    row.appendChild(ultCell);

    // 5. 必殺追加列（必殺技2、必殺キャンセル等。持たないキャラは空セル）
    const ultExtraCell = document.createElement('div');
    ultExtraCell.className = 'palette-cell';
    const ultExtra = p.skills.find(s => s.type === 'ult2' || s.type === 'ult_cancel');
    if (ultExtra) {
      const el = createDraggableBlock({
        type: 'skill',
        charId: p.id,
        skillId: ultExtra.id,
        charName: p.name,
        icon: p.icon,
        skillData: ultExtra
      }, ultExtra.name);
      if (ultExtra.type === 'ult2') el.classList.add('bg-ult2');
      if (ultExtra.type === 'ult_cancel') el.classList.add('bg-ult-cancel');
      ultExtraCell.appendChild(el);
    }
    row.appendChild(ultExtraCell);

    // 6. 返還SP列（対象キャラのみ。持たないキャラは空セル）
    const refundCell = document.createElement('div');
    refundCell.className = 'palette-cell';
    if (p.baseRefundSP > 0 || (p.potentials && p.potentials.some(pot => pot.type === 'refund_sp_boost')) || p.name === 'タンタン' || p.name === 'リーノ') {
      const refundEl = createDraggableBlock({
        type: 'refund',
        charId: p.id,
        charName: p.name,
        icon: p.icon
      }, `返還SP`);
      refundEl.classList.add('bg-refund');
      refundCell.appendChild(refundEl);
    }
    row.appendChild(refundCell);

    tableWrap.appendChild(row);
  });

  container.appendChild(tableWrap);

  // 共通ブロック（待機仕切り・任意返還SP）
  const commonRow = document.createElement('div');
  commonRow.className = 'palette-common-row';

  const commonLabel = document.createElement('span');
  commonLabel.style.cssText = 'color: var(--text-muted); font-size: 13px; font-weight: bold; margin-right: 5px;';
  commonLabel.textContent = '共通:';
  commonRow.appendChild(commonLabel);

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
  commonRow.appendChild(refundBlock);

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
  commonRow.appendChild(separatorBlock);

  container.appendChild(commonRow);
}


function createDraggableBlock(data, text) {
  const el = document.createElement('div');
  el.className = 'skill-block';
  el.draggable = true;
  el.innerHTML = `<img src="${data.icon}"> <span>${text}</span>`;

  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('application/json', JSON.stringify(data));
  });

  // クリックでもタイムライン末尾に追加可能にする
  el.addEventListener('click', () => {
    // パレット上のブロック（インデックス未設定）のみ追加する
    if (data.index === undefined) {
      timelineCycles[timelineCycles.length - 1].push(JSON.parse(JSON.stringify(data)));
      renderTimeline();
    }
  });

  return el;
}


window.updateCycleName = function(cycleIndex, value) {
  cycleNames[cycleIndex] = value;
};

window.updateTimelineRefund = function(cycleIndex, index, value) {
  timelineCycles[cycleIndex][index].customRefund = parseFloat(value) || 0;
  updateSimulation();
};

// タンタン・リーノ共通：直前の返還SP以降に発動した連携技回数から返還SPの初期値を計算する関数
function calculateComboBasedRefund(charId, cycleIndex, index) {
  const p = party.find(x => x.id === charId);
  if (!p) return 0;

  const flat = timelineCycles.flat();
  let absIndex = 0;
  for (let i = 0; i < cycleIndex; i++) absIndex += timelineCycles[i].length;
  absIndex += index;

  let recentCombos = 0;
  for (let i = absIndex - 1; i >= 0; i--) {
    const pastItem = flat[i];
    if ((pastItem.type === 'skill' || pastItem.type === 'combo') && pastItem.charId === charId && pastItem.skillData && pastItem.skillData.type === 'combo') {
      recentCombos++;
    } else if (pastItem.type === 'refund' && pastItem.charId === charId) {
      break; // 直前の同キャラの返還SPブロックでカウントを打ち切る
    } else if (pastItem.charId === charId && pastItem.skillData && pastItem.skillData.type === 'ult_cancel') {
      break; // 同キャラの必殺キャンセル以前の連携技はカウントしない（カウントを0に戻す）
    }
  }

  // 連携技のカウント上限（リーノは最大1回、タンタンは最大2回）
  const maxCombos = (charId === 'char_lino') ? 1 : 2;
  recentCombos = Math.min(maxCombos, recentCombos);

  // 連携技1回あたりの返還SP（リーノは10、タンタンは20＋凸効果）
  let refundPerCombo = (charId === 'char_lino') ? 10 : 20;
  if (p.potentials) {
    p.potentials.forEach(pot => {
      if (p.potential >= pot.level && pot.type === 'refund_sp_boost') {
        refundPerCombo += pot.value;
      }
    });
  }

  return (recentCombos * refundPerCombo) + (p.baseRefundSP || 0);
}

function renderTimeline() {
  const wrapper = document.getElementById('timeline-wrapper');
  wrapper.innerHTML = '';

  timelineCycles.forEach((cycle, cycleIndex) => {
    const cycleWrap = document.createElement('div');
    cycleWrap.className = 'cycle-wrapper';

    // サイクル操作ボタン（複製・削除）
    const controls = document.createElement('div');
    controls.className = 'cycle-controls';

    const cloneBtn = document.createElement('button');
    cloneBtn.textContent = '複製';
    cloneBtn.onclick = () => {
      const cloned = JSON.parse(JSON.stringify(timelineCycles[cycleIndex]));
      // 並び替え用の一時フラグを除去
      cloned.forEach(i => delete i.isReorder);
      timelineCycles.splice(cycleIndex + 1, 0, cloned);
      cycleNames.splice(cycleIndex + 1, 0, cycleNames[cycleIndex] + ' (コピー)');
      renderTimeline();
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = '削除';
    delBtn.onclick = () => {
      timelineCycles.splice(cycleIndex, 1);
      cycleNames.splice(cycleIndex, 1);
      if (timelineCycles.length === 0) {
        timelineCycles = [
          []
        ];
        cycleNames = ['サイクル 1'];
      }
      renderTimeline();
    };

    controls.appendChild(cloneBtn);
    controls.appendChild(delBtn);

    const timeline = document.createElement('div');
    timeline.className = 'sequence-timeline';
    timeline.setAttribute('data-cycle-index', cycleIndex);

    // タイムラインへのドラッグ＆ドロップ設定
    timeline.addEventListener('dragover', e => {
      e.preventDefault();
      const draggingElement = document.querySelector('.timeline-item.dragging');
      if (draggingElement) {
        removeDropIndicator();
        const afterElement = getDragAfterElement(timeline, e.clientX, e.clientY);
        if (afterElement == null) {
          timeline.appendChild(draggingElement);
        } else {
          timeline.insertBefore(draggingElement, afterElement);
        }
      } else {
        // パレットからのドラッグ時：ドロップ先インジケーター（隙間ガイド）を表示
        showDropIndicator(timeline, e.clientX, e.clientY);
      }
    });

    timeline.addEventListener('dragleave', e => {
      if (!timeline.contains(e.relatedTarget)) {
        removeDropIndicator();
      }
    });

    timeline.addEventListener('drop', e => {
      e.preventDefault();
      removeDropIndicator();
      const dataStr = e.dataTransfer.getData('application/json');
      if (!dataStr) return;
      try {
        const data = JSON.parse(dataStr);
        if (data.isReorder) {
          // 並び替えはdragendイベントで処理する
          return;
        }

        const afterElement = getDragAfterElement(timeline, e.clientX, e.clientY);
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

          // DOMの並び順から全サイクルの配列を再構築する
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

          // タンタン・リーノは直前の連携技発動回数に応じた返還SPを同じロジックで計算する
          if (item.charId === 'タンタン' || item.charId === 'char_lino') {
            defaultRefund = calculateComboBasedRefund(item.charId, cycleIndex, index);
          }

          const currentVal = item.customRefund !== undefined ? item.customRefund : defaultRefund;
          const pObj = party.find(x => x.id === item.charId);
          const iconHtml = pObj ? `<img src="${pObj.icon}">` : '';
          text = `${iconHtml}返還SP <input type="number" value="${currentVal}" min="0" step="1" class="refund-input" onchange="updateTimelineRefund(${cycleIndex}, ${index}, this.value)" onclick="event.stopPropagation();">`;
          block.innerHTML = text;
        } else if (item.type === 'separator') {
          block.classList.add('bg-separator');

        } else {
          if (item.skillData.type === 'skill' || item.skillData.type === 'skill2') block.classList.add('bg-skill');
          if (item.skillData.type === 'combo') block.classList.add('bg-combo');
          if (item.skillData.type === 'ult') block.classList.add('bg-ult');
          if (item.skillData.type === 'ult2') block.classList.add('bg-ult2');
          if (item.skillData.type === 'ult_cancel') block.classList.add('bg-ult-cancel');
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

        // 中クリックでスキルを削除できるようにする
        wrap.addEventListener('auxclick', e => {
          if (e.button === 1) {
            e.preventDefault();
            e.stopPropagation();
            timelineCycles[cycleIndex].splice(index, 1);
            renderTimeline();
          }
        });
        wrap.addEventListener('mousedown', e => {
          if (e.button === 1) {
            e.preventDefault(); // 自動スクロールの発動を抑止
          }
        });

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

    // サイクル統計ヘッダー（編集可能なサイクル名を含む）
    statsDiv.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; margin-right:auto;">
         <input type="text" class="cycle-name-input" value="${(cycleNames[cycleIndex] || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}" onchange="updateCycleName(${cycleIndex}, this.value)" placeholder="サイクル名" style="background:#2c2c2c; color:#fff; border:1px solid #444; border-radius:4px; padding:4px 8px; font-weight:bold; width:150px;">
      </div>
      <div>消費SP: <span class="sp-spent">0</span></div>
      <div>返還SP: <span class="sp-refund">0</span></div>
    `;

    const timelineContainer = document.createElement('div');
    timelineContainer.className = 'timeline-cycle-container';
    timelineContainer.style.display = 'flex';
    timelineContainer.style.flexDirection = 'column';
    timelineContainer.style.gap = '5px';
    timelineContainer.style.flexGrow = '1';
    timelineContainer.style.minWidth = '0';

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
    cycleNames.push('サイクル ' + timelineCycles.length);
    renderTimeline();
  };
  wrapper.appendChild(addBtn);

  updateSimulation();
}



function clearTimeline() {
  timelineCycles = [
    []
  ];
  cycleNames = ['サイクル 1'];
  renderTimeline();
}

// --- シミュレーション計算ロジック ---

function getCharacterStats(charId) {
  const p = party.find(x => x.id === charId);
  if (!p) return null;

  // 凸効果（潜在能力）の集計
  let refundSpBoost = 0;
  let ultCostReduction = 0; // 必殺技コスト軽減率（%）

  if (p.potentials) {
    p.potentials.forEach(pot => {
      if (p.potential >= pot.level) {
        if (pot.type === 'refund_sp_boost') refundSpBoost += pot.value;
        if (pot.type === 'ult_cost_reduction_percent') ultCostReduction += pot.value;
      }
    });
  }

  return {
    efficiency: p.efficiency / 100, // 倍率（1.0 = 100%）
    refundSP: p.baseRefundSP + refundSpBoost,
    ultCostReduction: ultCostReduction
  };
}

function updateSimulation() {
  let totalSpSpent = 0;
  let totalSpRefunded = 0;
  let currentRefundSpPool = 0;
  let totalSkillCasts = 0;
  let suSkill1CastCount = 0;
  // キャラクターごとの連携技カウント（返還SP計算用：タンタン・リーノ共通ロジック）
  const comboCountsForRefund = {};

  // 「開始時チャージマックス」チェックボックスの状態を取得
  const startMaxChargeCheckbox = document.getElementById('start-max-charge');
  const startMaxCharge = startMaxChargeCheckbox ? startMaxChargeCheckbox.checked : false;

  // パーティー全員のEP状態を初期化
  const epState = {};
  party.forEach(p => {
    const stats = getCharacterStats(p.id);
    const ultSkill = p.skills.find(s => s.type === 'ult');
    let maxEp = ultSkill ? ultSkill.epCost : 100;
    if (ultSkill && stats.ultCostReduction > 0) {
      maxEp = maxEp * (1 - stats.ultCostReduction / 100);
    }

    comboCountsForRefund[p.id] = 0;

    epState[p.id] = {
      current: startMaxCharge ? maxEp : 0,
      warnings: [],
      ultCount: 0,
      firstUltCost: maxEp,
      epGainedBeforeFirstUlt: 0,
      baseEpGainedBeforeFirstUlt: 0,
      hasCastUlt: false,
      epLock: false,
      comboCount: 0
    };
  });

  // サイクルごとにタイムラインを順番に処理する
  timelineCycles.forEach((cycle, cycleIndex) => {
    let cycleSpSpent = 0;
    let cycleRefundSp = 0;

    cycle.forEach((step, index) => {
      const stats = getCharacterStats(step.charId);
      if (step.type === 'separator') return;
      if (step.type !== 'refund' && !stats) return;

      if (step.type === 'refund') {
        let baseVal = stats ? stats.refundSP : 0;
        // タンタンとリーノは連携技回数から返還SPを算出する
        if (step.charId === 'タンタン' || step.charId === 'char_lino') {
          const p = party.find(x => x.id === step.charId);
          if (p) {
            const maxCombos = (step.charId === 'char_lino') ? 1 : 2;
            const recentCombos = Math.min(maxCombos, comboCountsForRefund[step.charId] || 0);
            let refundPerCombo = (step.charId === 'char_lino') ? 10 : 20;
            if (p.potentials) {
              p.potentials.forEach(pot => {
                if (p.potential >= pot.level && pot.type === 'refund_sp_boost') {
                  refundPerCombo += pot.value;
                }
              });
            }
            baseVal = (recentCombos * refundPerCombo) + (p.baseRefundSP || 0);
            comboCountsForRefund[step.charId] = 0;
          }
        }
        const refundVal = step.customRefund !== undefined ? step.customRefund : baseVal;
        totalSpRefunded += refundVal;
        currentRefundSpPool += refundVal;
        cycleRefundSp += refundVal;
      } else if (step.type === 'skill' || step.type === 'skill2' || step.type === 'skill_2') {
        const s = step.skillData || {};

        // スーの戦技1・戦技2の発動順序チェック
        if (s.name === '戦技1' && step.charId === 'char_su') {
          suSkill1CastCount++;
        }
        if (s.name === '戦技2' && step.charId === 'char_su') {
          if (suSkill1CastCount <= 0) {
            epState[step.charId].warnings.push('戦技2は戦技1の後に発動可能');
          } else {
            suSkill1CastCount--;
          }
        }

        if (s.type === 'skill' || s.type === 'skill2' || s.type === 'skill_2') {
          const spCost = s.spCost || 0;
          totalSpSpent += spCost;
          cycleSpSpent += spCost;

          // 返還SPプールから優先的に消費する
          let consumedRefund = 0;
          if (currentRefundSpPool > 0 && spCost > 0) {
            consumedRefund = Math.min(currentRefundSpPool, spCost);
            currentRefundSpPool -= consumedRefund;
          }

          // 実質消費した通常SP（返還SPを除いた消費SP）
          const actualNormalSpSpent = spCost - consumedRefund;

          // 必殺チャージ（EP回復）仕様：
          // 通常のSP100消費につき基礎6.5回復（返還SP消費分はEPを回復しない）
          // 例：100SP消費 -> 6.5回復、25SP消費 -> 6.5 * (1/4)回復、通常SP75+返還SP25消費 -> 6.5 * (3/4)回復
          const epBase = (actualNormalSpSpent / 100) * 6.5;
          const skillCastValue = actualNormalSpSpent / 100;
          totalSkillCasts += skillCastValue;

          party.forEach(p => {
            const pStats = getCharacterStats(p.id);
            const gain = epBase * pStats.efficiency;
            if (!epState[p.id].epLock) {
              epState[p.id].current += gain;
              if (!epState[p.id].hasCastUlt) {
                epState[p.id].epGainedBeforeFirstUlt += gain;
                epState[p.id].baseEpGainedBeforeFirstUlt += epBase;
              }
            }
          });

        } else if (s.type === 'combo' || (step.skillData && step.skillData.type === 'combo')) {
          if (step.charId === 'タンタン' || step.charId === 'char_lino') {
            comboCountsForRefund[step.charId] = (comboCountsForRefund[step.charId] || 0) + 1;
          }
          // 連携技による必殺チャージ回復（リーノは20、通常キャラは10）
          const baseGain = (s.epGain !== undefined) ? s.epGain : ((step.charId === 'char_lino') ? 20 : 10);
          const gain = baseGain * stats.efficiency;
          epState[step.charId].comboCount += 1;
          if (!epState[step.charId].epLock) {
            epState[step.charId].current += gain;
            if (!epState[step.charId].hasCastUlt) {
              epState[step.charId].epGainedBeforeFirstUlt += gain;
              epState[step.charId].baseEpGainedBeforeFirstUlt += baseGain;
            }
          }
        } else if (step.type === 'ult' || (step.skillData && step.skillData.type === 'ult')) {
          const s = step.skillData || {};
          let cost = s.epCost || 0;
          if (stats.ultCostReduction > 0) {
            cost = cost * (1 - stats.ultCostReduction / 100);
          }

          if (epState[step.charId].current < cost) {
            epState[step.charId].warnings.push(`発動時 EP不足 (必要: ${cost.toFixed(1)}, 現在: ${epState[step.charId].current.toFixed(1)})`);
          }
          epState[step.charId].current = 0;
          epState[step.charId].ultCount += 1;
          epState[step.charId].hasCastUlt = true;

          // オクギは必殺技1発動後に必殺技2を発動するまでEP獲得がロックされる
          if (step.charId === 'オクギ') {
            epState[step.charId].epLock = true;
          }
        } else if (step.type === 'ult2' || (step.skillData && step.skillData.type === 'ult2')) {
          // オクギの必殺技2発動でEPロックを解除する
          if (step.charId === 'オクギ') {
            epState[step.charId].epLock = false;
          }
        } else if (step.type === 'ult_cancel' || (step.skillData && step.skillData.type === 'ult_cancel')) {
          // 必殺キャンセル発動時、そのキャラの返還SP用連携技カウントを0に戻す
          comboCountsForRefund[step.charId] = 0;
        }
      }
    });

    // サイクルごとの消費SP・返還SP表示を更新
    const cycleStatsDiv = document.getElementById(`cycle-stats-${cycleIndex}`);
    if (cycleStatsDiv) {
      cycleStatsDiv.querySelector('.sp-spent').textContent = cycleSpSpent;
      cycleStatsDiv.querySelector('.sp-refund').textContent = cycleRefundSp;
    }
  });

  renderStatus(totalSpSpent, totalSpRefunded, currentRefundSpPool, epState, totalSkillCasts);
}

function renderStatus(totalSpSpent, totalSpRefunded, currentRefundSpPool, epState, totalSkillCasts) {
  const totalSpSpentEl = document.getElementById('total-sp-spent');
  if (totalSpSpentEl) totalSpSpentEl.textContent = totalSpSpent - totalSpRefunded;

  const totalSpRefundedEl = document.getElementById('total-sp-refunded');
  if (totalSpRefundedEl) totalSpRefundedEl.textContent = totalSpRefunded;

  const currentRefundSpEl = document.getElementById('current-refund-sp');
  if (currentRefundSpEl) currentRefundSpEl.textContent = currentRefundSpPool;

  const totalSkillCastsEl = document.getElementById('total-skill-casts');
  if (totalSkillCastsEl) totalSkillCastsEl.textContent = totalSkillCasts.toFixed(2);

  const container = document.getElementById('ep-status-list');
  container.innerHTML = '';

  party.forEach(p => {
    const stats = getCharacterStats(p.id);
    const state = epState[p.id];

    // ゲージ最大値表示用の必殺技コストを計算
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
            <span style="color: #f39c12; font-size: 14px;">必殺発動回数: ${state.ultCount}回 / 連携技: ${state.comboCount}回</span>
            ${state.baseEpGainedBeforeFirstUlt > 0 ? `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: ${((state.firstUltCost / state.baseEpGainedBeforeFirstUlt) * 100).toFixed(1)}%</span>` : `<span style="color: #a0a0a0; font-size: 12px;">最低必要チャージ効率: 計算不可</span>`}
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

let dropIndicator = null;
function getDropIndicator() {
  if (!dropIndicator) {
    dropIndicator = document.createElement('div');
    dropIndicator.className = 'timeline-drop-indicator';
  }
  return dropIndicator;
}

function showDropIndicator(container, x, y) {
  const indicator = getDropIndicator();
  const afterElement = getDragAfterElement(container, x, y);
  if (afterElement == null) {
    container.appendChild(indicator);
  } else {
    container.insertBefore(indicator, afterElement);
  }
}

function removeDropIndicator() {
  if (dropIndicator && dropIndicator.parentNode) {
    dropIndicator.parentNode.removeChild(dropIndicator);
  }
}

document.addEventListener('dragend', () => {
  removeDropIndicator();
});

function getDragAfterElement(container, x, y) {
  const draggableElements = [...container.querySelectorAll('.timeline-item:not(.dragging)')];
  if (draggableElements.length === 0) return null;

  // コンテナの並び方向（縦並び flex-direction: column または横並び）を判定
  const style = window.getComputedStyle(container);
  const isVertical = style.flexDirection === 'column';

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = isVertical
      ? (y - box.top - box.height / 2)
      : (x - box.left - box.width / 2);

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



window.timelineCycles = timelineCycles;
