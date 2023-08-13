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

// show products
let container = document.getElementsByClassName("pro-container")[0];
console.log(container)

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

//searchbar

let search_result = document.getElementsByClassName("search_result")[0];

tshirts.forEach((element) => {

    const { id, productName, image, productPrice } = element;

    let card = document.createElement("a");
    card.classList.add("card");
    card.href = "#" + id;

    card.innerHTML = `
  <img src="${image}" class="img_search" alt="">
    <div class="content">${productName}
        <div class="price">${productPrice}
        </div>
    </div>
                        `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];
console.log(input)

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
      
            div.classList.add("border");
          } else {
            items[index].style.display = "none";
            div.classList.remove("border");
          }
      
          if (input.value == 0) {
            search_result.style.display = "none";
            div.classList.remove("border");
          } else {
            search_result.style.display = "";
           
          }
        }
      });
      
