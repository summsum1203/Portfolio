// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
     Project Details Toggle
     =========================== */
  function toggleDetails(button) {
    const details = button.previousElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  // Expose toggleDetails globally so inline onclick works
  window.toggleDetails = toggleDetails;

  // Hide all project details by default
  document.querySelectorAll(".details").forEach(detail => {
    detail.style.display = "none";
  });

  /* ===========================
     Contact Form Validation
     =========================== */
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // prevent actual submission for demo

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Expanded regex for modern domains
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

      // Reset classes before applying new ones
      formMessage.classList.remove("error", "success");

      if (name === "" || email === "" || message === "") {
        formMessage.textContent = "❌ All fields are required.";
        formMessage.classList.add("form-message", "error");
      } else if (!email.match(emailPattern)) {
        formMessage.textContent = "❌ Please enter a valid email address.";
        formMessage.classList.add("form-message", "error");
      } else if (message.length < 10) {
        formMessage.textContent = "❌ Message should be at least 10 characters long.";
        formMessage.classList.add("form-message", "error");
      } else {
        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.classList.add("form-message", "success");
        form.reset(); // clear form after success
      }
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const bannerText = document.querySelector('.banner-text');
  if (bannerText) {
    bannerText.style.opacity = 0;
    bannerText.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      bannerText.style.opacity = 1;
    }, 100);
  }
});