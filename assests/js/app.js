//Change icons
 const icon = document.getElementById('hamburger');

    icon.addEventListener('click', () => {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

// Dark mode and Light Mode
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};
const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});






document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector("#hamburger");
  const header = document.querySelector("header");

  hamburger.style.transition = "left 0.3s ease";

  hamburger.addEventListener("click", function () {
    header.classList.toggle("active");
    if (header.classList.contains("active")) {
      hamburger.style.left = "230px";
    } else {
      hamburger.style.left = "10px";
    }
  });
});







 const scrollUpBtn = document.getElementById("scrollUpBtn");

    window.addEventListener("scroll", () => {
      const triggerPoint = window.innerHeight;

      if (window.scrollY > triggerPoint) {
        scrollUpBtn.classList.add("show");
      } else {
        scrollUpBtn.classList.remove("show");
      }
    });

    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });