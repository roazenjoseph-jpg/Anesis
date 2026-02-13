// script.js for Anesis website

document.addEventListener('DOMContentLoaded', function () {
  // Scroll detection for hiding navbar on small screens
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // Scrolling DOWN - hide navbar
      if (navbar) navbar.classList.add('navbar-hidden');
    } else {
      // Scrolling UP or at top - show navbar
      if (navbar) navbar.classList.remove('navbar-hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
      if (navLinks.classList.contains('active')) {
        hamburger.classList.add('hide');
      } else {
        hamburger.classList.remove('hide');
      }
    });
    // Hide nav links after clicking a link
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.classList.remove('hide');
      }
    });
    // Hide nav links when mouse leaves nav-links area
    navLinks.addEventListener('mouseleave', function () {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.classList.remove('hide');
    });
  }

  // Contact form submission
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');
  if (form && successMsg) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formdata = new FormData(form);
      const response = await fetch(form.action, {
        method: form.method,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        form.reset();
        successMsg.style.display = 'block';
      } else {
        alert("✅ Thank you! Your message has been sent. We'll get back to you soon.");
      }
    });
  }
});
