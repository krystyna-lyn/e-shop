//include header

document.getElementById("header").innerHTML =
	`
    <a href=""><img src="#" class="logo" alt="" /></a>

    <div>
      <ul id="navbar">
        <li><a href="index.html">Home</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>

        <!--Shopping cart-->
        <div class="shopping-cart">
          <div class="sum-prices">
            <!--Shopping cart logo-->
            <i class="far fa-shopping-bag shoppingCartButton"></i>
            <!--The total prices of products in the shopping cart -->
            <h6 id="sum-prices"></h6>
          </div>
        </div>

        <div class="producstOnCart hide">
          <div class="overlay"></div>
          <div class="top">
            <button id="closeButton">
              <i class="fas fa-times-circle"></i>
            </button>
            <h3>Cart</h3>
          </div>
          <ul id="buyItems">
            <h4 class="empty">Your shopping cart is empty</h4>
          </ul>
          <button class="btn checkout hidden">
            <a href="cart.html">Check out</a>
          </button>
        </div>

        <a href="#" id="close"><i class="far fa-times"></i></a>
      </ul>

      <!-- searchbar -->

      <div class="searchbar">
        <form action="#">
          <input type="search" placeholder="Search product" />
          <i class="fa fa-search" id="search-icon"></i>
        </form>
      </div>
    </div>
    <div id="mobile">
      <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
      <i id="bar" class="fas fa-outdent"></i>
    </div>

    `;

    document.getElementById("footer").innerHTML =
	`
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
      <p>@ 2023, Kryslyn - Ecommerce Template</p>
    </div>

    `;

