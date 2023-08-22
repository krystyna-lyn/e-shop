const tshirts = [
  {
      id: "1",
      productName: `T-Shirt white vogue`,
      image: "img/pr1.jpg",
      productPrice: 100
  },
  {
      id: "2",
      productName: `T-Shirt black`,
      image: "img/pr2.jpg",
      productPrice: 90
  },
  {
      id: "3",
      productName: `Top white`,
      image: "img/pr3.jpg",
      productPrice: 120
  },
  {
      id: "4",
      productName: `T-Shirt white`,
      image: "img/pr4.jpg",
      productPrice: 150
  },
  {
      id: "5",
      productName: `T-Shirt whatever`,
      image: "img/pr5.jpg",
      productPrice: 100
  },
  {
      id: "6",
      productName: `T-Shirt animals`,
      image: "img/pr6.jpg",
      productPrice: 65
  },
  {
      id: "7",
      productName: `T-Shirt white`,
      image: "img/pr7.jpg",
      productPrice: 70
  },
  {
      id: "8",
      productName: `T-Shirt white transparent`,
      image: "img/pr8.jpg",
      productPrice: 80
  },
]

//include header

document.getElementById("header").innerHTML =
  `
    <a href="index.html"><img src="img/logo.png" class="logo" alt=logo"" /></a>
    
    <div>
   
      <ul id="navbar">
        <li><a href="index.html" class="link">Home</a></li>
        <li><a href="shop.html" class="link">Shop</a></li>
        <li><a href="blog.html" class="link">Blog</a></li>
        <li><a href="about.html" class="link">About</a></li>
        <li><a href="contact.html" class="link">Contact</a></li>

        <a href="#" id="close"><i class="far fa-times"></i></a>
       
      </ul>

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
              <i class="fas fa-times"></i>
            </button>
          </div>
          <ul id="buyItems">
            <h4 class="empty">Your shopping cart is empty</h4>
          </ul>
          <button class="btn checkout hidden">
            <a href="cart.html">Check out</a>
          </button>
        </div>

       

      <!-- searchbar -->

      <div class="searchbar">
        <form action="#">
          <input type="search" placeholder="Search product"/>
          <i class="fa fa-search" id="search-icon"></i>
          <div class="search_result">
           <a href="product.html" class="card">
                        <img src="#" class="img_search" alt="">
                        <div class="content">
                            
                            <div class="subtitle">
                                
                            </div>
                        </div>
                    </a>  
          </div>
        </form>
      </div>
    </div>

    <div id="mobile">
     
      <i id="bar" class="fas fa-outdent"></i>
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
      <p>@ 2023, Kryslyn - Ecommerce Template</p>
    </div>

    `;

//searchbar

let search_result = document.getElementsByClassName("search_result")[0];

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

let input = document.getElementsByTagName("input")[0];

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

input.addEventListener("mouseenter", () => {
  search_result.style.display = "block";
});

search_result.addEventListener("mouseenter", () => {
  search_result.style.display = "block";
});

search_result.addEventListener("mouseleave", () => {
  // Only hide the search results if the input is not focused
  if (!input.matches(":focus")) {
    search_result.style.display = "none";
  }
});





