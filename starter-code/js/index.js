// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const subtotal = price * quantity;
  product.querySelector(".subtotal span").innerText = subtotal;
  return subtotal;
}

function calculateAll() {

  // ITERATION 2
  let total = 0;
  const products = document.querySelectorAll(".product");
  products.forEach((product) => (total += updateSubtotal(product)));

  // ITERATION 3
  document.querySelector("#total-value span").innerText = total.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.parentNode.removeChild(
    target.parentNode.parentNode
  );
}

// ITERATION 5

function createProduct() {
  const name = document.getElementById("productName").value;
  const price = Number(document.getElementById("productPrice").value).toFixed(
    2
  );

  const htmlElement = `<tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>`;
  document.querySelector("tbody").innerHTML += htmlElement;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach((btn) => btn.addEventListener("click", removeProduct));

  const createBtn = document.getElementById("create");
  createBtn.addEventListener("click", createProduct);
});
