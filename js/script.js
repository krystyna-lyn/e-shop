const cartPanel = document.querySelector(".producstOnCart");
const cartOverlay = document.getElementById("cart-overlay");
const closeShopCart = document.querySelector("#closeButton");

function closeCart() {
  if (!cartPanel) return;
  cartPanel.classList.add("hide");
  cartOverlay?.classList.add("hide");
  document.body.classList.remove("stopScrolling");
}

function openCart() {
  if (!cartPanel) return;
  cartPanel.classList.remove("hide");
  cartOverlay?.classList.remove("hide");
  document.body.classList.add("stopScrolling");
}

if (closeShopCart) {
  closeShopCart.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeCart();
  });
}

if (cartOverlay) {
  cartOverlay.addEventListener("click", closeCart);
}

document.addEventListener("click", (e) => {
  if (e.target.closest("#closeButton")) return;

  if (e.target.closest(".shoppingCartButton") || e.target.closest(".cart-trigger")) {
    if (!cartPanel) return;
    if (cartPanel.classList.contains("hide")) {
      openCart();
    } else {
      closeCart();
    }
  }
});

// Mobile menu
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const menuClose = document.getElementById("close");
const menuBackdrop = document.getElementById("menu-backdrop");

function closeMenu() {
  nav?.classList.remove("active");
  menuBackdrop?.classList.add("hide");
  document.body.classList.remove("menu-open");
  bar?.setAttribute("aria-expanded", "false");
}

function openMenu() {
  closeMobileSearch();
  closeCart();
  nav?.classList.add("active");
  menuBackdrop?.classList.remove("hide");
  document.body.classList.add("menu-open");
  bar?.setAttribute("aria-expanded", "true");
}

function toggleMenu() {
  if (nav?.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
}

if (bar) {
  bar.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });
}

if (menuClose) {
  menuClose.addEventListener("click", (e) => {
    e.stopPropagation();
    closeMenu();
  });
}

if (menuBackdrop) {
  menuBackdrop.addEventListener("click", closeMenu);
}

// Mobile search toggle
const searchToggle = document.getElementById("search-toggle");
const searchClose = document.getElementById("search-close");
const searchbar = document.getElementById("searchbar");
const searchInput = document.getElementById("search-input");

function openMobileSearch() {
  if (!searchbar) return;
  closeMenu();
  searchbar.classList.add("is-open");
  document.body.classList.add("search-open");
  searchToggle?.setAttribute("aria-expanded", "true");
  setTimeout(() => searchInput?.focus(), 50);
}

function closeMobileSearch() {
  if (!searchbar) return;
  searchbar.classList.remove("is-open");
  document.body.classList.remove("search-open");
  searchToggle?.setAttribute("aria-expanded", "false");
  if (searchInput) searchInput.value = "";
  const searchResult = document.querySelector(".search_result");
  if (searchResult) searchResult.style.display = "none";
}

if (searchToggle) {
  searchToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    if (searchbar?.classList.contains("is-open")) {
      closeMobileSearch();
    } else {
      openMobileSearch();
    }
  });
}

if (searchClose) {
  searchClose.addEventListener("click", closeMobileSearch);
}

document.addEventListener("click", (e) => {
  if (
    searchbar?.classList.contains("is-open") &&
    !searchbar.contains(e.target) &&
    !searchToggle?.contains(e.target)
  ) {
    closeMobileSearch();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeMenu();
    closeMobileSearch();
  }
});
