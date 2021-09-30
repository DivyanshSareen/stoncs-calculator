import "./styles.css";

// getting all DOM elements
var ini = document.getElementById("ini");
var amt = document.getElementById("amt");
var curr = document.getElementById("curr");
var enter = document.getElementById("enter");
var message = document.getElementById("message");

enter.addEventListener("click", handleEnter);

// callback function for "click" event
function handleEnter() {
  //  storing entered values as numbers
  let init = Number(ini.value);
  let num = Number(amt.value);
  let cur = Number(curr.value);
  // calculating profit(-ve or +ve)
  let profit = (cur - init) * num;
  // if there is a profit, print profit and also calculate % profit
  if (profit > 0) {
    let percent = (profit / init) * 100;
    message.innerHTML =
      "profit of " + profit + "! and the percent is " + percent + "%";
  }
  // when there is no profit or loss
  if (profit === 0) {
    message.innerHTML = "no loss and no gain";
  }
  // calculate loss and % loss
  if (profit < 0) {
    profit = -1 * profit;
    let percent = (profit / init) * 100;
    message.innerHTML =
      "loss of " + profit + " and the percent is " + percent + "%";
  }
}
