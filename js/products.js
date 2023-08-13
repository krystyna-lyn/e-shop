
// show products
let container = document.getElementsByClassName("pro-container")[0];

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

