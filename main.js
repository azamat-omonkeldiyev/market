let a = localStorage.getItem("Product");
if (!a) {
  localStorage.setItem("Product", JSON.stringify([]));
}

let root = document.querySelector("#root");
let iName = document.querySelector("#name");
let iPrice = document.querySelector("#price");
let iImg = document.querySelector("#img");
let addBtn = document.querySelector("#add");
let savat = document.querySelector("#savat");

function showData(arr) {
  arr.forEach((e) => {
    root.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
          <img src="${e.rasm}" alt="">
          <h2>Mahsulot: ${e.name}</h2>
          <h3>Narxi: <del>${e.price}</del> so'm</h3>
          <h3>Chegirmada :${e.price - 9000.1} so'm</h3>
          <button onClick= buyProduct(${e.id})>BUY</button>
        </div>`
    );
  });
}

const api = axios.create({
  baseURL: "https://679a13d2747b09cdcccd956a.mockapi.io",
});
api.get("/products").then((res) => showData(res.data));

 async function createProduct() {
  if (!iImg.value || !iName.value || !iPrice.value) {
    confirm("Hamma maydonlarni to'ldiring");
    return;
  }
    await api.post("/products", {
      name: iName.value,
      price: iPrice.value,
      rasm: iImg.value,
    });
    location.reload();
}

async function updateProduct(son) {
  if (!iImg.value || !iName.value || !iPrice.value) {
    confirm("Hamma maydonlarni to'ldiring");
    return;
  }
  await api.put(`/products/${son}`, {
      name: iName.value,
      price: iPrice.value,
      rasm: iImg.value,
    })
    location.reload();
}

async function deleteProduct(son) {
      await api.delete(`/products/${son}`);
      location.reload()
}

async function buyProduct(id) {

    let response = await api.get(`/products/${id}`);
    let product = response.data;

    let a = localStorage.getItem("Product");
    let arr = JSON.parse(a);

    arr.push(product);

    localStorage.setItem("Product", JSON.stringify(arr));
}

addBtn.addEventListener("click", createProduct);
