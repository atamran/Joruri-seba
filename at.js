const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const clearCartButton = document.getElementById("clear-cart");

let cart = [];
let totalPrice = 0;

// Add to Cart Function
function addToCart(product) {
  // Add product to array
  cart.push(product);

  // Update total price
  totalPrice += product.price;

  // Update UI
  renderCart();
}

// Remove From Cart Function
function removeFromCart(index) {
  totalPrice -= cart[index].price; // reduce total price
  cart.splice(index, 1); // remove product from array
  renderCart();
}

// Clear Cart
clearCartButton.addEventListener("click", () => {
  cart = [];
  totalPrice = 0;
  renderCart();
});

// Render Cart UI
function renderCart() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-white p-2 rounded shadow";

    div.innerHTML = `
      <div>
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm text-gray-600">${item.price} Tk</p>
      </div>
      <button onclick="removeFromCart(${index})" class="text-red-500 font-bold text-lg">❌</button>
    `;

    cartItemsContainer.appendChild(div);
  });

  totalPriceElement.textContent = totalPrice;
}

// Attach to all "Call" Buttons
document.querySelectorAll(".add-to-cart-btn").forEach(button => {
  button.addEventListener("click", () => {
    const product = {
      name: button.getAttribute("data-name"),
      price: parseInt(button.getAttribute("data-price"))
    };
    addToCart(product);
  });
});
