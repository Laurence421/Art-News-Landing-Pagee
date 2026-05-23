const navLinks = document.getElementById('mymenu');
const burger = document.getElementById('burger');
function handleNavigation() {
  const width = window.innerWidth;

  if (width <= 925) {
    // Switch to Burger Mode
    navLinks.classList.add('mobile-mode');
    burger.style.display = 'block';
  } else {
    // Back to Normal Design
    navLinks.classList.remove('mobile-mode', 'active');
    burger.style.display = 'none';
  }
}

// Toggle menu visibility when clicking the burger
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Listen for resize events
window.addEventListener('resize', handleNavigation);

// Run on initial load
handleNavigation();