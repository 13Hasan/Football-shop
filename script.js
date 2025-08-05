document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  document.querySelectorAll(".shirt").forEach((shirt) => {
    const name = shirt.getAttribute("data-name").toLowerCase();
    const team = shirt.getAttribute("data-team").toLowerCase();
    shirt.style.display = name.includes(value) || team.includes(value) ? "block" : "none";
  });
});

let cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
  totalPrice.textContent = `Total: $${total}`;
}

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Order received! Thank you.");
  cart = [];
  updateCart();
  this.reset();
});
