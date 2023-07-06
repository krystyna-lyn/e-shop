let productsInCart = [];

const parentElement = document.querySelector('#product');
const cartSumPrice = document.querySelector('#sum');
const products = document.querySelectorAll('.pro');

const countSumPrice = function (){
    let sumPrice = 0;
    productsInCart.forEach(product =>{
        sumPrice += product.price;
    });
    return sumPrice;
}

const updateShoppingCartHTML = function () {
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
            return `
            <tbody>
            <tr>
              <td><a href="#" class="far fa-times-circle"></a></td>
              <td><img src="${product.image}" alt="" /></td>
              <td>${product.name}</td>
              <td>€${product.price}</td>
              <td>
              <button class="btn-minus" data-id="${product.id}">-</button>
              <span class="countOfProduct">1</span>
              <button class="btn-minus" data-id="${product.id}">+</button>
              </td>
              <td>${product.basePrice}</td>
            </tr>
            </tbody>
            `;
        })
        //parentElement.innerHTML = result.join('');
       //document.querySelector('.table').classList.remove('hidden');
        cartSumPrice.innerHTML = "€" + countSumPrice();
    }
    else {
        document.querySelector('.table').classList.add('hidden');
        parentElement.innerHTML = '<h4 class="empty"> Your shopping cart is empty </h4>';
        cartSumPrice.innerHTML = "";

    }
}






function updateProductsInCart(product) {
    for (let i = 0; i < productsInCart.length; i++) {
        if (productsInCart[i].id == product.id) {
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}

products.forEach(product => {
    product.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart')) {
            const productId = e.target.dataset.productId;
            const productName = product.querySelector('#productName').innerHTML;
            const productPrice = product.querySelector('.priceValue').innerHTML;
            const productImg = product.querySelector('img').src;
            let productTocart = {
                name: productName,
                image: productImg,
                id: productId,
                count: 1,
                price: +productPrice,
                basePrice: +productPrice
            }
            updateProductsInCart(productTocart);
            updateShoppingCartHTML();
        }
    })
})