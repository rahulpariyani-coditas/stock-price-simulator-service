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
