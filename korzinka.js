
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showCart() {
    let cartRoot = document.querySelector("#cart-root");
    cartRoot.innerHTML = "";
    cart.forEach((e, index) => {
        cartRoot.insertAdjacentHTML("beforeend",
            `<div class="cart-item">
                <img src="${e.image}" alt="">
                <h1>${e.name}</h1>
                <p>${e.price}</p>
                <p>${e.color}</p>
                <button onClick="removeFromCart(${index})">O'chirish</button>
            </div>`
        );
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

document.addEventListener("DOMContentLoaded", showCart);
