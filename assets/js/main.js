/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home__img-1", 5, { opacity: 0, x: 400 });
gsap.from(".home__img-6", 1.5, {
  opacity: 0,
  y: 200,
  delay: 0.1,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-3", 1.5, {
  opacity: 0,
  y: 400,
  delay: 0.3,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-5", 1.5, {
  opacity: 0,
  y: 400,
  delay: 0.5,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-2", 1.5, {
  opacity: 0,
  y: 400,
  delay: 0.8,
  ease: "back.out(1.5)",
});
gsap.from(".home__img-4", 1.5, {
  opacity: 0,
  y: 200,
  delay: 1.8,
  ease: "back.out(1.5)",
});
gsap.from(".home__data", 1.5, {
  opacity: 0,
  y: -100,
  delay: 2.5,
  ease: "back.out(1.5)",
});
gsap.from(".home__lantern-1", 1.5, {
  opacity: 0,
  x: 70,
  delay: 3,
  ease: "back.out(1.5)",
});
gsap.from(".home__lantern-2", 1.5, {
  opacity: 0,
  x: -70,
  delay: 3.5,
  ease: "back.out(1.5)",
});

/*=============== SAKURA ANIMATION ===============*/
const sakura = new Sakura(".sakura-petals");

/*=============== CARD SWIPER ===============*/
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*==================== ACTIVE NAV LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// REMOVE URL #
// Function to change the URL to the base URL
function removeHash() {
  window.history.replaceState(null, null, window.location.pathname);
}

// Event listeners for the links
document
  .getElementsByClassName("homeLink")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    removeHash();
  });

document
  .getElementsByClassName("projectLink")
  .addEventListener("click", function (e) {
    e.preventDefault();
    removeHash();
  });

document
  .getElementsByClassName("contactLink")
  .addEventListener("click", function (e) {
    e.preventDefault();
    removeHash();
  });

// Check if URL has a hash and remove it on page load
if (
  window.location.hash === "#home" ||
  window.location.hash === "#project" ||
  window.location.hash === "#contact"
) {
  removeHash();
}
