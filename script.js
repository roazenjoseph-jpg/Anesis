// script.js for Anesis website

/**
 * Refined Scroll Reveal Observer
 * Adds visibility animations to sections as they enter the viewport
 */
function initScrollReveal() {
  const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  const revealTargets = document.querySelectorAll('.look, .clean, .text h2');
  
  revealTargets.forEach(target => {
    target.style.opacity = '0';
    target.style.transform = 'translateY(30px)';
    target.style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
    observer.observe(target);
  });

  const style = document.createElement('style');
  style.textContent = `
    .visible { 
      opacity: 1 !important; 
      transform: translateY(0) !important; 
    }
    @media (prefers-reduced-motion: reduce) {
      .service-card, .look, .clean, .text h2 {
        opacity: 1 !important; transform: none !important; transition: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();

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
  const button = document.getElementById('button');
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('success-message');
  if (form && successMsg && button) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      
      const originalText = button.textContent;
      button.textContent = "Sending...";
      button.disabled = true;

      const formdata = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          headers: { 'Accept': 'application/json' },
          body: formdata
        });
        
        if (response.ok) {
          form.reset();
          successMsg.style.display = 'block';
        } else {
          const data = await response.json();
          alert("Error: " + (data.message || "Something went wrong."));
        }
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        button.textContent = originalText;
        button.disabled = false;
      }
    });
  }
});