// MODI Cart Persistence Logic
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Select all Add to Cart buttons
    const addButtons = document.querySelectorAll('.add-btn');

    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price')
            };
            
            saveToCart(product);
            updateCartCount();
        });
    });
});

function saveToCart(product) {
    let cart = JSON.parse(localStorage.getItem('modiCart')) || [];
    cart.push(product);
    localStorage.setItem('modiCart', JSON.stringify(cart));
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('modiCart')) || [];
    const cartLinks = document.querySelectorAll('#cart-link'); // Updates all cart links on page
    cartLinks.forEach(link => {
        link.textContent = `Cart (${cart.length})`;
    });
}