document.addEventListener('click', (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  // If the menu is open AND the click wasn't on the menu or burger icon
  if (navLinks.classList.contains('active') && !isClickInsideMenu && !isClickOnBurger) {
    navLinks.classList.remove('active');
  }
});