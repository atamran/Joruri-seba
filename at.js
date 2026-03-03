//initial counts
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// navbar
const heartCountEl = document.getElementById("heart-count");
const coinCountEl = document.getElementById("coin-count");
const copyCountEl = document.getElementById("copy-count");

//  coin
coinCountEl.childNodes[0].nodeValue = coinCount;


document.querySelectorAll(".heart-btn").forEach(heart => {
  heart.addEventListener("click", () => {
    heartCount++;
    heartCountEl.childNodes[0].nodeValue = heartCount;
  });
});


document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const number = card.querySelector("p:nth-of-type(2)").innerText;

    navigator.clipboard.writeText(number);
    alert("Copied: " + number);

    copyCount++;
    copyCountEl.innerText = copyCount;
  });
});

//call 
const historyBox = document.getElementById("cart-items");

document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {

    if (coinCount < 20) {
      alert("❌ Not enough coins");
      return;
    }

    const card = btn.closest(".card");
    const name = card.querySelector("p").innerText;
    const number = card.querySelector("p:nth-of-type(2)").innerText;

    alert(`📞 Calling ${name} (${number})`);

    coinCount -= 20;
    coinCountEl.childNodes[0].nodeValue = coinCount;

    const time = new Date().toLocaleTimeString();

    const div = document.createElement("div");
    div.className = "bg-white p-2  rounded shadow";

    div.innerHTML = `
  <div class="flex justify-between items-center">
    <div>
      <p class="font-semibold">${name}</p>
      <p class="text-sm text-gray-600">${number}</p>
    </div>
    <p class="text-sm text-gray-500">${time}</p>
  </div>
`;

    historyBox.appendChild(div);
  });
});

//clear history
document.getElementById("clear-history").addEventListener("click", () => {
  historyBox.innerHTML = "";
});