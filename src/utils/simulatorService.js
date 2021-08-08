const moment = require("moment");
const initialArray = [
  ["AALP", "120", "-", "now"],
  ["GOOGL", "2550", "-", "now"],
  ["TSLA", "699.10", "-", "now"],
  ["FB", "363.51", "-", "now"],
  ["BABA", "196.39", "-", "now"],
  ["NVDA", "203.66", "-", "now"],
  ["PYPL", "279.54", "-", "now"],
  ["DIS", "177.13", "-", "now"],
  ["NKE", "172.8", "-", "now"],
  ["INTC", "53.922550", "-", "now"],
];
const getNewPrice = (oldPrice) => {
  let newPrice;
  let random = Math.random();
  if (random > 0.5) {
    newPrice = oldPrice + (oldPrice * Math.random()) / 100;
  } else {
    newPrice = oldPrice - (oldPrice * Math.random()) / 100;
  }
  return parseFloat(newPrice).toFixed(2);
};

export const simulatorService = (props = initialArray) => {
  let newTickerArray = [...initialArray];

  newTickerArray = newTickerArray.map((ticker) => {
    ticker[1] = getNewPrice(parseFloat(ticker[1]));
    ticker[3] = moment().format("YYYY-MM-DD HH:mm:ss");
    return ticker;
  });
  console.log("newTickerArray :", newTickerArray);
  return newTickerArray;
};
