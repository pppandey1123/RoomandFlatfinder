  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      thankYouMessage.style.display = "block";
    });
  });
