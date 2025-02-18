const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  window.location.href = 'meniu.html';
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function fadeInOnScroll() {
      fadeElements.forEach((el) => {
          let position = el.getBoundingClientRect().top;
          let windowHeight = window.innerHeight;

          if (position < windowHeight - 50) {
              el.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});
