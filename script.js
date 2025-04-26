
let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateOrderSummary();
}

function updateOrderSummary() {
    const summaryDiv = document.getElementById('order-summary');
    const orderTextarea = document.getElementById('order');

    if (cart.length === 0) {
        summaryDiv.innerHTML = '<h3>Order Summary</h3><p>No orders yet.</p>';
        orderTextarea.value = '';
    } else {
        const orderList = cart.map(item => `${item.name} (₱${item.price})`).join('\n');
        summaryDiv.innerHTML = `<h3>Order Summary</h3><p>${orderList.replace(/\n/g, "<br>")}</p><button id="clearOrder" onclick="clearCart()">Clear Order</button>`;
        orderTextarea.value = orderList;
    }
}

function clearCart() {
    cart = [];
    updateOrderSummary();
}
