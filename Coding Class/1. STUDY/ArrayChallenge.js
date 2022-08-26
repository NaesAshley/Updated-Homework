const billTotal = 430;
const tipPercent =
  billTotal <= 300 && billTotal >= 50 ? billTotal * 0.2 : billTotal * 0.15;

console.log(
  `the total bill was ${billTotal}, the tip is ${tipPercent} and your total is ${
    tipPercent + billTotal
  }`
);

function calcTip = billTotal 