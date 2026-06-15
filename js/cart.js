let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}

const parentElement = document.querySelector("#buyItems");
const cartSumPrice = document.querySelector("#sum-prices");
const cartDrawerTotal = document.querySelector("#cart-drawer-total");
const cartItemCount = document.querySelector("#cart-item-count");

const countTheSumPrice = function () {
  let sumPrice = 0;
  productsInCart.forEach((product) => {
    sumPrice += product.price;
  });
  return sumPrice;
};

const updateCartTotals = function () {
  const total = countTheSumPrice();
  const formatted = total > 0 ? "€" + total : "";

  if (cartSumPrice) {
    cartSumPrice.innerHTML = formatted;
  }
  if (cartDrawerTotal) {
    cartDrawerTotal.textContent = formatted || "€0";
  }
  if (cartItemCount) {
    const totalItems = productsInCart.reduce((sum, p) => sum + p.count, 0);
    cartItemCount.textContent = totalItems > 0 ? `${totalItems} item${totalItems !== 1 ? "s" : ""}` : "";
  }
};

const updateShoppingCartHTML = function () {
  if (!parentElement) return;

  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));

  const checkoutBtn = document.querySelector(".checkout");

  if (productsInCart.length > 0) {
    const result = productsInCart.map((product) => {
      return `
        <li class="buyItem">
          <img src="${product.image}" alt="${product.name}">
          <div class="buyItem-info">
            <h5>${product.name}</h5>
            <p class="buyItem-price">€${product.basePrice}</p>
            <div class="buyItem-qty">
              <button type="button" class="qty-btn button-minus" data-id="${product.id}" aria-label="Decrease quantity">−</button>
              <span class="countOfProduct">${product.count}</span>
              <button type="button" class="qty-btn button-plus" data-id="${product.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <p class="buyItem-subtotal">€${product.price}</p>
        </li>`;
    });

    parentElement.innerHTML = result.join("");
    if (checkoutBtn) checkoutBtn.classList.remove("hidden");
  } else {
    if (checkoutBtn) checkoutBtn.classList.add("hidden");
    parentElement.innerHTML =
      '<li class="cart-empty"><i class="far fa-shopping-bag"></i><p>Your cart is empty</p><a href="shop.html" class="btn">Browse products</a></li>';
  }

  updateCartTotals();
};

function updateProductsInCart(product, quantity = 1) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == product.id) {
      productsInCart[i].count += quantity;
      productsInCart[i].price =
        productsInCart[i].basePrice * productsInCart[i].count;
      return;
    }
  }
  product.count = quantity;
  product.price = product.basePrice * quantity;
  productsInCart.push(product);
}

function buildProductFromCard(pro) {
  const addBtn = pro.querySelector(".addToCart");
  return {
    name: pro.querySelector(".productName").textContent,
    image: pro.querySelector("img").src,
    id: addBtn.dataset.productId,
    count: 1,
    price: +pro.querySelector(".priceValue").textContent,
    basePrice: +pro.querySelector(".priceValue").textContent,
  };
}

function buildProductFromDetailBtn(btn, quantity) {
  return {
    name: btn.dataset.productName,
    image: btn.dataset.productImage,
    id: btn.dataset.productId,
    count: quantity,
    price: +btn.dataset.productPrice * quantity,
    basePrice: +btn.dataset.productPrice,
  };
}

function addToCart(product, quantity = 1) {
  updateProductsInCart(product, quantity);
  updateShoppingCartHTML();

  const cartPanel = document.querySelector(".producstOnCart");
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartPanel && cartPanel.classList.contains("hide")) {
    cartPanel.classList.remove("hide");
    cartOverlay?.classList.remove("hide");
    document.querySelector("body")?.classList.add("stopScrolling");
  }
}

document.addEventListener("click", (e) => {
  const gridCartBtn = e.target.closest(".addToCart");
  if (gridCartBtn) {
    e.preventDefault();
    e.stopPropagation();
    const pro = gridCartBtn.closest(".pro");
    if (pro) {
      addToCart(buildProductFromCard(pro));
    }
    return;
  }

  const detailBtn = e.target.closest("#addToCartBtn");
  if (detailBtn && detailBtn.dataset.productId) {
    e.preventDefault();
    const qtyInput = document.getElementById("productQty");
    const quantity = Math.max(1, parseInt(qtyInput?.value, 10) || 1);
    addToCart(buildProductFromDetailBtn(detailBtn, quantity), quantity);
    return;
  }

  const isPlusButton = e.target.classList.contains("button-plus");
  const isMinusButton = e.target.classList.contains("button-minus");

  if ((isPlusButton || isMinusButton) && parentElement?.contains(e.target)) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].id == e.target.dataset.id) {
        if (isPlusButton) {
          productsInCart[i].count += 1;
        } else if (isMinusButton) {
          productsInCart[i].count -= 1;
        }
        productsInCart[i].price =
          productsInCart[i].basePrice * productsInCart[i].count;
      }
      if (productsInCart[i].count <= 0) {
        productsInCart.splice(i, 1);
        i--;
      }
    }
    updateShoppingCartHTML();
  }
});

updateShoppingCartHTML();
