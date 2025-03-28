document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    setTimeout(() => el.classList.add("show"), 100);
  });
});
