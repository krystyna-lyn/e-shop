// close, open shoppingcart 
const closeShopCart = document.querySelector('#closeButton');

const overlay = document.querySelector('.overlay');
closeShopCart.addEventListener('click', closeCart);
overlay.addEventListener('click', closeCart);


function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling');
});

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');



if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

