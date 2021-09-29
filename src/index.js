import "./styles.css";

var ini = document.getElementById("ini");
var amt = document.getElementById("amt");
var curr = document.getElementById("curr");
var enter = document.getElementById("enter");
var message = document.getElementById("message");

enter.addEventListener("click", handleEnter);

function handleEnter() {
  let init = Number(ini.value);
  let num = Number(amt.value);
  let cur = Number(curr.value);
  let profit = (cur - init) * num;
  if (profit > 0) {
    let percent = (profit / init) * 100;
    message.innerHTML =
      "profit of " + profit + "! and the percent is " + percent + "%";
  }
  if (profit === 0) {
    message.innerHTML = "no loss and no gain";
  }
  if (profit < 0) {
    profit = -1 * profit;
    let percent = (profit / init) * 100;
    message.innerHTML =
      "loss of " + profit + " and the percent is " + percent + "%";
  }
}
