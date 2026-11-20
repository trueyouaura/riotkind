(() => {
  const menu = document.querySelector('.menu-button');
  const nav = document.querySelector('#primary-nav');
  const year = document.querySelector('#copyright-year');
  if (year) year.textContent = new Date().getFullYear();
  if (!menu || !nav) return;
  function setOpen(open) {
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }
  menu.addEventListener('click', () => setOpen(menu.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      menu.focus();
    }
  });
  window.matchMedia('(min-width: 921px)').addEventListener('change', event => {
    if (event.matches) setOpen(false);
  });
})();
