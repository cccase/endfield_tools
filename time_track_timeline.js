/**
 * Time Track Timeline for Arknights: Endfield
 * Implements a video-editor style timeline for buffs and debuffs.
 * (Phase 4 Implementation)
 */
(function(global) {
  'use strict';

  class TimeTrackTimeline {
    constructor(containerId, options = {}) {
      this.container = document.getElementById(containerId);
      this.pxPerSec = options.pxPerSec || 28; // 1秒あたりのピクセル幅
      this.minSec = 0;
      this.maxSec = options.maxSec || 30; // タイムライン全体の表示秒数
      this.snapGrid = 0.5; // スナップ単位（秒）

      this.tracks = []; // { id, name, icon, type, charId }
      this.blocks = []; // { id, trackId, name, startTime, duration, color, valueText, source }
      this.activeDrag = null;

      this.initDom();
    }

    initDom() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="time-track-toolbar">
          <div class="time-track-title-wrap">
            <h3 class="time-track-heading">⏱️ タイムライン</h3>
          </div>
          <div class="time-track-controls">
            <span class="zoom-label">ズーム:</span>
            <button type="button" class="btn-time-zoom" id="btn-zoom-out" title="縮小">−</button>
            <span class="zoom-value" id="label-zoom-val">${this.pxPerSec}px/s</span>
            <button type="button" class="btn-time-zoom" id="btn-zoom-in" title="拡大">+</button>
            <button type="button" class="btn-time-reset" id="btn-time-auto-sync" title="シーケンス順序からバフを自動配置">🔄 スキル連動再配置</button>
          </div>
        </div>
        <div class="time-track-editor">
          <!-- 左側トラック名一覧ヘッダー -->
          <div class="track-headers-column" id="track-headers-column">
            <div class="track-ruler-header">トラック</div>
            <div class="track-header-list" id="track-header-list"></div>
          </div>
          <!-- 右側タイムラインスクロール領域 -->
          <div class="track-scroll-area" id="track-scroll-area">
            <!-- 時間目盛りルーラー -->
            <div class="time-ruler" id="time-ruler"></div>
            <!-- 各トラックレーンとブロック -->
            <div class="track-lanes" id="track-lanes"></div>
          </div>
        </div>
      `;

      // イベント設定
      const btnIn = this.container.querySelector('#btn-zoom-in');
      const btnOut = this.container.querySelector('#btn-zoom-out');
      const btnSync = this.container.querySelector('#btn-time-auto-sync');

      if (btnIn) {
        btnIn.addEventListener('click', () => {
          this.setZoom(Math.min(60, this.pxPerSec + 6));
        });
      }
      if (btnOut) {
        btnOut.addEventListener('click', () => {
          this.setZoom(Math.max(16, this.pxPerSec - 6));
        });
      }
      if (btnSync) {
        btnSync.addEventListener('click', () => {
          if (typeof global.autoSyncTimeTracks === 'function') {
            global.autoSyncTimeTracks();
          }
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

    /**
     * シーケンスタイムラインから自動生成
     */
    syncFromSequence(timelineCycles, party, cycleNames) {
      this.tracks = [];
      this.blocks = [];

      // 1. ターゲット（敵）トラック
      this.tracks.push({
        id: 'track_enemy_debuffs',
        name: '🎯 案山子 (デバフ/異常)',
        icon: '🎯',
        type: 'enemy'
      });

      // 2. 各編成キャラのバフトラック
      (party || []).forEach(p => {
        this.tracks.push({
          id: `track_char_${p.id}`,
          name: p.name,
          icon: p.icon,
          type: 'char',
          charId: p.id
        });
      });

      // スキルの時間割り当て（1スキル発動あたり 2.5秒間隔と仮定）
      let currentTime = 0.5; // 0.5秒から開始
      let blockCount = 0;

      const buffColors = {
        heat: 'linear-gradient(135deg, #e74c3c, #c0392b)',
        cryo: 'linear-gradient(135deg, #3498db, #2980b9)',
        electric: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
        nature: 'linear-gradient(135deg, #2ecc71, #27ae60)',
        physical: 'linear-gradient(135deg, #e67e22, #d35400)',
        generic: 'linear-gradient(135deg, #f39c12, #f1c40f)'
      };

      (timelineCycles || []).forEach((cycle, cIdx) => {
        cycle.forEach(step => {
          if (step.type === 'separator' || step.type === 'refund' || step.type === 'recover') {
            return;
          }

          const p = (party || []).find(m => m.id === step.charId || m.name === step.charName);
          if (!p) return;

          const skill = (p.skills || []).find(s => s.id === step.skillId || s.type === step.type) || step.skillData;
          const sName = skill ? (skill.name || skill.shortName) : 'スキル';
          const skType = skill ? skill.type : step.type;

          // (A) キャラのスキル自身による自己バフ / チームバフ
          if (skill && skill.buffs && skill.buffs.length > 0) {
            skill.buffs.forEach((b, bIdx) => {
              const dur = b.duration || 10;
              this.blocks.push({
                id: `blk_${++blockCount}`,
                trackId: `track_char_${p.id}`,
                name: `${b.name || sName} (${b.stat || ''}+${b.value}%)`,
                startTime: currentTime,
                duration: dur,
                color: buffColors.generic,
                valueText: `${b.stat || 'バフ'} +${b.value}%`,
                source: `${p.name} [${sName}]`
              });
            });
          }

          // (B) 必殺技発動時の典型的な高威力バフ（エンドフィールド標準：必殺発動時バフ15秒）
          if (skType === 'ult' || skType === 'ult2') {
            this.blocks.push({
              id: `blk_${++blockCount}`,
              trackId: `track_char_${p.id}`,
              name: `必殺強化 [${sName}]`,
              startTime: currentTime,
              duration: 15,
              color: buffColors[p.element === '灼熱' ? 'heat' : (p.element === '寒冷' ? 'cryo' : (p.element === '電磁' ? 'electric' : (p.element === '自然' ? 'nature' : 'physical')))],
              valueText: '与ダメージ+20%',
              source: `${p.name} 必殺技`
            });
          }

          // (C) 装備セット効果のトリガー
          const armorSet = p.equipment ? p.equipment.armorSet : 'none';
          if (armorSet === 'set_volcano' || (armorSet && armorSet.includes('volcano'))) {
            // 火山セット: 元素反応・燃焼で10秒間灼熱/自然+50%
            this.blocks.push({
              id: `blk_${++blockCount}`,
              trackId: `track_char_${p.id}`,
              name: '火山セット [灼熱/自然+50%]',
              startTime: currentTime,
              duration: 10,
              color: 'linear-gradient(135deg, #d35400, #e74c3c)',
              valueText: '灼熱/自然+50%',
              source: '火山用防具セット効果'
            });
          } else if (armorSet === 'set_old_front' || (armorSet && armorSet.includes('old'))) {
            // 旧鋒セット: 破砕・猛撃で20秒間物理ダメージUP
            if (skType === 'combo' || skType === 'ult' || skType === 'ult2') {
              this.blocks.push({
                id: `blk_${++blockCount}`,
                trackId: `track_char_${p.id}`,
                name: '旧鋒セット [物理ダメージ+24%]',
                startTime: currentTime,
                duration: 20,
                color: 'linear-gradient(135deg, #7f8c8d, #34495e)',
                valueText: '物理ダメージ+24%',
                source: '旧鋒防具セット効果'
              });
            }
          }

          // (D) 敵へのデバフ（アーツ付着・クラッシュ・元素反応）
          if (p.element === '物理') {
            this.blocks.push({
              id: `blk_${++blockCount}`,
              trackId: 'track_enemy_debuffs',
              name: `物理脆弱 [${p.name}]`,
              startTime: currentTime,
              duration: 12,
              color: 'linear-gradient(135deg, #e67e22, #f39c12)',
              valueText: '物理被ダメ+15%',
              source: `${p.name} 攻撃`
            });
          } else {
            // アーツ異常 / 付着
            const elemNames = { '灼熱': '燃焼DoT', '寒冷': '凍結/減速', '電磁': '感電(被アーツ+20%)', '自然': '腐食(耐性-20%)' };
            const anomalyName = elemNames[p.element] || `${p.element}異常`;
            this.blocks.push({
              id: `blk_${++blockCount}`,
              trackId: 'track_enemy_debuffs',
              name: anomalyName,
              startTime: currentTime,
              duration: 10,
              color: buffColors[p.element === '灼熱' ? 'heat' : (p.element === '寒冷' ? 'cryo' : (p.element === '電磁' ? 'electric' : 'nature'))],
              valueText: `${p.element}デバフ`,
              source: `${p.name} [${sName}]`
            });
          }

          currentTime += 2.5; // 次のスキルへ
        });
      });

      this.maxSec = Math.max(30, Math.ceil(currentTime + 5));
      this.render();
    }

    render() {
      if (!this.container) return;

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
        h.className = `track-header-item ${tr.type}`;
        h.innerHTML = `
          ${tr.icon ? `<img src="${tr.icon}" class="track-icon-img" onerror="this.onerror=null;this.replaceWith('${tr.type === 'enemy' ? '🎯' : '👤'}');">` : ''}
          <span class="track-header-name" title="${tr.name}">${tr.name}</span>
        `;
        headerListEl.appendChild(h);
      });

      // 3. トラックレーンとブロックの描画
      lanesEl.style.width = `${totalWidthPx}px`;
      lanesEl.innerHTML = '';

      this.tracks.forEach(tr => {
        const lane = document.createElement('div');
        lane.className = `track-lane ${tr.type}`;
        lane.dataset.trackId = tr.id;

        // 背景の秒グリッド線
        const gridBg = document.createElement('div');
        gridBg.className = 'lane-grid-bg';
        gridBg.style.backgroundSize = `${this.pxPerSec}px 100%`;
        lane.appendChild(gridBg);

        // このトラックに属するブロック
        const trackBlocks = this.blocks.filter(b => b.trackId === tr.id);
        trackBlocks.forEach(blk => {
          const bEl = document.createElement('div');
          bEl.className = 'time-buff-block';
          bEl.dataset.blockId = blk.id;
          bEl.style.left = `${blk.startTime * this.pxPerSec}px`;
          bEl.style.width = `${Math.max(14, blk.duration * this.pxPerSec)}px`;
          bEl.style.background = blk.color || 'linear-gradient(135deg, #f39c12, #e67e22)';

          bEl.innerHTML = `
            <div class="block-drag-handle left" data-handle="left"></div>
            <div class="block-content">
              <span class="block-title">${blk.name}</span>
              <span class="block-sub">${blk.duration.toFixed(1)}s</span>
            </div>
            <div class="block-drag-handle right" data-handle="right"></div>
          `;

          bEl.title = `【${blk.name}】\n持続時間: ${blk.duration}秒 (${blk.startTime.toFixed(1)}s 〜 ${(blk.startTime + blk.duration).toFixed(1)}s)\n効果: ${blk.valueText || ''}\n発生源: ${blk.source || ''}\n※ドラッグで開始時刻を変更できます`;

          // ブロッククリックで簡易情報
          bEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('block-drag-handle')) return;
            // 編集ダイアログやハイライト
          });

          lane.appendChild(bEl);
        });

        lanesEl.appendChild(lane);
      });
    }

    initDragHandlers() {
      const editor = this.container.querySelector('.track-scroll-area');
      if (!editor) return;

      const onMouseDown = (e) => {
        const blockEl = e.target.closest('.time-buff-block');
        if (!blockEl) return;

        const blockId = blockEl.dataset.blockId;
        const blockData = this.blocks.find(b => b.id === blockId);
        if (!blockData) return;

        const isHandleLeft = e.target.classList.contains('left');
        const isHandleRight = e.target.classList.contains('right');

        this.activeDrag = {
          blockId: blockId,
          blockData: blockData,
          blockEl: blockEl,
          startX: e.clientX,
          origStartSec: blockData.startTime,
          origDuration: blockData.duration,
          mode: isHandleLeft ? 'resize-left' : (isHandleRight ? 'resize-right' : 'move')
        };

        blockEl.classList.add('is-dragging');
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
          // スナップ
          if (this.snapGrid > 0) {
            newStart = Math.round(newStart / this.snapGrid) * this.snapGrid;
          }
          d.blockData.startTime = newStart;
          d.blockEl.style.left = `${newStart * this.pxPerSec}px`;
        } else if (d.mode === 'resize-right') {
          let newDur = Math.max(0.5, d.origDuration + deltaSec);
          if (this.snapGrid > 0) {
            newDur = Math.round(newDur / this.snapGrid) * this.snapGrid;
          }
          d.blockData.duration = newDur;
          d.blockEl.style.width = `${newDur * this.pxPerSec}px`;
          const sub = d.blockEl.querySelector('.block-sub');
          if (sub) sub.textContent = `${newDur.toFixed(1)}s`;
        } else if (d.mode === 'resize-left') {
          let newStart = Math.max(0, d.origStartSec + deltaSec);
          let newDur = Math.max(0.5, d.origDuration - deltaSec);
          if (this.snapGrid > 0) {
            newStart = Math.round(newStart / this.snapGrid) * this.snapGrid;
            newDur = Math.round(newDur / this.snapGrid) * this.snapGrid;
          }
          d.blockData.startTime = newStart;
          d.blockData.duration = newDur;
          d.blockEl.style.left = `${newStart * this.pxPerSec}px`;
          d.blockEl.style.width = `${newDur * this.pxPerSec}px`;
          const sub = d.blockEl.querySelector('.block-sub');
          if (sub) sub.textContent = `${newDur.toFixed(1)}s`;
        }
      };

      const onMouseUp = () => {
        if (!this.activeDrag) return;
        this.activeDrag.blockEl.classList.remove('is-dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        this.activeDrag = null;

        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);

        // 必要に応じてダメージ再計算や通知
      };

      editor.addEventListener('mousedown', onMouseDown);
    }
  }

  global.TimeTrackTimeline = TimeTrackTimeline;
})(typeof window !== 'undefined' ? window : global);

