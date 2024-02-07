function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalEarning = 0;
  for (let i of arr) {
    if (i >= 3000) {
      totalEarning += i * 0.8;
    }
    else {
      totalEarning += i;
    }
  }

  let totalSavings = totalEarning - livingCost;

  if (totalSavings >= 0) {
    return totalSavings;
  } else {
    return `earn more`;
  }
}


const ara = [1000, 2000, 3000];
const ara2 = [1000, 2000, 2500];
const ara3 = [900, 2700, 3400];
const ara4 = 100;

const num = 5400;
const num2 = 5000;
const num3 = 10000;
const num4 = [900, 2700, 3400];

console.log(monthlySavings(ara, num));
console.log(monthlySavings(ara2, num2));
console.log(monthlySavings(ara3, num3));
console.log(monthlySavings(ara4, num4));