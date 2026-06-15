

//include header

document.getElementById("header").innerHTML =
  `
    <div class="header-inner">
      <a href="index.html" class="logo-link">
        <img src="img/logo.png" class="logo" alt="Kryslyn logo" />
      </a>

      <nav id="navbar" aria-label="Main navigation">
        <button type="button" id="close" class="mobile-menu-close" aria-label="Close menu">
          <i class="far fa-times"></i>
        </button>
        <ul class="nav-links">
          <li><a href="index.html" class="link">Home</a></li>
          <li><a href="shop.html" class="link">Shop</a></li>
          <li><a href="blog.html" class="link">Blog</a></li>
          <li><a href="about.html" class="link">About</a></li>
          <li><a href="contact.html" class="link">Contact</a></li>
        </ul>
      </nav>

      <div class="header-actions">
        <button
          type="button"
          class="header-icon-btn search-toggle"
          id="search-toggle"
          aria-label="Open search"
          aria-expanded="false"
        >
          <i class="fa fa-search"></i>
        </button>

        <div class="searchbar" id="searchbar">
          <form action="#">
            <input type="search" id="search-input" placeholder="Search products..." aria-label="Search products" />
            <button type="button" class="header-icon-btn search-close" id="search-close" aria-label="Close search">
              <i class="fa fa-times"></i>
            </button>
            <div class="search_result">
              <a href="product.html" class="card">
                <img src="#" class="img_search" alt="">
                <div class="content">
                  <div class="subtitle"></div>
                </div>
              </a>
            </div>
          </form>
        </div>

        <div class="shopping-cart">
          <button type="button" class="cart-trigger sum-prices" aria-label="Open cart">
            <i class="far fa-shopping-bag shoppingCartButton"></i>
            <span id="sum-prices" class="cart-total-badge"></span>
          </button>
        </div>

        <button type="button" class="header-icon-btn menu-toggle" id="bar" aria-label="Open menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>

    <div class="menu-backdrop hide" id="menu-backdrop" aria-hidden="true"></div>

    <div class="cart-overlay hide" id="cart-overlay"></div>

    <div class="producstOnCart hide">
      <div class="cart-drawer-header">
        <h3>Your cart</h3>
        <span class="cart-item-count" id="cart-item-count"></span>
        <button type="button" id="closeButton" aria-label="Close cart">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <ul id="buyItems">
        <li class="cart-empty">
          <i class="far fa-shopping-bag"></i>
          <p>Your cart is empty</p>
          <a href="shop.html" class="btn">Browse products</a>
        </li>
      </ul>
      <div class="cart-drawer-footer">
        <div class="cart-drawer-subtotal">
          <span>Subtotal</span>
          <strong id="cart-drawer-total">€0</strong>
        </div>
        <button class="btn checkout hidden checkout-full">
          <a href="cart.html">View cart & checkout</a>
        </button>
      </div>
    </div>
    `;

document.getElementById("footer").innerHTML = `
    <div class="col">
      <h4>Contact</h4>
      <p><strong>Adress: </strong> Bergstraße 4, Berlin</p>
      <p><strong>Phone: </strong> (+49) 16246578</p>
      <p><strong>Hours: </strong> 10:00 - 18:00 Mon - Fri</p>

      <div class="follow">
        <h4>Follow us</h4>
        <div class="icon">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-fpinterest-p"></i>
          <i class="fab fa-youtube"></i>
        </div>
      </div>
    </div>

    <div class="col">
      <h4>About</h4>
      <a href="#">About us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact us</a>
    </div>
    <div class="col">
      <h4>My Account</h4>
      <a href="#">Sign us</a>
      <a href="#">View cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>

    <div class="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div class="row"></div>
      <p>Secured Payment Gateways</p>
      <p class="pay_icons">
        <i class="fab fa-cc-mastercard"></i>
        <i class="fab fa-cc-paypal"></i>
        <i class="fab fa-cc-visa"></i>
      </p>
    </div>

    <div class="copyright">
      <p>&copy; 2026, Kryslyn Modern Ecommerce</p>
    </div>

    `;

//searchbar

let search_result = document.getElementsByClassName("search_result")[0];

if (typeof tshirts !== "undefined" && search_result) {
tshirts.forEach((element) => {

  const { id, productName, image, productPrice } = element;

  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "product.html?id=" + id;

  card.innerHTML = `
        <img src="${image}" class="img_search" alt="">
        <div class="content">${productName}
            <div class="price">€${productPrice}</div>
        </div>
                    `;

  search_result.appendChild(card);
});
}

let input = document.getElementById("search-input");

if (input && search_result) {
input.addEventListener("keyup", () => {
  let input_value = input.value.toLocaleLowerCase();
  let items = search_result.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];

    let text_value = as.textContent || as.innerHTML;

    let div = document.getElementById(`${index + 1}`);
    console.log(div)

    if (text_value.toLocaleLowerCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }

    if (input.value == 0) {
      search_result.style.display = "none";

    } else {
      search_result.style.display = "";

    }
  }
});

function toggleSearchResultsVisibility() {
  search_result.style.display = "none";
}

input.addEventListener("focus", () => {
  if (input.value.length > 0) {
    search_result.style.display = "block";
  }
});

input.addEventListener("mouseenter", () => {
  search_result.style.display = "block";
});

search_result.addEventListener("mouseenter", () => {
  search_result.style.display = "block";
});

search_result.addEventListener("mouseleave", () => {
  if (!input.matches(":focus")) {
    search_result.style.display = "none";
  }
});
}


