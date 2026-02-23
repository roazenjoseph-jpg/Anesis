// script.js for Anesis website

document.addEventListener('DOMContentLoaded', function () {
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
  if (form && successMsg) {
    form.addEventListener('submit',  function (event) {
      event.preventDefault();
      const formdata = new FormData(form);
      const response =  fetch(form.action, {
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
      function sendMail(){
        async function sendMail(){
          let parms = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value
          }
         const formData = new FormData(form);
    formData.append("access_key", "221464fc-0f76-45f3-8c69-9ff4becbfa82");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
      const contactForm = new FormData(contact-form);
    contactForm.append("access_key", "221464fc-0f76-45f3-8c69-9ff4becbfa82");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: contactForm
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}
      }