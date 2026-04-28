// NAV scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Reveal on scroll
const reveals = document.querySelectorAll(
  '.benefit-card, .step, .pricing-card, .section-header, .hero-badge, .hero-title, .hero-desc, .hero-actions, .hero-social-proof, .cta-card'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// 3D tilt on hero image
const wrapper = document.getElementById('studentCard');
if (wrapper) {
  wrapper.addEventListener('mousemove', (e) => {
    const rect = wrapper.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -6;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 8;
    wrapper.style.animation = 'none';
    wrapper.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  });

  wrapper.addEventListener('mouseleave', () => {
    wrapper.style.animation = '';
    wrapper.style.transform = '';
  });
}

// Google Ads — conversão no clique do checkout
document.querySelectorAll('a[href*="ev.braip.com"]').forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', { send_to: 'AW-18124142964' });
    }
  });
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
