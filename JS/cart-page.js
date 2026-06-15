const parentElement = document.querySelector("#products");
const cartSumPrice = document.querySelectorAll(".totalPrice");
const deleteAll = document.querySelector(".deleteAll");
const cartEmptyPage = document.querySelector("#cart-empty-page");
const cartTableWrap = document.querySelector(".cart-table-wrap");
const cartAddSection = document.querySelector("#cart-add");

let productsInCart = JSON.parse(localStorage.getItem("shoppingCart"));
if (!productsInCart) {
  productsInCart = [];
}

const countTheSumPrice = function () {
  let sumPrice = 0;
  productsInCart.forEach((product) => {
    sumPrice += product.price;
  });
  return sumPrice;
};

const updateShoppingCartHTML = function () {
  localStorage.setItem("shoppingCart", JSON.stringify(productsInCart));
  const total = countTheSumPrice();
  const isEmpty = productsInCart.length === 0;

  if (cartEmptyPage) cartEmptyPage.classList.toggle("hidden", !isEmpty);
  if (cartTableWrap) cartTableWrap.classList.toggle("hidden", isEmpty);
  if (cartAddSection) cartAddSection.classList.toggle("hidden", isEmpty);
  if (deleteAll) deleteAll.classList.toggle("hidden", isEmpty);

  if (!isEmpty && parentElement) {
    const result = productsInCart.map((product) => {
      return `
        <tr class="cart-row">
          <td data-label="">
            <img src="${product.image}" alt="${product.name}" />
          </td>
          <td data-label="Product" class="cart-product-name">${product.name}</td>
          <td data-label="Price" class="cart-price">€${product.basePrice}</td>
          <td data-label="Quantity">
            <div class="cart-qty-control">
              <button type="button" class="qty-btn button-minus" data-id="${product.id}" aria-label="Decrease">−</button>
              <span class="countOfProduct">${product.count}</span>
              <button type="button" class="qty-btn button-plus" data-id="${product.id}" aria-label="Increase">+</button>
            </div>
          </td>
          <td data-label="Subtotal" class="cart-subtotal">€${product.price}</td>
        </tr>`;
    });

    parentElement.innerHTML = result.join("");
  }

  cartSumPrice.forEach((el) => {
    el.innerHTML = "€" + total;
  });
};

if (parentElement) {
  parentElement.addEventListener("click", (e) => {
    const isPlusButton = e.target.classList.contains("button-plus");
    const isMinusButton = e.target.classList.contains("button-minus");

    if (isPlusButton || isMinusButton) {
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
}

if (deleteAll) {
  deleteAll.addEventListener("click", () => {
    localStorage.removeItem("shoppingCart");
    productsInCart = [];
    updateShoppingCartHTML();
  });
}

updateShoppingCartHTML();
