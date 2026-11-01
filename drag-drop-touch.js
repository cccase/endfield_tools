/**
 * DragDropTouch polyfill for mobile touch drag & drop support
 */
(function() {
  'use strict';

  class DataTransfer {
    constructor() {
      this._data = {};
      this.dropEffect = 'move';
      this.effectAllowed = 'all';
      this.types = [];
    }
    setData(type, val) {
      type = type.toLowerCase();
      this._data[type] = val;
      if (!this.types.includes(type)) {
        this.types.push(type);
      }
    }
    getData(type) {
      return this._data[type.toLowerCase()] || '';
    }
    clearData(type) {
      if (type) {
        delete this._data[type.toLowerCase()];
        const idx = this.types.indexOf(type.toLowerCase());
        if (idx >= 0) this.types.splice(idx, 1);
      } else {
        this._data = {};
        this.types = [];
      }
    }
    setDragImage(img, x, y) {
      // handled internally
    }
  }

  class DragDropTouchPolyfill {
    constructor() {
      this._dragSource = null;
      this._img = null;
      this._ptDown = null;
      this._isDragging = false;
      this._dataTransfer = null;
      this._lastTarget = null;
      this._holdTimer = null;
      this._holdDelay = 250; // 250ms hold to start drag
      this._dragThreshold = 8; // movement threshold for scroll cancellation

      const opt = { passive: false };
      document.addEventListener('touchstart', this._touchstart.bind(this), opt);
      document.addEventListener('touchmove', this._touchmove.bind(this), opt);
      document.addEventListener('touchend', this._touchend.bind(this), opt);
      document.addEventListener('touchcancel', this._touchend.bind(this), opt);
    }

    _closestDraggable(el) {
      while (el && el !== document.body) {
        if (el.getAttribute && el.getAttribute('draggable') === 'true') {
          return el;
        }
        el = el.parentElement;
      }
      return null;
    }

    _touchstart(e) {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      const target = this._closestDraggable(e.target);
      if (!target) return;

      // 入力要素（input/button等）上でのタッチならドラッグを開始しない
      if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].includes(e.target.tagName)) {
        return;
      }

      this._dragSource = target;
      this._ptDown = { x: touch.clientX, y: touch.clientY };
      this._isDragging = false;

      // 長押しでドラッグモードへ移行
      clearTimeout(this._holdTimer);
      this._holdTimer = setTimeout(() => {
        if (this._dragSource && this._ptDown) {
          this._startDragging(touch);
        }
      }, this._holdDelay);
    }

    _startDragging(touch) {
      this._isDragging = true;
      if (navigator.vibrate) {
        try { navigator.vibrate(40); } catch(err) {}
      }

      this._dataTransfer = new DataTransfer();
      const dragStartEvt = this._createEvent('dragstart', touch, this._dragSource);
      this._dragSource.dispatchEvent(dragStartEvt);

      if (dragStartEvt.defaultPrevented) {
        this._cleanup();
        return;
      }

      // ドラッグプレビュー（ゴースト要素）の生成
      const box = this._dragSource.getBoundingClientRect();
      const clone = this._dragSource.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.left = box.left + 'px';
      clone.style.top = box.top + 'px';
      clone.style.width = box.width + 'px';
      clone.style.height = box.height + 'px';
      clone.style.zIndex = '99999';
      clone.style.opacity = '0.85';
      clone.style.pointerEvents = 'none';
      clone.style.transform = 'scale(1.05)';
      clone.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
      clone.style.transition = 'none';
      document.body.appendChild(clone);
      this._img = clone;
      this._imgOffset = {
        x: touch.clientX - box.left,
        y: touch.clientY - box.top
      };
    }

    _touchmove(e) {
      if (!this._dragSource) return;
      const touch = e.touches[0];

      if (!this._isDragging) {
        // まだ長押し完了前に指が大きく動いた場合は通常の画面スクロールを優先
        const dist = Math.hypot(touch.clientX - this._ptDown.x, touch.clientY - this._ptDown.y);
        if (dist > this._dragThreshold) {
          clearTimeout(this._holdTimer);
          this._dragSource = null;
          this._ptDown = null;
        }
        return;
      }

      // ドラッグ中はブラウザの画面スクロールを停止
      e.preventDefault();

      if (this._img) {
        this._img.style.left = (touch.clientX - this._imgOffset.x) + 'px';
        this._img.style.top = (touch.clientY - this._imgOffset.y) + 'px';
      }

      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      if (target) {
        if (target !== this._lastTarget) {
          if (this._lastTarget) {
            const dragLeaveEvt = this._createEvent('dragleave', touch, this._lastTarget);
            this._lastTarget.dispatchEvent(dragLeaveEvt);
          }
          const dragEnterEvt = this._createEvent('dragenter', touch, target);
          target.dispatchEvent(dragEnterEvt);
          this._lastTarget = target;
        }
        const dragOverEvt = this._createEvent('dragover', touch, target);
        target.dispatchEvent(dragOverEvt);
      }
    }

    _touchend(e) {
      clearTimeout(this._holdTimer);

      if (this._isDragging) {
        e.preventDefault();
        const touch = e.changedTouches ? e.changedTouches[0] : (e.touches ? e.touches[0] : this._ptDown);
        const target = touch ? document.elementFromPoint(touch.clientX, touch.clientY) : null;

        if (target) {
          const dropEvt = this._createEvent('drop', touch, target);
          target.dispatchEvent(dropEvt);
        }

        if (this._dragSource) {
          const dragEndEvt = this._createEvent('dragend', touch, this._dragSource);
          this._dragSource.dispatchEvent(dragEndEvt);
        }
      }

      this._cleanup();
    }

    _cleanup() {
      clearTimeout(this._holdTimer);
      if (this._img && this._img.parentNode) {
        this._img.parentNode.removeChild(this._img);
      }
      this._dragSource = null;
      this._img = null;
      this._ptDown = null;
      this._isDragging = false;
      this._dataTransfer = null;
      this._lastTarget = null;
    }

    _createEvent(type, touch, target) {
      const evt = new CustomEvent(type, {
        bubbles: true,
        cancelable: true
      });
      evt.button = 0;
      evt.which = 0;
      evt.buttons = 1;
      evt.clientX = touch ? touch.clientX : 0;
      evt.clientY = touch ? touch.clientY : 0;
      evt.pageX = touch ? touch.pageX : 0;
      evt.pageY = touch ? touch.pageY : 0;
      evt.screenX = touch ? touch.screenX : 0;
      evt.screenY = touch ? touch.screenY : 0;
      evt.dataTransfer = this._dataTransfer;
      return evt;
    }
  }

  window.DragDropTouch = new DragDropTouchPolyfill();
})();

