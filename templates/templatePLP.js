function createMarkup(arr) {
    return arr.map(({description, id, img, name, price}) =>` <li data-id="${id}" class="product-card js-product">
    <img class="product-img" src="${img}" alt="${name}">
    <h2 class="product-title"></h2>
    <p class="product-description">${description}</p>
    <p class="product-price">${price}</p>
    <button  class="product-add-btn js-add">Add to basket</button>
</li>` ).join('');
    
}

export { createMarkup };    