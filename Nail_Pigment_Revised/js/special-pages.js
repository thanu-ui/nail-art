
(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;

  const themeButton = document.querySelector("[data-theme-toggle]");
  const directionButton = document.querySelector("[data-rtl-toggle]");
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  /* =========================================
     SVG ICONS
  ========================================= */

const svg = (name, cls = "icon-svg") => {
  const paths = {
    sun: `
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2m0 16v2
        M4.93 4.93l1.42 1.42
        m11.3 11.3 1.42 1.42
        M2 12h2m16 0h2
        M4.93 19.07l1.42-1.42
        m11.3-11.3 1.42-1.42"/>
    `,
    moon: `
      <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5
        8.5 8.5 0 1 0 20.5 14.2Z"/>
      <path d="M17 3v4m-2-2h4
        M21 9v3m-1.5-1.5h3"/>
    `,
    direction: `
      <path d="M3 7h17l-4-4m4 4-4 4
        M21 17H4l4 4m-4-4 4-4"/>
    `
  };

  return `
    <svg class="${cls}" viewBox="0 0 24 24"
      width="22" height="22"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false">
      ${paths[name] || ""}
    </svg>
  `;
};

 
  /* =========================================
     THEME SETTINGS
  ========================================= */

  function setTheme(theme, save = true) {
    const selectedTheme = theme === "dark" ? "dark" : "light";
    const isDark = selectedTheme === "dark";

    root.dataset.theme = selectedTheme;
    body.dataset.theme = selectedTheme;

    if (themeButton) {
      // Light mode shows the moon; dark mode shows the sun.
      themeButton.innerHTML = svg(isDark ? "sun" : "moon");

      const label = isDark
        ? "Switch to light mode"
        : "Switch to dark mode";

      themeButton.setAttribute("aria-label", label);
      themeButton.setAttribute("title", label);
      themeButton.setAttribute("aria-pressed", String(isDark));
    }

    themeColorMeta?.setAttribute(
      "content",
      isDark ? "#171216" : "#FFF5F7"
    );

    if (save) {
      try {
        localStorage.setItem("np-theme", selectedTheme);
      } catch (_) {
        // Theme still works if storage is unavailable.
      }
    }
  }

  /* =========================================
     RTL / LTR SETTINGS
  ========================================= */

  function setDirection(direction, save = true) {
    const selectedDirection = direction === "rtl" ? "rtl" : "ltr";

    root.dir = selectedDirection;
    root.lang = "en";

    if (directionButton) {
      directionButton.innerHTML = svg("direction");

      const label = selectedDirection === "rtl"
        ? "Switch to left-to-right direction"
        : "Switch to right-to-left direction";

      directionButton.setAttribute("aria-label", label);
      directionButton.setAttribute("title", label);
      directionButton.setAttribute(
        "aria-pressed",
        String(selectedDirection === "rtl")
      );
    }

    if (save) {
      try {
        localStorage.setItem("np-direction", selectedDirection);
      } catch (_) {
        // Direction still works if storage is unavailable.
      }
    }
  }

  /* =========================================
     RESTORE SAVED SETTINGS
  ========================================= */

  let savedTheme = "light";
  let savedDirection = "ltr";

  try {
    savedTheme = localStorage.getItem("np-theme") || "light";
    savedDirection = localStorage.getItem("np-direction") || "ltr";
  } catch (_) {
    // Use defaults if storage is unavailable.
  }

  setTheme(savedTheme, false);
  setDirection(savedDirection, false);

  /* =========================================
     BUTTON EVENTS
  ========================================= */

  themeButton?.addEventListener("click", () => {
    const nextTheme =
      root.dataset.theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
  });

  directionButton?.addEventListener("click", () => {
    const nextDirection =
      root.dir === "rtl" ? "ltr" : "rtl";

    setDirection(nextDirection);
  });

  /* =========================================
     COMING SOON — NOTIFY ME DIALOG
  ========================================= */

  const notifyOpen = document.querySelector("[data-notify-open]");
  const notifyOverlay = document.querySelector("[data-notify-overlay]");
  const notifyClose = document.querySelector("[data-notify-close]");
  const notifyForm = document.querySelector("[data-notify-form]");
  const notifyEmail = document.querySelector("#notify-email");
  const notifyMessage = document.querySelector("[data-notify-message]");

  if (notifyOpen && notifyOverlay) {
    function closeNotifyDialog() {
      notifyOverlay.hidden = true;
      notifyOpen.focus();
    }

    notifyOpen.addEventListener("click", () => {
      notifyOverlay.hidden = false;

      if (notifyMessage) {
        notifyMessage.textContent = "";
      }

      notifyEmail?.focus();
    });

    notifyClose?.addEventListener("click", closeNotifyDialog);

    notifyOverlay.addEventListener("click", event => {
      if (event.target === notifyOverlay) {
        closeNotifyDialog();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !notifyOverlay.hidden) {
        closeNotifyDialog();
      }
    });

    notifyForm?.addEventListener("submit", event => {
      event.preventDefault();

      if (!notifyForm.reportValidity()) return;

      const email = notifyEmail?.value.trim();

      if (notifyMessage) {
        notifyMessage.textContent =
          `Thanks! ${email} is entered, but notifications aren't connected yet.`;
      }
    });
  }

  /* =========================================
     COMING SOON — OPENING PROGRESS ANIMATION
  ========================================= */

  const comingPage = document.querySelector(
    ".np-coming-soon-page"
  );

  if (comingPage) {
    const progressNumber = comingPage.querySelector(
      "[data-progress-number]"
    );

    const progressTrack = comingPage.querySelector(
      "[data-progress-track]"
    );

    const progressFill = comingPage.querySelector(
      "[data-progress-fill]"
    );

    const progressCaption = comingPage.querySelector(
      "[data-progress-caption]"
    );

    const targetProgress = 85;
    const duration = 2400;
    const startTime = performance.now();

    const messages = [
      { at: 0, text: "Preparing something lovely for you..." },
      { at: 25, text: "Gathering fresh nail inspiration..." },
      { at: 55, text: "Adding the finishing touches..." },
      { at: 80, text: "Our creative world is taking shape..." },
      { at: 85, text: "Almost ready for a little more sparkle." }
    ];

    let lastMessage = "";

    function animateProgress(now) {
      const elapsed = now - startTime;
      const fraction = Math.min(elapsed / duration, 1);

      // Smooth ease-out movement.
      const eased = 1 - Math.pow(1 - fraction, 3);
      const currentProgress = Math.round(
        eased * targetProgress
      );

      if (progressNumber) {
        progressNumber.textContent = currentProgress;
      }

      if (progressFill) {
        progressFill.style.width = `${currentProgress}%`;
      }

      if (progressTrack) {
        progressTrack.setAttribute(
          "aria-valuenow",
          currentProgress
        );
      }

      const message = [...messages]
        .reverse()
        .find(item => currentProgress >= item.at);

      if (
        message &&
        progressCaption &&
        message.text !== lastMessage
      ) {
        progressCaption.textContent = message.text;
        lastMessage = message.text;
      }

      if (fraction < 1) {
        requestAnimationFrame(animateProgress);
      }
    }

    requestAnimationFrame(animateProgress);
  }
})();
