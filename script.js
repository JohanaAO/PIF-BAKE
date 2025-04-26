
let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push(item);
    total += price;
    updateCart();
}

function updateCart() {
    const list = document.getElementById('cartItems');
    list.innerHTML = '';
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        list.appendChild(li);
    });

    document.getElementById('totalPrice').textContent = `Total: ₱${total}`;
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('langkaCookiesButton').addEventListener('click', () => {
        addToCart('Langkacookies', 20);
    });

    document.getElementById('putoSekoButton').addEventListener('click', () => {
        addToCart('Puto Seko with Cheese', 30);
    });

    document.getElementById('langkabrowniesButton').addEventListener('click', () => {
        addToCart('Langkabrownies with Langka Jam', 30);
    });

    document.getElementById('clearCartButton').addEventListener('click', clearCart);
});
