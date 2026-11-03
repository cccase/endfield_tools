/**
 * Time Track Timeline for Arknights: Endfield
 * Implements a Premiere Pro-style Video & Audio Multi-Track Timeline UI:
 * - Video Tracks (V1-V4): Skill Clips (placed via click/drag or synced from Skill Rotation)
 * - Audio Tracks (A1-A5): Buff, Debuff, Arts Infliction/Anomaly & Crush Blocks (auto-placed on skill cast, freely movable & resizable)
 */
(function(global) {
  'use strict';

  class TimeTrackTimeline {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      this.pxPerSec = options.pxPerSec || 30; // 1秒あたりのピクセル幅
      this.minSec = 0;
      this.maxSec = options.maxSec || 35; // タイムライン全体の表示秒数
      this.snapGrid = 0.5; // スナップ単位（秒）

      this.party = [];
      this.tracks = [];     // { id, name, icon, kind: 'skill'|'buff'|'enemy', charId }
      this.skillClips = []; // { id, trackId, charId, charName, charIcon, skillId, skillType, name, shortName, startTime, duration, color }
      this.blocks = [];     // { id, trackId, linkedClipId, name, startTime, duration, color, bonusType, bonusValue, valueText, source }
      this.activeDrag = null;
      this.userModified = false;
      this._idCounter = 0;

      this.initDom();
    }

    _nextId(prefix) {
      this._idCounter += 1;
      return `${prefix}_${Date.now().toString(36)}_${this._idCounter}`;
    }

    initDom() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="time-track-toolbar">
          <div class="time-track-title-wrap">
            <h3 class="time-track-heading">🎬 タイムライン <span class="time-track-badge">動画編集型マルチトラック</span></h3>
            <span class="time-track-hint">上段(Vトラック)にスキルクリップを配置すると、下段(Aトラック)に連動バフ・付着が自動仮配置されます。左右ドラッグで移動・端ドラッグで伸縮できます。</span>
          </div>
          <div class="time-track-controls">
            <div class="manual-buff-adder">
              <select id="select-manual-buff" class="manual-buff-select" title="任意のバフ・デバフブロックを手動追加">
                <option value="dmg20">🔊 与ダメージ+20% (10s)</option>
                <option value="dmg30">🔊 与ダメージ+30% (15s)</option>
                <option value="volcano">🔥 火山・パルス効果+50% (10s)</option>
                <option value="kyuho">⚔️ 旧鋒物理ダメ+24% (20s)</option>
                <option value="vuln15">🎯 敵脆弱・被ダメ+15% (12s)</option>
                <option value="vuln20">🎯 感電/腐食デバフ+20% (10s)</option>
              </select>
              <button type="button" class="btn-time-add-buff" id="btn-add-manual-buff">+ バフ追加</button>
            </div>
            <span class="zoom-label">ズーム:</span>
            <button type="button" class="btn-time-zoom" id="btn-zoom-out" title="縮小">−</button>
            <span class="zoom-value" id="label-zoom-val">${this.pxPerSec}px/s</span>
            <button type="button" class="btn-time-zoom" id="btn-zoom-in" title="拡大">+</button>
            <button type="button" class="btn-time-reset" id="btn-time-auto-sync" title="「スキル回し」タブの順序からクリップとバフを初期再配置">🔄 スキル回しから再同期</button>
          </div>
        </div>

        <!-- クイックスキルクリップ配置バー（クリックまたはトラックへD&Dでポンポン配置） -->
        <div class="time-clip-palette-bar" id="time-clip-palette-bar">
          <!-- 編成キャラのスキルクリップボタンが描画される -->
        </div>

        <div class="time-track-editor">
          <!-- 左側トラック名一覧ヘッダー -->
          <div class="track-headers-column" id="track-headers-column">
            <div class="track-ruler-header">トラック構成</div>
            <div class="track-header-list" id="track-header-list"></div>
          </div>
          <!-- 右側タイムラインスクロール領域 -->
          <div class="track-scroll-area" id="track-scroll-area">
            <!-- 時間目盛りルーラー -->
            <div class="time-ruler" id="time-ruler"></div>
            <!-- 各トラックレーンとクリップ/ブロック -->
            <div class="track-lanes" id="track-lanes"></div>
          </div>
        </div>
      `;

      const btnIn = this.container.querySelector('#btn-zoom-in');
      const btnOut = this.container.querySelector('#btn-zoom-out');
      const btnSync = this.container.querySelector('#btn-time-auto-sync');
      const btnAddBuff = this.container.querySelector('#btn-add-manual-buff');

      if (btnIn) {
        btnIn.addEventListener('click', () => this.setZoom(Math.min(64, this.pxPerSec + 6)));
      }
      if (btnOut) {
        btnOut.addEventListener('click', () => this.setZoom(Math.max(16, this.pxPerSec - 6)));
      }
      if (btnSync) {
        btnSync.addEventListener('click', () => {
          this.userModified = false;
          if (typeof global.autoSyncTimeTracks === 'function') {
            global.autoSyncTimeTracks(true);
          }
        });
      }
      if (btnAddBuff) {
        btnAddBuff.addEventListener('click', () => {
          const sel = this.container.querySelector('#select-manual-buff');
          if (sel) this.addManualBuffBlock(sel.value);
        });
      }

      this.initDragHandlers();
    }

    setZoom(newPxPerSec) {
      this.pxPerSec = newPxPerSec;
      const lbl = this.container.querySelector('#label-zoom-val');
      if (lbl) lbl.textContent = `${this.pxPerSec}px/s`;
      this.render();
    }

    buildTracks(party) {
      this.party = party || [];
      this.tracks = [];

      // 1. 映像トラック群 (V1〜V4): 各キャラのスキルクリップ配置トラック
      this.party.forEach((p, idx) => {
        this.tracks.push({
          id: `track_skill_${p.id}`,
          code: `V${idx + 1}`,
          name: `${p.name} (スキル)`,
          icon: p.icon,
          kind: 'skill',
          charId: p.id
        });
      });

      // 2. 音声トラック群 (A1〜A5): 敵デバフ＆各キャラのバフ・持続効果トラック
      this.tracks.push({
        id: 'track_enemy_debuffs',
        code: 'A1',
        name: '🎯 案山子 (付着/異常/脆弱)',
        icon: '',
        kind: 'enemy',
        charId: null
      });

      this.party.forEach((p, idx) => {
        this.tracks.push({
          id: `track_char_${p.id}`,
          code: `A${idx + 2}`,
          name: `${p.name} (バフ/装備)`,
          icon: p.icon,
          kind: 'buff',
          charId: p.id
        });
      });
    }

    getNextAvailableClipTime() {
      if (this.skillClips.length === 0) return 0.5;
      let maxEnd = 0;
      this.skillClips.forEach(c => {
        const end = c.startTime + (c.duration || 2.0);
        if (end > maxEnd) maxEnd = end;
      });
      return Math.round((maxEnd + 0.5) * 2) / 2;
    }

    /**
     * スキルクリップを配置し、連動するバフ・デバフ・付着ブロックをデフォルト持続時間で自動仮配置する
     */
    addSkillClip(member, skill, startTime, options = {}) {
      if (!member || !skill) return null;
      const clipId = this._nextId('clip');
      const skType = skill.type || 'skill';
      const defaultClipDur = (skType === 'ult' || skType === 'ult2') ? 2.5 : (skType === 'combo' ? 1.5 : 2.0);
      const tStart = Math.max(0, Math.round(startTime * 2) / 2);

      const clipColors = {
        skill: 'linear-gradient(135deg, #2980b9, #1f618d)',
        skill2: 'linear-gradient(135deg, #2471a3, #1a5276)',
        skill3: 'linear-gradient(135deg, #1abc9c, #148f77)',
        combo: 'linear-gradient(135deg, #d35400, #a04000)',
        ult: 'linear-gradient(135deg, #c0392b, #922b21)',
        ult2: 'linear-gradient(135deg, #8e44ad, #6c3483)'
      };

      const clip = {
        id: clipId,
        trackId: `track_skill_${member.id}`,
        charId: member.id,
        charName: member.name,
        charIcon: member.icon,
        skillId: skill.id,
        skillType: skType,
        name: skill.name || skill.shortName || 'スキル',
        shortName: skill.shortName || skill.name || 'スキル',
        startTime: tStart,
        duration: defaultClipDur,
        color: clipColors[skType] || clipColors.skill
      };
      this.skillClips.push(clip);

      // 連動するバフ・付着ブロックを対応する時間にデフォルト持続時間で自動仮配置
      this.spawnLinkedBuffsForSkill(clip, member, skill);

      if (!options.silent) {
        this.userModified = true;
        this.maxSec = Math.max(this.maxSec, Math.ceil(tStart + 18));
        this.render();
        this.notifyChanged();
      }
      return clip;
    }

    spawnLinkedBuffsForSkill(clip, p, skill) {
      const sName = skill.name || skill.shortName || 'スキル';
      const skType = skill.type || 'skill';
      const tStart = clip.startTime;

      const buffColors = {
        heat: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        cryo: 'linear-gradient(135deg, #3498db, #2980b9)',
        electric: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
        nature: 'linear-gradient(135deg, #2ecc71, #27ae60)',
        physical: 'linear-gradient(135deg, #e67e22, #d35400)',
        generic: 'linear-gradient(135deg, #f39c12, #d68910)'
      };

      // (A) スキル固有の自己バフ / チームバフ
      if (skill.buffs && skill.buffs.length > 0) {
        skill.buffs.forEach(b => {
          const dur = b.duration || 10;
          const valNum = parseFloat(b.value) || 15;
          this.blocks.push({
            id: this._nextId('blk'),
            linkedClipId: clip.id,
            trackId: `track_char_${p.id}`,
            charId: p.id,
            name: `${b.name || sName} (+${valNum}%)`,
            startTime: tStart,
            duration: dur,
            color: buffColors.generic,
            bonusType: 'damageUp',
            bonusValue: valNum / 100,
            valueText: `${b.stat || '与ダメ'} +${valNum}%`,
            source: `${p.name} [${sName}]`
          });
        });
      }

      // (B) 必殺技発動時の強化バフ (デフォルト15秒)
      if (skType === 'ult' || skType === 'ult2') {
        const elemColorKey = p.element === '灼熱' ? 'heat' : (p.element === '寒冷' ? 'cryo' : (p.element === '電磁' ? 'electric' : (p.element === '自然' ? 'nature' : 'physical')));
        this.blocks.push({
          id: this._nextId('blk'),
          linkedClipId: clip.id,
          trackId: `track_char_${p.id}`,
          charId: p.id,
          name: `必殺強化 [${sName}]`,
          startTime: tStart,
          duration: 15,
          color: buffColors[elemColorKey],
          bonusType: 'damageUp',
          bonusValue: 0.20,
          valueText: '与ダメージ+20%',
          source: `${p.name} 必殺技`
        });
      }

      // (C) 防具セット効果トリガーの自動仮配置
      const armorSet = p.equipment ? p.equipment.armorSet : 'none';
      if (armorSet === 'set_volcano' || (armorSet && armorSet.includes('volcano'))) {
        this.blocks.push({
          id: this._nextId('blk'),
          linkedClipId: clip.id,
          trackId: `track_char_${p.id}`,
          charId: p.id,
          name: '火山セット [灼熱/自然+50%]',
          startTime: tStart,
          duration: 10,
          color: 'linear-gradient(135deg, #d35400, #e74c3c)',
          bonusType: 'damageUp',
          bonusValue: 0.50,
          valueText: '灼熱/自然ダメ+50%',
          source: '火山用セット効果'
        });
      } else if (armorSet === 'set_kyuho' || armorSet === 'set_old_front' || (armorSet && armorSet.includes('kyuho'))) {
        if (skType === 'combo' || skType === 'ult' || skType === 'ult2') {
          this.blocks.push({
            id: this._nextId('blk'),
            linkedClipId: clip.id,
            trackId: `track_char_${p.id}`,
            charId: p.id,
            name: '旧鋒セット [物理ダメ+24%]',
            startTime: tStart,
            duration: 20,
            color: 'linear-gradient(135deg, #7f8c8d, #34495e)',
            bonusType: 'damageUp',
            bonusValue: 0.24,
            valueText: '物理ダメージ+24%',
            source: '旧鋒セット効果'
          });
        }
      } else if (armorSet === 'set_pioneer' && (p.baseRecoverSP > 0 || p.baseRefundSP > 0)) {
        this.blocks.push({
          id: this._nextId('blk'),
          linkedClipId: clip.id,
          trackId: `track_char_${p.id}`,
          charId: null, // チーム全体バフ
          name: 'パイオニア [全体与ダメ+16%]',
          startTime: tStart,
          duration: 15,
          color: 'linear-gradient(135deg, #16a085, #1abc9c)',
          bonusType: 'teamDamageUp',
          bonusValue: 0.16,
          valueText: 'チーム与ダメ+16%',
          source: 'パイオニアセット効果'
        });
      }

      // (D) 敵へのアーツ付着 / クラッシュ・デバフブロック自動仮配置
      const infType = skill.infliction ? skill.infliction.type : 'none';
      const crushType = skill.crush ? skill.crush.type : 'none';

      if (crushType && crushType !== 'none') {
        const isChen = (p.id === 'char_chen' || (p.name && p.name.includes('チェン')));
        const crushName = isChen
          ? `浮遊(クラッシュ付与+1段) [${p.name}]`
          : (crushType === 'inflict' ? `クラッシュ付与(+1段) [${p.name}]` : `クラッシュ消費(${crushType === 'consume_shatter' ? '破砕' : '猛撃'}) [${p.name}]`);
        this.blocks.push({
          id: this._nextId('blk'),
          linkedClipId: clip.id,
          trackId: 'track_enemy_debuffs',
          charId: null,
          name: crushName,
          startTime: tStart,
          duration: 12,
          color: 'linear-gradient(135deg, #e67e22, #d35400)',
          bonusType: 'vuln',
          bonusValue: 10,
          valueText: '物理体勢崩し/脆弱+10%',
          source: `${p.name} [${sName}]`
        });
      } else if (infType && infType !== 'none') {
        const elemColorKey = p.element === '灼熱' ? 'heat' : (p.element === '寒冷' ? 'cryo' : (p.element === '電磁' ? 'electric' : 'nature'));
        const elemLabel = p.element === '物理' ? '寒冷' : (p.element || 'アーツ');
        this.blocks.push({
          id: this._nextId('blk'),
          linkedClipId: clip.id,
          trackId: 'track_enemy_debuffs',
          charId: null,
          name: `${elemLabel}付着(+1段) [${p.name}]`,
          startTime: tStart,
          duration: 10,
          color: buffColors[elemColorKey] || buffColors.cryo,
          bonusType: 'vuln',
          bonusValue: 10,
          valueText: `${elemLabel}付着(1段階)`,
          source: `${p.name} [${sName}]`
        });
      }
    }

    addManualBuffBlock(presetKey) {
      const presets = {
        dmg20: { name: '手動バフ: 与ダメ+20%', duration: 10, bonusType: 'teamDamageUp', bonusValue: 0.20, valueText: '与ダメージ+20%', color: 'linear-gradient(135deg, #f39c12, #d68910)', isEnemy: false },
        dmg30: { name: '手動バフ: 与ダメ+30%', duration: 15, bonusType: 'teamDamageUp', bonusValue: 0.30, valueText: '与ダメージ+30%', color: 'linear-gradient(135deg, #e67e22, #d35400)', isEnemy: false },
        volcano: { name: '火山/パルス効果 (+50%)', duration: 10, bonusType: 'teamDamageUp', bonusValue: 0.50, valueText: '属性ダメージ+50%', color: 'linear-gradient(135deg, #e74c3c, #c0392b)', isEnemy: false },
        kyuho: { name: '旧鋒セット (+24%)', duration: 20, bonusType: 'teamDamageUp', bonusValue: 0.24, valueText: '物理ダメージ+24%', color: 'linear-gradient(135deg, #7f8c8d, #34495e)', isEnemy: false },
        vuln15: { name: '脆弱デバフ (被ダメ+15%)', duration: 12, bonusType: 'vuln', bonusValue: 15, valueText: '敵被ダメージ+15%', color: 'linear-gradient(135deg, #9b59b6, #8e44ad)', isEnemy: true },
        vuln20: { name: '感電/腐食異常 (+20%)', duration: 10, bonusType: 'vuln', bonusValue: 20, valueText: '敵被ダメージ+20%', color: 'linear-gradient(135deg, #2ecc71, #27ae60)', isEnemy: true }
      };
      const pr = presets[presetKey] || presets.dmg20;
      const targetTrackId = pr.isEnemy
        ? 'track_enemy_debuffs'
        : (this.party[0] ? `track_char_${this.party[0].id}` : 'track_enemy_debuffs');

      this.blocks.push({
        id: this._nextId('blk'),
        linkedClipId: null,
        trackId: targetTrackId,
        charId: null,
        name: pr.name,
        startTime: 0.5,
        duration: pr.duration,
        color: pr.color,
        bonusType: pr.bonusType,
        bonusValue: pr.bonusValue,
        valueText: pr.valueText,
        source: '手動追加ブロック'
      });

      this.userModified = true;
      this.render();
      this.notifyChanged();
    }

    removeSkillClip(clipId) {
      this.skillClips = this.skillClips.filter(c => c.id !== clipId);
      this.blocks = this.blocks.filter(b => b.linkedClipId !== clipId);
      this.userModified = true;
      this.render();
      this.notifyChanged();
    }

    removeBuffBlock(blockId) {
      this.blocks = this.blocks.filter(b => b.id !== blockId);
      this.userModified = true;
      this.render();
      this.notifyChanged();
    }

    /**
     * 「スキル回し」のシーケンスからタイムラインを自動生成
     */
    syncFromSequence(timelineCycles, party, cycleNames, forceReset = false) {
      this.buildTracks(party);

      // ユーザーがタイムライン上で手動調整済みの場合は、強制リセットでない限りキャラ編成変更時のみ再構築
      const flatSteps = [];
      (timelineCycles || []).forEach((cycle, cIdx) => {
        cycle.forEach(step => {
          if (step.type !== 'separator' && step.type !== 'refund' && step.type !== 'recover') {
            flatSteps.push({ step, cIdx });
          }
        });
      });

      if (this.userModified && !forceReset && this.skillClips.length === flatSteps.length) {
        this.render();
        return;
      }

      this.userModified = false;
      this.skillClips = [];
      this.blocks = [];

      let currentTime = 0.5;
      flatSteps.forEach(({ step }) => {
        const p = (party || []).find(m => m.id === step.charId || m.name === step.charName);
        if (!p) return;
        const skill = (p.skills || []).find(s => s.id === step.skillId || s.type === step.type) || step.skillData;
        if (!skill) return;

        this.addSkillClip(p, skill, currentTime, { silent: true });
        currentTime += 2.5;
      });

      this.maxSec = Math.max(35, Math.ceil(currentTime + 12));
      this.render();
    }

    /**
     * タイムライン上のスキルクリップ順序と、各クリップ発動時刻に重なっているバフ・デバフブロックから
     * ダメージ計算用のサイクルデータを生成して返す
     */
    getEffectiveTimelineForDamage(fallbackCycles, party) {
      if (!this.skillClips || this.skillClips.length === 0) {
        return fallbackCycles;
      }

      // 開始時刻順にソート
      const sortedClips = this.skillClips.slice().sort((a, b) => a.startTime - b.startTime);

      const enrichedCycle = sortedClips.map(clip => {
        const t = clip.startTime + 0.05; // 発動直後の判定時刻
        let extraDmgUp = 0;
        let extraVuln = 0;
        const activeNotes = [];

        this.blocks.forEach(blk => {
          // 自身のスキル発動と同時に自動生成された「同クリップ由来」の基礎付着/必殺バフ以外の重なり、
          // またはユーザーがドラッグ・伸縮で重ねたバフ・デバフを集計
          if (t >= blk.startTime && t <= (blk.startTime + blk.duration)) {
            const appliesToChar = (!blk.charId || blk.charId === clip.charId || blk.bonusType === 'teamDamageUp' || blk.bonusType === 'vuln');
            if (!appliesToChar) return;

            if (blk.bonusType === 'damageUp' || blk.bonusType === 'teamDamageUp') {
              extraDmgUp += (blk.bonusValue || 0);
              activeNotes.push(`🔊${blk.name}(${blk.startTime.toFixed(1)}-${(blk.startTime + blk.duration).toFixed(1)}s)`);
            } else if (blk.bonusType === 'vuln') {
              extraVuln += (blk.bonusValue || 0);
              activeNotes.push(`🎯${blk.name}`);
            }
          }
        });

        return {
          type: clip.skillType,
          charId: clip.charId,
          charName: clip.charName,
          skillId: clip.skillId,
          startTime: clip.startTime,
          timelineExtraDamageUp: extraDmgUp,
          timelineExtraVuln: extraVuln,
          timelineBuffNote: activeNotes.slice(0, 2).join(', ')
        };
      });

      return [enrichedCycle];
    }

    notifyChanged() {
      if (typeof global.onTimeTrackEdited === 'function') {
        global.onTimeTrackEdited();
      }
    }

    renderClipPaletteBar() {
      const bar = this.container.querySelector('#time-clip-palette-bar');
      if (!bar) return;

      if (!this.party || this.party.length === 0) {
        bar.innerHTML = `<span style="color:#888; font-size:12px;">パーティーを編成すると、ここからスキルクリップをポンポンとタイムラインに配置できます。</span>`;
        return;
      }

      bar.innerHTML = `
        <div class="clip-palette-label">🎬 クリップ配置 (クリックで末尾追加 / トラックへD&D):</div>
        <div class="clip-palette-groups">
          ${this.party.map(p => {
            const attackSkills = (p.skills || []).filter(s => s.type !== 'ult_cancel');
            return `
              <div class="clip-palette-char-group">
                <img src="${p.icon}" class="clip-palette-avatar" alt="${p.name}" title="${p.name}">
                ${attackSkills.map(s => `
                  <button type="button"
                    class="clip-palette-btn type-${s.type}"
                    draggable="true"
                    data-char-id="${p.id}"
                    data-skill-id="${s.id}"
                    title="${p.name}: ${s.name} をタイムラインに配置（ドラッグで任意の秒数へドロップ可能）">
                    <span class="clip-btn-type">${s.shortName || s.type}</span>
                    <span class="clip-btn-name">${s.name}</span>
                  </button>
                `).join('')}
              </div>
            `;
          }).join('')}
        </div>
      `;

      // クリック配置＆ドラッグ開始イベント
      bar.querySelectorAll('.clip-palette-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const charId = btn.dataset.charId;
          const skillId = btn.dataset.skillId;
          const member = this.party.find(m => m.id === charId);
          const skill = member ? (member.skills || []).find(s => s.id === skillId) : null;
          if (member && skill) {
            const nextT = this.getNextAvailableClipTime();
            this.addSkillClip(member, skill, nextT);
            if (typeof global.appendSkillFromTimeTrack === 'function') {
              global.appendSkillFromTimeTrack(member, skill);
            }
          }
        });

        btn.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', JSON.stringify({
            source: 'clip-palette',
            charId: btn.dataset.charId,
            skillId: btn.dataset.skillId
          }));
        });
      });
    }

    render() {
      if (!this.container) return;
      this.renderClipPaletteBar();

      const headerListEl = this.container.querySelector('#track-header-list');
      const rulerEl = this.container.querySelector('#time-ruler');
      const lanesEl = this.container.querySelector('#track-lanes');
      if (!headerListEl || !rulerEl || !lanesEl) return;

      const totalWidthPx = this.maxSec * this.pxPerSec;

      // 1. ルーラーの描画（目盛り）
      rulerEl.style.width = `${totalWidthPx}px`;
      rulerEl.innerHTML = '';
      for (let sec = 0; sec <= this.maxSec; sec++) {
        const mark = document.createElement('div');
        mark.className = 'ruler-mark' + (sec % 5 === 0 ? ' major' : '');
        mark.style.left = `${sec * this.pxPerSec}px`;
        if (sec % 5 === 0) {
          mark.innerHTML = `<span class="ruler-sec-label">${sec}s</span>`;
        }
        rulerEl.appendChild(mark);
      }

      // 2. トラックヘッダーの描画
      headerListEl.innerHTML = '';
      this.tracks.forEach(tr => {
        const h = document.createElement('div');
        h.className = `track-header-item kind-${tr.kind}`;
        h.innerHTML = `
          <span class="track-code-badge ${tr.kind}">${tr.code || ''}</span>
          ${tr.icon ? `<img src="${tr.icon}" class="track-icon-img" onerror="this.onerror=null;this.style.display='none';">` : ''}
          <span class="track-header-name" title="${tr.name}">${tr.name}</span>
        `;
        headerListEl.appendChild(h);
      });

      // 3. トラックレーンとクリップ/ブロックの描画
      lanesEl.style.width = `${totalWidthPx}px`;
      lanesEl.innerHTML = '';

      this.tracks.forEach(tr => {
        const lane = document.createElement('div');
        lane.className = `track-lane kind-${tr.kind}`;
        lane.dataset.trackId = tr.id;
        lane.dataset.trackKind = tr.kind;
        if (tr.charId) lane.dataset.charId = tr.charId;

        const gridBg = document.createElement('div');
        gridBg.className = 'lane-grid-bg';
        gridBg.style.backgroundSize = `${this.pxPerSec}px 100%`;
        lane.appendChild(gridBg);

        // スキルトラックへのD&Dドロップ受け入れ
        lane.addEventListener('dragover', (e) => {
          e.preventDefault();
          lane.classList.add('drag-over');
        });
        lane.addEventListener('dragleave', () => {
          lane.classList.remove('drag-over');
        });
        lane.addEventListener('drop', (e) => {
          e.preventDefault();
          lane.classList.remove('drag-over');
          try {
            const payload = JSON.parse(e.dataTransfer.getData('text/plain'));
            if (payload && payload.source === 'clip-palette') {
              const rect = lane.getBoundingClientRect();
              const dropX = Math.max(0, e.clientX - rect.left);
              const dropSec = Math.round((dropX / this.pxPerSec) / this.snapGrid) * this.snapGrid;
              const member = this.party.find(m => m.id === payload.charId);
              const skill = member ? (member.skills || []).find(s => s.id === payload.skillId) : null;
              if (member && skill) {
                this.addSkillClip(member, skill, dropSec);
                if (typeof global.appendSkillFromTimeTrack === 'function') {
                  global.appendSkillFromTimeTrack(member, skill);
                }
              }
            }
          } catch (err) {
            // ignore non-json drag
          }
        });

        if (tr.kind === 'skill') {
          // 映像クリップ風のスキルブロックを描画
          const clips = this.skillClips.filter(c => c.trackId === tr.id);
          clips.forEach(clip => {
            const cEl = document.createElement('div');
            cEl.className = `time-skill-clip type-${clip.skillType}`;
            cEl.dataset.clipId = clip.id;
            cEl.style.left = `${clip.startTime * this.pxPerSec}px`;
            cEl.style.width = `${Math.max(46, clip.duration * this.pxPerSec)}px`;
            cEl.style.background = clip.color;

            cEl.innerHTML = `
              <div class="block-drag-handle left" data-handle="left"></div>
              <div class="clip-body-content">
                <span class="clip-time-tag">${clip.startTime.toFixed(1)}s</span>
                <span class="clip-title">${clip.name}</span>
              </div>
              <button type="button" class="clip-delete-btn" title="このスキルクリップを削除">×</button>
              <div class="block-drag-handle right" data-handle="right"></div>
            `;

            cEl.title = `🎬 スキルクリップ: ${clip.charName} [${clip.name}]\n発動時刻: ${clip.startTime.toFixed(1)}s (長さ ${clip.duration.toFixed(1)}s)\n※左右ドラッグで発動タイミングを移動できます`;

            const delBtn = cEl.querySelector('.clip-delete-btn');
            if (delBtn) {
              delBtn.addEventListener('mousedown', (ev) => ev.stopPropagation());
              delBtn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                this.removeSkillClip(clip.id);
              });
            }

            lane.appendChild(cEl);
          });
        } else {
          // 音声トラック風のバフ・デバフ・状態異常ブロックを描画
          const trackBlocks = this.blocks.filter(b => b.trackId === tr.id);
          trackBlocks.forEach(blk => {
            const bEl = document.createElement('div');
            bEl.className = 'time-buff-block';
            bEl.dataset.blockId = blk.id;
            bEl.style.left = `${blk.startTime * this.pxPerSec}px`;
            bEl.style.width = `${Math.max(24, blk.duration * this.pxPerSec)}px`;
            bEl.style.background = blk.color || 'linear-gradient(135deg, #f39c12, #e67e22)';

            bEl.innerHTML = `
              <div class="block-drag-handle left" data-handle="left"></div>
              <div class="block-content">
                <span class="block-title">🔊 ${blk.name}</span>
                <span class="block-sub">${blk.duration.toFixed(1)}s</span>
              </div>
              <button type="button" class="clip-delete-btn" title="このバフブロックを削除">×</button>
              <div class="block-drag-handle right" data-handle="right"></div>
            `;

            bEl.title = `🔊 【${blk.name}】\n持続時間: ${blk.duration.toFixed(1)}秒 (${blk.startTime.toFixed(1)}s 〜 ${(blk.startTime + blk.duration).toFixed(1)}s)\n効果: ${blk.valueText || ''}\n発生源: ${blk.source || ''}\n※本体ドラッグで移動、左右端ドラッグで持続時間を伸縮できます`;

            const delBtn = bEl.querySelector('.clip-delete-btn');
            if (delBtn) {
              delBtn.addEventListener('mousedown', (ev) => ev.stopPropagation());
              delBtn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                this.removeBuffBlock(blk.id);
              });
            }

            lane.appendChild(bEl);
          });
        }

        lanesEl.appendChild(lane);
      });
    }

    initDragHandlers() {
      const editor = this.container.querySelector('.track-scroll-area');
      if (!editor) return;

      const onMouseDown = (e) => {
        if (e.target.classList.contains('clip-delete-btn')) return;

        const clipEl = e.target.closest('.time-skill-clip');
        const blockEl = e.target.closest('.time-buff-block');
        const targetEl = clipEl || blockEl;
        if (!targetEl) return;

        const isClip = !!clipEl;
        const itemId = isClip ? clipEl.dataset.clipId : blockEl.dataset.blockId;
        const itemData = isClip
          ? this.skillClips.find(c => c.id === itemId)
          : this.blocks.find(b => b.id === itemId);
        if (!itemData) return;

        const isHandleLeft = e.target.classList.contains('left');
        const isHandleRight = e.target.classList.contains('right');

        this.activeDrag = {
          isClip: isClip,
          itemId: itemId,
          itemData: itemData,
          targetEl: targetEl,
          startX: e.clientX,
          origStartSec: itemData.startTime,
          origDuration: itemData.duration,
          mode: isHandleLeft ? 'resize-left' : (isHandleRight ? 'resize-right' : 'move')
        };

        targetEl.classList.add('is-dragging');
        document.body.style.cursor = isHandleLeft || isHandleRight ? 'ew-resize' : 'grabbing';
        document.body.style.userSelect = 'none';

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        e.preventDefault();
      };

      const onMouseMove = (e) => {
        if (!this.activeDrag) return;
        const d = this.activeDrag;
        const deltaPx = e.clientX - d.startX;
        const deltaSec = deltaPx / this.pxPerSec;

        if (d.mode === 'move') {
          let newStart = Math.max(0, d.origStartSec + deltaSec);
          if (this.snapGrid > 0) {
            newStart = Math.round(newStart / this.snapGrid) * this.snapGrid;
          }
          const shift = newStart - d.itemData.startTime;
          d.itemData.startTime = newStart;
          d.targetEl.style.left = `${newStart * this.pxPerSec}px`;

          if (d.isClip) {
            const tTag = d.targetEl.querySelector('.clip-time-tag');
            if (tTag) tTag.textContent = `${newStart.toFixed(1)}s`;
            // スキルクリップを移動した際、連動仮配置されたバフブロックも一緒に追従させる
            if (shift !== 0) {
              this.blocks.forEach(b => {
                if (b.linkedClipId === d.itemId) {
                  b.startTime = Math.max(0, b.startTime + shift);
                  const domB = this.container.querySelector(`.time-buff-block[data-block-id="${b.id}"]`);
                  if (domB) domB.style.left = `${b.startTime * this.pxPerSec}px`;
                }
              });
            }
          }
        } else if (d.mode === 'resize-right') {
          let newDur = Math.max(0.5, d.origDuration + deltaSec);
          if (this.snapGrid > 0) {
            newDur = Math.round(newDur / this.snapGrid) * this.snapGrid;
          }
          d.itemData.duration = newDur;
          d.targetEl.style.width = `${newDur * this.pxPerSec}px`;
          const sub = d.targetEl.querySelector('.block-sub');
          if (sub) sub.textContent = `${newDur.toFixed(1)}s`;
        } else if (d.mode === 'resize-left') {
          let newStart = Math.max(0, d.origStartSec + deltaSec);
          let newDur = Math.max(0.5, d.origDuration - deltaSec);
          if (this.snapGrid > 0) {
            newStart = Math.round(newStart / this.snapGrid) * this.snapGrid;
            newDur = Math.round(newDur / this.snapGrid) * this.snapGrid;
          }
          d.itemData.startTime = newStart;
          d.itemData.duration = newDur;
          d.targetEl.style.left = `${newStart * this.pxPerSec}px`;
          d.targetEl.style.width = `${newDur * this.pxPerSec}px`;
          const sub = d.targetEl.querySelector('.block-sub');
          if (sub) sub.textContent = `${newDur.toFixed(1)}s`;
        }
      };

      const onMouseUp = () => {
        if (!this.activeDrag) return;
        this.activeDrag.targetEl.classList.remove('is-dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        this.activeDrag = null;
        this.userModified = true;

        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);

        this.notifyChanged();
      };

      editor.addEventListener('mousedown', onMouseDown);
    }
  }

  global.TimeTrackTimeline = TimeTrackTimeline;
})(typeof window !== 'undefined' ? window : global);
