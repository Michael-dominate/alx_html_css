document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navButtons = document.querySelector('.top-buttons');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navButtons.classList.toggle('active');
  });

  
  document.querySelectorAll('.top-buttons button').forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navButtons.classList.remove('active');
    });
  });
});