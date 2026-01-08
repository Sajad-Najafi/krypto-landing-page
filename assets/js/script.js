const hamburger = document.getElementById('hamburger');
const CloseMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

const openMobileMenu = () => {
  mobileMenu.classList.add('active');
  setTimeout(() => {
    overlay.classList.remove('hidden');
  }, 200);
};
const closeMobileMenu = () => {
  mobileMenu.classList.remove('active');
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 200);
};

hamburger.addEventListener('click', openMobileMenu);
CloseMenuBtn.addEventListener('click', closeMobileMenu);
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMobileMenu();
});

document.getElementById('copyright-time').textContent =
  new Date().getFullYear();
