let order = {};

// Update function to handle quantity
function addToOrder(itemName, itemPrice) {
    if (!order[itemName]) {
        order[itemName] = { price: itemPrice, quantity: 0 };
    }
    order[itemName].quantity += 1;
    updateOrderList();
    updateQuantityDisplay();
}

function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = ''; // Clear the existing list
    Object.keys(order).forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item} - $${order[item].price.toFixed(2)} x ${order[item].quantity}`;
        orderList.appendChild(li);
    });
}

function updateQuantityDisplay() {
    document.querySelectorAll('.menu-item').forEach(item => {
        const itemName = item.querySelector('.item-name').textContent;
        const quantityDisplay = item.querySelector('.quantity');
        if (order[itemName]) {
            quantityDisplay.textContent = order[itemName].quantity;
        } else {
            quantityDisplay.textContent = '0';
        }
    });
}

function placeOrder() {
    if (Object.keys(order).length === 0) {
        alert('Your order is empty.');
        return;
    }
    alert('Order placed successfully!');
    order = {}; // Clear the order after placing it
    updateOrderList(); // Update the UI
    updateQuantityDisplay(); // Reset the quantity display
}
