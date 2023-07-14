//let productsInCart = [];
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productsInCart){
	productsInCart = [];
}

const parentElement = document.querySelector('.pro-container');
const cartSumPrice = document.querySelector('.sum-prices');
const products = document.querySelectorAll('.pro');

const countSumPrice = function () {
    let sumPrice = 0;
    productsInCart.forEach(product => {
        sumPrice += product.price;
    });
    return sumPrice;
}

const updateShoppingCartHTML = function () {
    localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));
    if (productsInCart.length > 0) {
        let result = productsInCart.map(product => {
            return `
            <li class="buyItem">
            <img src="${product.image}">
            <div>
                <h5>${product.name}</h5>
                <h6>$${product.price}</h6>
                <div>
                    <button class="button-minus" data-id=${product.id}>-</button>
                    <span class="countOfProduct">${product.count}</span>
                    <button class="button-plus" data-id=${product.id}>+</button>
                </div>
            </div>
        </li>
        `;
        })
        parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = '€' + countTheSumPrice();
    }
    else {
        document.querySelector('.checkout').classList.add('hidden');
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

products.forEach(item => {   // 1
	item.addEventListener('click', (e) => {
        console.log(item)
		if (e.target.classList.contains('cart')) {
			const productID = e.target.dataset.productId;
			const productName = item.querySelector('.productName').innerHTML;
            console.log(productName)
			const productPrice = item.querySelector('.priceValue').innerHTML;
			const productImage = item.querySelector('img').src;
			let product = {
				name: productName,
				image: productImage,
				id: productID,
				count: 1,
				price: +productPrice,
				basePrice: +productPrice,
			}
			updateProductsInCart(product);
			updateShoppingCartHTML();
		}
	});
});