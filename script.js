
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";

    navItems.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// DARK MODE
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
});

// UPDATE FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// CONTACT FORM
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    formStatus.textContent = "Please complete all fields.";
    return;
  }

  formStatus.textContent =
    `Thank you, ${name}! Your form is valid, but no message was sent.`;

  // This is a front-end demo only.
  // Connect a backend or form service to send real messages.
  contactForm.reset();
});

// HIGHLIGHT THE SECTION VISIBLE ON SCREEN
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-25% 0px -60% 0px" }
);

sections.forEach((section) => observer.observe(section));

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Highlight the active navigation link while scrolling
const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "home";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Basic contact form interaction
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
        `Thank you, ${name}! Your message has been entered successfully.`;

    contactForm.reset();
});
