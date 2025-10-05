// input =  [7,1,5,3,6,4]
// output = (6-1) => 5

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];


// This solution I made on my own.

let minPurchaseValue = prices[0];
let profit = 0;

const getMaxProfit = (prices) => {
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - minPurchaseValue < 0) {
      minPurchaseValue = prices[i];
    } else {
      if (profit < prices[i] - minPurchaseValue) {
        profit = prices[i] - minPurchaseValue;
      }
    }
  }
  return profit;
};

const maxProfit = getMaxProfit(prices);

console.log(maxProfit);
