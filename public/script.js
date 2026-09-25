(function () {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  const year = document.querySelector("[data-year]");
  const copyButton = document.querySelector("[data-copy]");

  function setHeaderState() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (header) {
    setHeaderState();
    window.addEventListener("scroll", setHeaderState, { passive: true });
  }

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      const open = !header.classList.contains("nav-open");
      header.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
      navToggle?.setAttribute("aria-expanded", "false");
      closeDropdowns();
    });
  });

  function closeDropdowns(except) {
    dropdowns.forEach((dropdown) => {
      if (dropdown === except) {
        return;
      }

      dropdown.classList.remove("is-open");
      dropdown.querySelector("[data-dropdown-button]")?.setAttribute("aria-expanded", "false");
    });
  }

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("[data-dropdown-button]");

    button?.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = !dropdown.classList.contains("is-open");
      closeDropdowns(dropdown);
      dropdown.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
  });

  document.addEventListener("click", () => closeDropdowns());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDropdowns();
    }
  });

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const value = copyButton.getAttribute("data-copy") || "";
      const original = copyButton.textContent;

      try {
        await navigator.clipboard.writeText(value);
        copyButton.textContent = "복사됨";
      } catch (error) {
        copyButton.textContent = "메일 주소 확인";
      }

      window.setTimeout(() => {
        copyButton.textContent = original;
      }, 1600);
    });
  }
})();
