const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
