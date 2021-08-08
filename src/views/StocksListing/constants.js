const moment = require("moment");

export const metadata = {
  table: {
    colDefs: [
      {
        label: "Name",
        name: "name",
      },
      {
        label: "Price (USD)",
        name: "price",
      },
      {
        label: "Quantity",
        name: "quantity",
      },
      {
        label: "Time",
        name: "time",
      },
    ],

    // colFields: [
    //   ["AALP", "120", "-", "now"],
    //   ["GOOGL", "2550", "-", "now"],
    //   ["TSLA", "699.10", "-", "now"],
    //   ["FB", "363.51", "-", "now"],
    //   ["BABA", "196.39", "-", "now"],
    //   ["NVDA", "203.66", "-", "now"],
    //   ["PYPL", "279.54", "-", "now"],
    //   ["DIS", "177.13", "-", "now"],
    //   ["NKE", "172.8", "-", "now"],
    //   ["INTC", "53.922550", "-", "now"],
    // ],

    // colFields: [
    //   { name: "AALP", price: "120", quantity: "-", time: "one second ago" },
    //   { name: "GOOGL", price: "2550", quantity: "100", time: "now" },
    //   { name: "XYZ", price: "123", quantity: "-", time: "now" },
    //   { name: "aBC", price: "3333", quantity: "189", time: "now" },
    //   { name: "MS", price: "444", quantity: "-", time: "now" },
    //   { name: "MNO", price: "345", quantity: "-", time: "one second ago" },
    //   { name: "PQR", price: "34", quantity: "100", time: "now" },
    //   { name: "DFG", price: "323", quantity: "-", time: "now" },
    //   { name: "JKL", price: "3535", quantity: "189", time: "now" },
    //   { name: "TGI", price: "2550", quantity: "-", time: "now" },
    // ],
  },

  getTableFormatData: (data) => {
    return data.map((ticker) => {
      return {
        name: ticker[0],
        price: ticker[1],
        quantity: ticker[2],
        time: moment(ticker[3], "YYYY-MM-DD HH:mm:ss").fromNow(),
      };
    });
  },
};