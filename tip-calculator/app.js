const value = document.querySelector('#value');
const percentageDOM = document.querySelector('#percentage');
percentageDOM.textContent = value.value;
value.addEventListener("input", (event) => {
  percentageDOM.textContent = event.target.value;
});

const billAmount = document.getElementById("moneyinput");
const tipPercentage = document.getElementById("value");
var resultDOM = document.getElementById("result");
var tipAmount = billAmount * (tipPercentage / 100);
var totalAmount = billAmount + tipAmount;

billAmount.addEventListener("input", calculateTip)
tipPercentage.addEventListener("input", calculateTip);

function calculateTip() {
  var bill = parseFloat(billAmount.value);
  var tip = parseFloat(tipPercentage.value);

  if (isNaN(bill)) {
    bill = 0;
  }
  
  var tipAmount = bill * (tip / 100);
  var totalAmount = bill + tipAmount;
  
  resultDOM.textContent = totalAmount.toFixed(2);

}



