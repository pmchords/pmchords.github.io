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

const beforeOrderingWrapper = document.querySelector(".before-ordering-wrapper");

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
  requestButton.style.cursor = "default";
} else {
  requestButton.style.cursor = "";
}
}

if (stickerRequestButton) {
  stickerRequestButton.textContent = "Request";
  stickerRequestButton.disabled = !SHOP_ACTIVE;

 if (!SHOP_ACTIVE) {
  stickerRequestButton.style.cursor = "default";
} else {
  stickerRequestButton.style.cursor = "";
}
}

if (SHOP_ACTIVE) {
  if (requestButton) {
    requestButton.addEventListener("click", () => {
      window.location.href =
        "mailto:pmchordshq@gmail.com" +
        "?subject=PM%20Chords%20%E2%80%93%20Order%20Request" +
        "&body=Request%20for%20PM%20Chords%20item%28s%29%0A%0A" +
        "Item%3A%20___%0A" +
        "Size%3A%20___%0A" +
        "Quantity%3A%20___%0A" +
        "Name%3A%20___%0A" +
        "Shipping%20address%3A%20___%0A%0A" +
        "Text%20Message%20%28Optional%29%3A%0A%0A" +
        "I%20would%20like%20to%20order%20the%20item%28s%29%20listed%20above.";
    });
  }

  if (stickerRequestButton) {
    stickerRequestButton.addEventListener("click", () => {
      window.location.href =
        "mailto:pmchordshq@gmail.com" +
        "?subject=PM%20Chords%20%E2%80%93%20Order%20Request" +
        "&body=Request%20for%20PM%20Chords%20item%28s%29%0A%0A" +
        "Item%3A%20___%0A" +
        "Size%3A%20___%0A" +
        "Quantity%3A%20___%0A" +
        "Name%3A%20___%0A" +
        "Shipping%20address%3A%20___%0A%0A" +
        "Text%20Message%20%28Optional%29%3A%0A%0A" +
        "I%20would%20like%20to%20order%20the%20item%28s%29%20listed%20above.";
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

const legalLinks = document.querySelectorAll(".legal-links a");

if (!SHOP_ACTIVE) {
  legalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
}

if (beforeOrderingWrapper && !SHOP_ACTIVE) {
  beforeOrderingWrapper.classList.add("shop-inactive");
}
