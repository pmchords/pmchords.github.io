// =====================================================
// PM CHORDS — SHOP STATUS
// false = Store offline
// true  = Store online
// =====================================================

const SHOP_ACTIVE = true;

const button = document.getElementById("add-to-cart");
const shareButton = document.getElementById("share-button");
const stickerButton = document.getElementById("sticker-add-to-cart");
const stickerShareButton = document.getElementById("sticker-share-button");
const aboutLink = document.getElementById("about-link");
const aboutPopover = document.getElementById("about-popover");
const storeStatus = document.getElementById("store-status");

if (button) {
  if (SHOP_ACTIVE) {
    button.textContent = "Request";
    button.disabled = false;
  } else {
    button.textContent = "Request";
    button.disabled = true;
    button.style.opacity = "0.45";
    button.style.cursor = "default";
  }
}

if (stickerButton) {
  if (SHOP_ACTIVE) {
    stickerButton.textContent = "Request";
    stickerButton.disabled = false;
  } else {
    stickerButton.textContent = "Request";
    stickerButton.disabled = true;
    stickerButton.style.opacity = "0.45";
    stickerButton.style.cursor = "default";
  }
}

if (SHOP_ACTIVE) {
  if (button) {
    button.addEventListener("click", () => {
      window.location.href = "mailto:pmchordshq@gmail.com";
    });
  }

  if (stickerButton) {
    stickerButton.addEventListener("click", () => {
      window.location.href = "mailto:pmchordshq@gmail.com";
    });
  }
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

if (stickerShareButton) {
  stickerShareButton.addEventListener("click", async () => {
    const currentPath = window.location.pathname.includes("/store/") ? "/store/" : "/";
    const shareUrl = `${window.location.origin}${currentPath}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      stickerShareButton.textContent = "Copied!";
    } catch (error) {
      stickerShareButton.textContent = "Share";
    }

    window.setTimeout(() => {
      stickerShareButton.textContent = "Share";
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

if (storeStatus) {
  const statusText = storeStatus.querySelector(".store-status-text");
  const statusDot = storeStatus.querySelector(".store-status-dot");

  if (SHOP_ACTIVE) {
    if (statusText) {
      statusText.textContent = "Store online";
    }

    if (statusDot) {
      statusDot.classList.add("online");
    }
  } else {
    if (statusText) {
      statusText.textContent = "Store offline";
    }

    if (statusDot) {
      statusDot.classList.add("offline");
    }
  }
}
