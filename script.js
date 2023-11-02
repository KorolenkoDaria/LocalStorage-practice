
import { createMarkup } from "./templates/templatePLP.js";
import { products } from './products.js';

const refs = {
    container: document.querySelector(".js-list"),
}
const PRODUCT_LS_KEY = 'checkout';

refs.container.insertAdjacentHTML("afterbegin", createMarkup(products));

refs.container.addEventListener("click", handlerAdd);

function handlerAdd(e) {

    if (!e.target.classList.contains('js-add')) {
        return;
    }

    const product = e.target.closest('.js-product')
    const productId = Number(product.dataset.id);
    const currentProduct = products.find(({ id }) => id === productId);
    const preservedProduct = JSON.parse(localStorage.getItem(PRODUCT_LS_KEY)) ?? [];
    const idx = preservedProduct.findIndex(({ id }) => id === productId);
    if (idx !== -1) {
        preservedProduct[idx].qty += 1;
    } else {
        currentProduct.qty = 1;
        preservedProduct.push(currentProduct);
     }
     
    localStorage.setItem(PRODUCT_LS_KEY, JSON.stringify(preservedProduct));
};
    