
document.querySelectorAll(".photo-frame img").forEach((img) => {
  const frame = img.closest(".photo-frame");
  const fallback = frame.querySelector(".photo-fallback");

  const showFallback = () => {
    img.style.display = "none";
    fallback.style.display = "grid";
  };

  if (img.complete && img.naturalWidth === 0) {
    showFallback();
  }

  img.addEventListener("error", showFallback);

  img.addEventListener("load", () => {
    fallback.style.display = "none";
  });
});

const revealItems = document.querySelectorAll(
  ".letter-card, .photo-card, .you-card, .final-section"
);

if ("IntersectionObserver" in window) {
  revealItems.forEach(item => {
    item.classList.add("reveal");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => observer.observe(item));
}
