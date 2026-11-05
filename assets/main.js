(() => {
  const config = window.SITE_CONFIG || {};
  const links = document.querySelectorAll('[data-contact]');
  if (/^\d{10,15}$/.test(config.whatsapp || '')) links.forEach(link => { link.href = 'https://wa.me/' + config.whatsapp + '?text=' + encodeURIComponent(config.message || ''); });
  window.dataLayer = window.dataLayer || [];
  links.forEach((link, index) => link.addEventListener('click', () => { window.dataLayer.push({ event: 'contact_click', contact_channel: 'whatsapp', cta_text: link.textContent.trim(), cta_index: index + 1, page_audience: 'agencias' }); }));
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.section,.conversion,.signals,.hero-diagnostic,.mobile-first-cta').forEach(el => { el.classList.add('reveal'); observer.observe(el); });
})();
