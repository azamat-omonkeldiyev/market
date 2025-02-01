

let cartRoot = document.querySelector("#cart-root");

function showCart() {
  let sum = 0;
  let a = localStorage.getItem("Product");
  let arr = JSON.parse(a);
  cartRoot.innerHTML = "";
  narx.innerHTML = "";
  arr.forEach((e) => {
    sum += Number(e.price);
  });
  narx.insertAdjacentHTML("beforeend", `<h1>Ummumiy summa : ${sum} so'm</h1>`);
  arr.forEach((e) => {
    cartRoot.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
            <img src="${e.rasm}" alt="">
            <h2>Mahsulot: ${e.name}</h2>
            <h3>Narxi: <del>${e.price}</del> so'm</h3>
            <h3>Chegirmada :${e.price - 9000.1} so'm</h3>
            <button onClick="remove('${e.id}')">Bekor qilish</button>
          </div>`
    );
  });
}

function removeFromCart(id) {
  let a = localStorage.getItem("Product");
  let arr = JSON.parse(a);
  arr = arr.filter((item) => item.id !== id);

  localStorage.setItem("Product", JSON.stringify(arr));

  showCart();
}

document.addEventListener("DOMContentLoaded", showCart);
