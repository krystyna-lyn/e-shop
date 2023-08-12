const tshirts = [
    {
        id: "1",
        productName: `T-Shirt 1`,
        image: "img/pr1.jpg",
        productPrice: 100
    },
    {
        id: "2",
        productName: `T-Shirt 2`,
        image: "img/pr2.jpg",
        productPrice: 90
    },
    {
        id: "3",
        productName: `T-Shirt 3`,
        image: "img/pr3.jpg",
        productPrice: 120
    },
    {
        id: "4",
        productName: `T-Shirt 4`,
        image: "img/pr4.jpg",
        productPrice: 150
    },
    {
        id: "5",
        productName: `T-Shirt 5`,
        image: "img/pr5.jpg",
        productPrice: 100
    },
    {
        id: "6",
        productName: `T-Shirt 6`,
        image: "img/pr6.jpg",
        productPrice: 65
    },
    {
        id: "7",
        productName: `T-Shirt 7`,
        image: "img/pr7.jpg",
        productPrice: 70
    },
    {
        id: "8",
        productName: `T-Shirt 8`,
        image: "img/pr8.jpg",
        productPrice: 80
    },
]

// show products
let container = document.getElementsByClassName("pro-container")[0];
console.log(container)

tshirts.forEach((element) => {
    const { id, productName, image, productPrice } = element;

    let div = document.createElement("div");
    div.classList.add("pro");
    div.innerHTML = ` 
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
    `;
    container.appendChild(div);
});

