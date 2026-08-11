const button = document.getElementById("add-to-cart");
const shareButton = document.getElementById("share-button");
const aboutLink = document.getElementById("about-link");
const aboutPopover = document.getElementById("about-popover");

if (button) {
  button.textContent = "Sold Out";
  button.disabled = true;
  button.style.opacity = "0.8";
}

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    const currentPath = window.location.pathname.includes("/store/") ? "/store/" : "/";
    const shareUrl = `${window.location.origin}${currentPath}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      shareButton.textContent = "Copied!";
    } catch (error) {
      shareButton.textContent = "Share";
    }

    window.setTimeout(() => {
      shareButton.textContent = "Share";
    }, 1800);
  });
}

if (aboutLink && aboutPopover) {
  const togglePopover = (event) => {
    event.preventDefault();
    const isHidden = aboutPopover.hidden;
    aboutPopover.hidden = !isHidden;
  };

  aboutLink.addEventListener("click", togglePopover);

  document.addEventListener("click", (event) => {
    if (!aboutPopover.contains(event.target) && event.target !== aboutLink) {
      aboutPopover.hidden = true;
    }
  });
}
