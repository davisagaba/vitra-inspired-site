document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('nav-links-open');
    menuToggle.classList.toggle('nav-toggle-open');
  });

  document.querySelectorAll('.nav-links > li.has-megamenu > a.megamenu-trigger').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const parentLi = link.parentElement;
      document.querySelectorAll('.nav-links > li.megamenu-open').forEach((li) => {
        if (li !== parentLi) li.classList.remove('megamenu-open');
      });
      parentLi.classList.toggle('megamenu-open');
    });
  });

  document.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-links > li.has-megamenu').forEach((li) => {
      if (!li.contains(e.target)) li.classList.remove('megamenu-open');
    });
  });

  // Hero carousel
  const carousel = document.getElementById('hero-carousel');
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
    const dotsEl = document.getElementById('hero-dots');
    let current = 0;
    let timer;

    dotsEl.innerHTML = slides.map((_, i) => `<button type="button" class="hero-dot${i === 0 ? ' hero-dot-active' : ''}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`).join('');
    const dots = Array.from(dotsEl.querySelectorAll('.hero-dot'));

    function showSlide(index) {
      slides[current].classList.remove('hero-slide-active');
      dots[current].classList.remove('hero-dot-active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('hero-slide-active');
      dots[current].classList.add('hero-dot-active');
    }
    function nextSlide() { showSlide(current + 1); }
    function prevSlide() { showSlide(current - 1); }
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(nextSlide, 6000);
    }

    carousel.querySelector('.hero-arrow-next')?.addEventListener('click', () => { nextSlide(); resetTimer(); });
    carousel.querySelector('.hero-arrow-prev')?.addEventListener('click', () => { prevSlide(); resetTimer(); });
    dots.forEach((dot) => dot.addEventListener('click', () => { showSlide(Number(dot.dataset.index)); resetTimer(); }));

    resetTimer();
  }
});
