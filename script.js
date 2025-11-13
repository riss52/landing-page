// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("active");
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.remove("active");
  }
}

// Scroll animation observer
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll("[data-animate]");
  animatedElements.forEach((element) => {
    element.style.animationPlayState = "paused";
    observer.observe(element);
  });

  // Set current year
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

// Parallax effect for hero (optional)
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.transform = "translateY(" + scrolled * 0.3 + "px)";
  }
});

// years
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
