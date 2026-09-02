// ================= CUSTOM CURSOR =================
const cursor = document.getElementById('cursor');
const isTouch = window.matchMedia('(hover: none)').matches;

if (!isTouch && cursor) {
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('is-active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
  });
}

// ================= SCROLL PROGRESS BAR =================
const scrollFill = document.getElementById('scrollFill');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const pct = height > 0 ? (scrolled / height) * 100 : 0;
  if (scrollFill) scrollFill.style.width = pct + '%';
});

// ================= MOBILE MENU =================
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
  });
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mobileMenu.classList.remove('is-open'));
  });
}

// ================= GSAP SCROLL REVEALS =================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  if (prefersReducedMotion) {
    gsap.set('[data-reveal]', { opacity: 1, y: 0 });
  } else {
    // Hero: one orchestrated entrance on load
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to('.hero__title .line', { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 })
      .to('.hero__sub', { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .to('.hero__actions', { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
      .to('.hero__visual', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
      .to('.hero__scroll', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');

    // Everything below the hero: reveal on scroll into view
    document.querySelectorAll('section:not(.hero) [data-reveal]').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      });
    });
  }
} else {
  // GSAP failed to load (e.g. offline) — just show everything
  document.querySelectorAll('[data-reveal]').forEach((el) => {
    el.style.opacity = 1;
    el.style.transform = 'none';
  });
}
