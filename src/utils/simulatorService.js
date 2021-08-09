import store from "../store";

const moment = require("moment");
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

setInterval(() => {
  const storeStates = store.getState();
  let newTickerArray = [...storeStates.tickerState];

  newTickerArray = newTickerArray.map((ticker) => {
    ticker[1] = getNewPrice(parseFloat(ticker[1]));
    ticker[3] = moment().format("YYYY-MM-DD HH:mm:ss");
    return ticker;
  });
  store.dispatch({ type: "saveTicker", data: newTickerArray });
}, 5000);
