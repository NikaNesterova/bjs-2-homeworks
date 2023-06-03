"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
      return arr;
  } else if (discriminant === 0) {
      const root = -b / (2 * a);
      arr.push(root);
      return arr;
  } else {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      arr.push(root1, root2);

      return arr;
  }
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths, 10);

 
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  let monthlyPercent = percent / 100 / 12;

  let loanBody = amount - contribution;

  let monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Math.round(totalPayment * 100) / 100;

  return totalPayment;
}
