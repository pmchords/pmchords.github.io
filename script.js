// =====================================================
// PM CHORDS — SHOP STATUS
// false = Store offline
// true  = Store online
// =====================================================

const SHOP_ACTIVE = true;

const button = document.getElementById("add-to-cart");
const requestButton = document.getElementById("request-button");
const shareButton = document.getElementById("share-button");

const stickerButton = document.getElementById("sticker-add-to-cart");
const stickerRequestButton = document.getElementById("sticker-request-button");
const stickerShareButton = document.getElementById("sticker-share-button");

const aboutLink = document.getElementById("about-link");
const aboutPopover = document.getElementById("about-popover");
const storeStatus = document.getElementById("store-status");

if (button) {
  button.textContent = "Sold Out";
  button.disabled = true;
  button.style.opacity = "0.8";
  button.style.cursor = "default";
}

if (stickerButton) {
  stickerButton.textContent = "Sold Out";
  stickerButton.disabled = true;
  stickerButton.style.opacity = "0.8";
  stickerButton.style.cursor = "default";
}

if (requestButton) {
  requestButton.textContent = "Request";
  requestButton.disabled = !SHOP_ACTIVE;

  if (!SHOP_ACTIVE) {
    requestButton.style.opacity = "0.45";
    requestButton.style.cursor = "default";
  } else {
    requestButton.style.opacity = "";
    requestButton.style.cursor = "";
  }
}

if (stickerRequestButton) {
  stickerRequestButton.textContent = "Request";
  stickerRequestButton.disabled = !SHOP_ACTIVE;

  if (!SHOP_ACTIVE) {
    stickerRequestButton.style.opacity = "0.45";
    stickerRequestButton.style.cursor = "default";
  } else {
    stickerRequestButton.style.opacity = "";
    stickerRequestButton.style.cursor = "";
  }
}

if (SHOP_ACTIVE) {
  if (requestButton) {
    requestButton.addEventListener("click", () => {
      window.location.href = "mailto:pmchordshq@gmail.com";
    });
  }

  if (stickerRequestButton) {
    stickerRequestButton.addEventListener("click", () => {
      window.location.href = "mailto:pmchordshq@gmail.com";
    });
  }
}

const sharePage = async (shareButton) => {
  const shareUrl = window.location.href;

  try {
    await navigator.clipboard.writeText(shareUrl);
    shareButton.textContent = "Copied!";
  } catch (error) {
    shareButton.textContent = "Share";
  }

  window.setTimeout(() => {
    shareButton.textContent = "Share";
  }, 1800);
};

if (shareButton) {
  shareButton.addEventListener("click", () => {
    sharePage(shareButton);
  });
}

if (stickerShareButton) {
  stickerShareButton.addEventListener("click", () => {
    sharePage(stickerShareButton);
  });
}

if (aboutLink && aboutPopover) {
  aboutLink.addEventListener("click", (event) => {
    event.preventDefault();
    aboutPopover.hidden = !aboutPopover.hidden;
  });

  document.addEventListener("click", (event) => {
    if (
      !aboutPopover.contains(event.target) &&
      event.target !== aboutLink
    ) {
      aboutPopover.hidden = true;
    }
  });
}

if (storeStatus) {
  storeStatus.textContent = SHOP_ACTIVE
    ? "Store online"
    : "Store offline";
}
