const views = {
  home: { note: "The current Noet creator-SaaS homepage, rebuilt as a compact interactive exhibit." },
  next: { note: "Reserved for the next screen that best completes the Noet story." }
};

document.querySelectorAll(".view-button").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.view;
    const frame = document.querySelector(".product-frame");
    document.querySelectorAll(".view-button").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    frame.dataset.mode = mode;
    frame.classList.remove("switching");
    void frame.offsetWidth;
    frame.classList.add("switching");
    document.querySelector("#lab-note").textContent = views[mode].note;
    document.querySelector("#noet-home").hidden = mode !== "home";
    document.querySelector("#next-placeholder").hidden = mode !== "next";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const portraitFlip = document.querySelector(".portrait-flip");

portraitFlip?.addEventListener("click", () => {
  const isShowingQr = portraitFlip.getAttribute("aria-pressed") === "true";
  const nextState = !isShowingQr;
  const front = portraitFlip.querySelector(".portrait-front");
  const back = portraitFlip.querySelector(".portrait-back");

  portraitFlip.setAttribute("aria-pressed", String(nextState));
  portraitFlip.setAttribute(
    "aria-label",
    nextState
      ? "Show Edward Cadiz's portrait"
      : "Show QR code for Edward Cadiz's GitHub profile",
  );
  front?.setAttribute("aria-hidden", String(nextState));
  back?.setAttribute("aria-hidden", String(!nextState));
});
