// show products
let container = document.getElementsByClassName("pro-container")[0];
let pDetails = document.getElementById("pDetails");

tshirts.forEach((element) => {
    const { id, productName, image, productPrice } = element;

    let div = document.createElement("div");
    div.classList.add("pro");
    div.innerHTML = ` 
    <div id="${id}">
    <img src="${image}" alt="product" />

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
    <i class="fas fa-shopping-cart cart addToCart"
        data-product-id="${id}"></i>
        </div>
    `;

    container.appendChild(div);
});

pDetails.innerHTML= `

<h2 id="${productName}"></h2>
<p>Womans's Fashion T-Shirt</p>
<h2 id="productPrice">${productPrice}</h2>
<select>
  <option>Select size</option>
  <option>XSmall</option>
  <option>Small</option>
  <option>Medium</option>
  <option>Large</option>
</select>
<input type="number" value="${id}" />
<button  class="btn" data-product-id="">Add to Cart</button>

<h4>Product Details</h4>
<span
  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
  cumque impedit fugiat voluptates facilis dicta ut incidunt aspernatur
  Voluptas libero deserunt doloribus voluptatem eum eius quae obcaecati
  cupiditate vel similique Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Aliquid cumque impedit fugiat voluptates facilis
  dicta ut incidunt aspernatur Voluptas libero deserunt doloribus
  voluptatem eum eius quae obcaecati cupiditate vel similique
</span>

`;
