// Highlight active navbar link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });

  // Animate cards on scroll
  document.querySelectorAll('.card.animate').forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add('show');
    }
  });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});