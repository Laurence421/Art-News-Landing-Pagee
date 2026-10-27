const navLinks = document.getElementById('mymenu');
const burger = document.getElementById('burger');

function setMenuOpen(open) {
  navLinks.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', open);
}

function handleNavigation() {
  const width = window.innerWidth;

  if (width > 925) {
    // Back to Normal Design
    setMenuOpen(false);
  }
}

// Toggle menu visibility when clicking the burger
burger.addEventListener('click', () => {
  setMenuOpen(!navLinks.classList.contains('active'));
});

// Listen for resize events
window.addEventListener('resize', handleNavigation);

// Run on initial load
handleNavigation();
