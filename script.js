
// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// Smooth scroll for navbar links
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// AOS Animation Initialization
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true
  });
});

// Contact Form Validation (Basic)
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you! Your message has been sent.");
      form.reset();
    }
  });
}
