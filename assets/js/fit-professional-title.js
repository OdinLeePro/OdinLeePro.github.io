// assets/js/fit-professional-title.js
(function () {
  function fitProfessionalTitle() {
    var el = document.querySelector('.professional-title');
    if (!el) return;

    // Enforce single-line behavior for measurement
    el.style.whiteSpace = 'nowrap';
    el.style.display = 'inline-block';
    el.style.lineHeight = '1';

    // Find a sensible container width to fit within. Prefer .leftSide if available.
    var container = el.closest('.leftSide') || el.parentElement || document.body;
    var paddingBuffer = 8; // small buffer to avoid touching edges
    var containerWidth = Math.max(0, container.clientWidth - paddingBuffer);

    // Pixel bounds and step
    var maxFontPx = 72; // reasonable upper cap for very wide viewports
    var minFontPx = 8;
    var step = 0.5;

    // Start from the max and reduce until it fits
    var fontPx = maxFontPx;
    el.style.fontSize = fontPx + 'px';

    // If element is already smaller than container, try to grow later; otherwise decrease until it fits
    while (fontPx > minFontPx && el.scrollWidth > containerWidth) {
      fontPx -= step;
      el.style.fontSize = fontPx + 'px';
    }

    // Try to grow slightly to maximize size (stops at first overflow)
    while (fontPx + step <= maxFontPx) {
      el.style.fontSize = (fontPx + step) + 'px';
      if (el.scrollWidth > containerWidth) {
        // revert to last good size
        el.style.fontSize = fontPx + 'px';
        break;
      }
      fontPx += step;
    }
  }

  var resizeTimeout;
  document.addEventListener('DOMContentLoaded', fitProfessionalTitle);
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(fitProfessionalTitle, 120);
  });
})();
