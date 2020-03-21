const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateNumber = function () {
  number.innerText = count;
}

function handlePlus() {
  count = count + 1;
  updateNumber();
}

function handleMinus() {
  count = count - 1;
  updateNumber();
}

plus.addEventListener("click", handlePlus, false);
minus.addEventListener("click", handleMinus, false);