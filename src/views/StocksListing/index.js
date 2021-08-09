import React, { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable";
import { metadata } from "./constants";
import "./StocksListing.css";
import { simulatorService } from "../../utils/simulatorService";
import BuyForm from "../../components/BuyForm";
import CustomSnackbar from "../../components/CustomSnackbar";

const StocksListing = () => {
  const [tickersArray, setTickersArray] = useState([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedTicker, setSelectedTicker] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    setInterval(() => {
      const newTickerArray = simulatorService(tickersArray);
      const tableFormatData = metadata.getTableFormatData(newTickerArray);
      setTickersArray(tableFormatData);
    }, 5000);
  }, []);

  const modalHandleClose = () => setShowOrderForm(false);
  const snackbarClose = () =>
    setShowSnackbar({
      show: false,
      type: "",
      message: "",
    });

  const onTableRowClick = (ticker) => {
    setShowOrderForm(!showOrderForm);
    setSelectedTicker(ticker);
  };

  const getSelectedCurrentPrice = () => {
    if (selectedTicker) {
      let filteredPrice = tickersArray.find(
        (ticker) => ticker.name === selectedTicker.name
      );
      return filteredPrice;
    }
  };

  const onBuyClick = (props) => {
    if (selectedTicker.price > getSelectedCurrentPrice().price) {
      setShowSnackbar({
        show: true,
        type: "error",
        message: "Current Price is Much Better, updating Order!",
      });
      setSelectedTicker(getSelectedCurrentPrice());
    } else {
      setShowOrderForm(!showOrderForm);
      setNewTickerArray(props);
      setShowSnackbar({
        show: true,
        type: "success",
        message: "Buy Order Placed!",
      });
    }
  };

  const setNewTickerArray = (props) => {
    let tickersArrayCopy = [...tickersArray];
    tickersArrayCopy = tickersArrayCopy.map((ticker) => {
      if (ticker.name === props.name) {
        ticker.quantity = props.quantity;
      }
      return ticker;
    });

    setTickersArray(tickersArrayCopy);
  };

  return (
    <>
      <h1 align="center">Stocks Listing Screen</h1>
      <section className="tableWrapper">
        <CustomTable
          {...metadata.table}
          colFields={tickersArray}
          onTableRowClick={onTableRowClick}
        />
      </section>
      <CustomSnackbar {...showSnackbar} onClose={snackbarClose} />
      <BuyForm
        open={showOrderForm}
        handleClose={modalHandleClose}
        onBuyClick={onBuyClick}
        selectedCurrentPrice={getSelectedCurrentPrice()}
        selectedTicker={selectedTicker}
      />
    </>
  );
};

export default StocksListing;
