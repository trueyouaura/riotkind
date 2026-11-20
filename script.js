// No dependencies or tracking. Works as a static GitHub Pages site.
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('is-open', !isOpen);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
});

document.getElementById('year').textContent = new Date().getFullYear();
