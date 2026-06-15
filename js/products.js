function createProductCard(element) {
  const { id, productName, image, productPrice } = element;

  const div = document.createElement("div");
  div.classList.add("pro");
  div.innerHTML = `
    <div id="${id}">
      <img src="${image}" alt="${productName}" />
      <div class="des">
        <span>Vogue</span>
        <h5 class="productName">${productName}</h5>
        <div class="star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <h4>€<span class="priceValue">${productPrice}</span></h4>
      </div>
      <i class="fas fa-shopping-cart cart addToCart" data-product-id="${id}"></i>
    </div>
  `;

  return div;
}

function getPerPage() {
  return window.innerWidth <= 768 ? 4 : 6;
}

function renderProductSlice(container, products) {
  container.innerHTML = "";
  products.forEach((product) => {
    container.appendChild(createProductCard(product));
  });
}

function renderPagination(paginationEl, currentPage, totalPages) {
  if (!paginationEl) return;

  if (totalPages <= 1) {
    paginationEl.innerHTML = "";
    paginationEl.classList.add("hidden");
    return;
  }

  paginationEl.classList.remove("hidden");

  let html = "";

  if (currentPage > 1) {
    html += `<a href="#" data-page="prev" aria-label="Previous page"><i class="fal fa-long-arrow-alt-left"></i></a>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    html += `<a href="#" data-page="${i}" class="${i === currentPage ? "active" : ""}">${i}</a>`;
  }

  if (currentPage < totalPages) {
    html += `<a href="#" data-page="next" aria-label="Next page"><i class="fal fa-long-arrow-alt-right"></i></a>`;
  }

  paginationEl.innerHTML = html;
}

function initPaginatedProducts(container, paginationEl) {
  let currentPage = 1;

  function updateView() {
    const perPage = getPerPage();
    const totalPages = Math.ceil(tshirts.length / perPage);

    if (currentPage > totalPages) {
      currentPage = totalPages || 1;
    }

    const start = (currentPage - 1) * perPage;
    const pageProducts = tshirts.slice(start, start + perPage);

    renderProductSlice(container, pageProducts);
    renderPagination(paginationEl, currentPage, totalPages);
  }

  if (paginationEl) {
    paginationEl.addEventListener("click", (e) => {
      const link = e.target.closest("a[data-page]");
      if (!link) return;

      e.preventDefault();

      const perPage = getPerPage();
      const totalPages = Math.ceil(tshirts.length / perPage);
      const page = link.dataset.page;

      if (page === "next") {
        currentPage = Math.min(currentPage + 1, totalPages);
      } else if (page === "prev") {
        currentPage = Math.max(currentPage - 1, 1);
      } else {
        currentPage = parseInt(page, 10);
      }

      updateView();
      container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateView, 150);
  });

  updateView();
}

document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".pro-container");
  const paginationEl = document.getElementById("pagination");
  const isHomePage = document.querySelector("#hero") !== null;

  if (!containers.length) return;

  if (paginationEl && containers[0]) {
    initPaginatedProducts(containers[0], paginationEl);

    if (isHomePage && containers[1]) {
      const newArrivals = tshirts.slice(-4);
      renderProductSlice(containers[1], newArrivals);
    } else {
      for (let i = 1; i < containers.length; i++) {
        renderProductSlice(containers[i], tshirts);
      }
    }
  } else {
    containers.forEach((container) => {
      renderProductSlice(container, tshirts);
    });
  }
});
