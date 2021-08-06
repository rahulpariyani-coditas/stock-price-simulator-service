import React from "react";
import CustomizedTables from "../../components/CustomizedTables";
import { metadata } from "./constants";
import "./StocksListing.css";

const StocksListing = () => {
  return (
    <div>
      <h1 align="center">Stocks Listing Screen</h1>
      <section className="tableWrapper">
        <CustomizedTables {...metadata.table} />
      </section>
    </div>
  );
};

export default StocksListing;
