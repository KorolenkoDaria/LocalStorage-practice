import { createMarkup } from "./templates/templateCheckout.js";

const refs = {
    container: document.querySelector(".js-list"),
    totalPrice: document.querySelector(".js-total-price"),
    clearCart: document.querySelector(".clear-cart-btn"),
};

const PRODUCT_LS_KEY = 'checkout';

const preservedProduct = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
console.log(preservedProduct);
if (preservedProduct.length) {
    const totalCost = preservedProduct.reduce((acc, { qty, price }) => acc + qty * price, 0);
    console.log(totalCost);
    refs.totalPrice.textContent = `Total price: ${totalCost}`;
    refs.container.insertAdjacentHTML("afterbegin", createMarkup(preservedProduct));
    refs.clearCart.hidden = false;
    refs.clearCart.addEventListener("click", handlerClearBasket)
} else { 
    refs.totalPrice.textContent = "Your cart is empty!"
}

function handlerClearBasket() {
    localStorage.removeItem(PRODUCT_LS_KEY);
    window.location.href = "./index.html";
}

console.log(preservedProduct);