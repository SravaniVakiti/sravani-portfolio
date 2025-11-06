// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================

// Get references to the toggle button and the nav links container
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

// When the hamburger icon is clicked, show/hide the mobile menu
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Optional: close the menu when any link is clicked (nice UX on mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// ===============================
// CONTACT FORM HANDLING (MAILTO)
// ===============================

/*
  This form uses "mailto" so you don't need a backend.

  When the user clicks "Send Message", we:
  1. Stop the normal form submission.
  2. Read the name, email, and message fields.
  3. Open the user's default email client with a pre-filled subject and body.

  NOTE:
  - Replace "your-email@example.com" with your real email address.
*/

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading
    event.preventDefault();

    // Grab values from the form
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    // Build a subject and body for the email
    const subject = `Portfolio contact from ${name || "someone"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ];

    const body = bodyLines.join("\n");

    // TODO: Put your real email here (same as in index.html)
    const targetEmail = "your-email@example.com";

    // Build a mailto URL and open it
    const mailtoUrl =
      "mailto:" +
      encodeURIComponent(targetEmail) +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoUrl;

    // Optional: you can also clear the form after opening the mail app
    contactForm.reset();
  });
}

// ===============================
// FOOTER YEAR (KEEPS IT UP TO DATE)
// ===============================

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}