// Project Carousel — track-based translateX version
// Moves the .projectGrid (track) instead of each .projectCard (slide)

class ProjectCarousel {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 0;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000; // 5s
    this.isAutoPlaying = true;
    this.touchStartX = 0;
    this.touchEndX = 0;

    // Respect reduced motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.isAutoPlaying = false;
    }

    this.init();
  }

  init() {
    // Track + controls
    this.carousel = document.querySelector('.projectGrid'); // the track
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.playPauseBtn = document.getElementById('playPauseBtn');
    this.indicatorsContainer = document.getElementById('indicators');

    if (!this.carousel) {
      console.warn('ProjectCarousel: .projectGrid not found.');
      return;
    }

    this.slides = this.carousel.querySelectorAll('.projectCard');
    this.totalSlides = this.slides.length;

    if (this.totalSlides === 0) {
      console.warn('ProjectCarousel: No .projectCard slides found.');
      return;
    }

    this.setupCarousel();
    this.createIndicators();
    this.bindEvents();
    this.updateCarousel();
    this.startAutoPlay();
  }

  setupCarousel() {
    // Let flexbox handle slide layout; we only animate the track
    this.carousel.style.willChange = 'transform';
    this.carousel.style.transform = 'translateX(0%)';
    this.carousel.style.transition = 'transform 0.5s ease-in-out';

    // Remove per-slide transforms if any existed
    this.slides.forEach(slide => {
      slide.style.transform = '';
      slide.style.transition = '';
    });
  }

  createIndicators() {
    if (!this.indicatorsContainer) return;
    this.indicatorsContainer.innerHTML = '';
    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'indicator' + (i === 0 ? ' active' : '');
      dot.setAttribute('data-slide', i.toString());
      dot.setAttribute('title', `Go to project ${i + 1}`);
      this.indicatorsContainer.appendChild(dot);
    }
  }

  bindEvents() {
    // Buttons
    this.prevBtn?.addEventListener('click', () => this.prevSlide());
    this.nextBtn?.addEventListener('click', () => this.nextSlide());
    this.playPauseBtn?.addEventListener('click', () => this.toggleAutoPlay());

    // Indicator clicks
    this.indicatorsContainer?.addEventListener('click', (e) => {
      const t = e.target;
      if (t && t.classList?.contains('indicator')) {
        const i = Number(t.getAttribute('data-slide'));
        if (!Number.isNaN(i)) this.goToSlide(i);
      }
    });

    // Touch/swipe
    this.carousel.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.carousel.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });

    // Keyboard (left/right arrows, space toggles autoplay)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); this.prevSlide(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); this.nextSlide(); }
      else if (e.key === ' ') { e.preventDefault(); this.toggleAutoPlay(); }
    });

    // Pause on hover
    this.carousel.addEventListener('mouseenter', () => {
      if (this.isAutoPlaying) this.pauseAutoPlay();
    });
    this.carousel.addEventListener('mouseleave', () => {
      if (this.isAutoPlaying && !this.autoPlayInterval) this.startAutoPlay();
    });

    // Pause when tab is hidden (saves battery, avoids surprise jumps)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.pauseAutoPlay();
      else if (this.isAutoPlaying) this.startAutoPlay();
    });

    // Keep position in sync on resize
    window.addEventListener('resize', () => this.updateCarousel());
  }

  handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    if (Math.abs(diff) > 50) (diff > 0) ? this.nextSlide() : this.prevSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
    this.resetAutoPlay();
  }

  goToSlide(index) {
    this.currentSlide = Math.max(0, Math.min(index, this.totalSlides - 1));
    this.updateCarousel();
    this.resetAutoPlay();
  }

  updateCarousel() {
    // Move the track
    this.carousel.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    this.updateIndicators();
    this.updateNavigationState();
  }

  updateNavigationState() {
    // Infinite loop: no disabled states needed, but kept for future
    this.prevBtn?.classList.remove('disabled');
    this.nextBtn?.classList.remove('disabled');
  }

  updateIndicators() {
    if (!this.indicatorsContainer) return;
    const dots = this.indicatorsContainer.querySelectorAll('.indicator');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === this.currentSlide));
  }

  startAutoPlay() {
    if (!this.isAutoPlaying || this.autoPlayInterval) return;
    this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    this.updatePlayPauseButton();
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = null;
    this.updatePlayPauseButton();
  }

  resetAutoPlay() {
    if (this.isAutoPlaying) {
      this.pauseAutoPlay();
      this.startAutoPlay();
    }
  }

  toggleAutoPlay() {
    this.isAutoPlaying = !this.isAutoPlaying;
    this.isAutoPlaying ? this.startAutoPlay() : this.pauseAutoPlay();
  }

  updatePlayPauseButton() {
    if (!this.playPauseBtn) return;
    const isPlaying = this.isAutoPlaying && !!this.autoPlayInterval;
    const path = this.playPauseBtn.querySelector('svg path');
    if (!path) return;

    if (isPlaying) {
      path.setAttribute('d', 'M6 4h4v16H6V4zm8 0h4v16h-4V4z'); // pause icon
      this.playPauseBtn.setAttribute('title', 'Pause auto-play');
      this.playPauseBtn.setAttribute('aria-label', 'Pause auto-play');
    } else {
      path.setAttribute('d', 'M8 5v14l11-7z'); // play icon
      this.playPauseBtn.setAttribute('title', 'Start auto-play');
      this.playPauseBtn.setAttribute('aria-label', 'Start auto-play');
    }
  }

  // Public helpers (optional)
  setAutoPlayDelay(ms) {
    this.autoPlayDelay = ms;
    this.resetAutoPlay();
  }
  getCurrentSlide() { return this.currentSlide; }
  getTotalSlides() { return this.totalSlides; }
}

// Initialize once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Avoid duplicate init if script is accidentally included twice
  if (!window.projectCarousel) {
    window.projectCarousel = new ProjectCarousel();
  }
});
