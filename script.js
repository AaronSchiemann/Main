document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    setTimeout(() => el.classList.add("show"), 100);
  });

  const bubbleContainer = document.querySelector('.bubbles');
  for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('span');
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 20}s`;
    bubbleContainer.appendChild(bubble);
  }
});
