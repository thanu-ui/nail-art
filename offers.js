
/* ==========================================
   NAIL PIGMENT — OFFERS PAGE
   Curtain opening after 2 seconds + promo code copy
========================================== */

document.addEventListener("DOMContentLoaded", () => {
  initCurtainOpening();
  initPromoCodeCopy();
});

/* ==========================================
   CURTAIN OPENING — 2 SECOND DELAY
========================================== */

function initCurtainOpening() {
  const opening = document.querySelector(".offers-opening");

  if (!opening) return;

  const leftCurtain = opening.querySelector(
    ".offers-curtain-left, .offers-door-left"
  );

  const rightCurtain = opening.querySelector(
    ".offers-curtain-right, .offers-door-right"
  );

  if (!leftCurtain || !rightCurtain) return;

  // Reset to the closed position when entering the page.
  opening.classList.remove("is-open");

  leftCurtain.style.transition = "none";
  rightCurtain.style.transition = "none";

  leftCurtain.style.transform = "translateX(0)";
  rightCurtain.style.transform = "translateX(0)";

  // Ensure the closed position is applied before starting.
  void opening.offsetWidth;

  // Restore fast animation and open after 2 seconds.
  window.setTimeout(() => {
    leftCurtain.style.transition =
      "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)";

    rightCurtain.style.transition =
      "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)";

    opening.classList.add("is-open");

    leftCurtain.style.transform = "translateX(-101%)";
    rightCurtain.style.transform = "translateX(101%)";
  }, 2000);
}

/* ==========================================
   COPY PROMO CODE
========================================== */

function initPromoCodeCopy() {
  const copyButtons = document.querySelectorAll(".copy-code-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const code = button.dataset.code;
      const originalText = button.textContent;

      if (!code) return;

      try {
        await navigator.clipboard.writeText(code);
        button.textContent = "Copied!";
      } catch (error) {
        button.textContent = code;
      }

      window.setTimeout(() => {
        button.textContent = originalText;
      }, 1800);
    });
  });
}
