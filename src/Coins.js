import React from "react";
import "./coin.css";

function Coin({ name, marketcap, image, symbol, price, volume, priceChange }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img alt="crypto" src={image} />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price.toLocaleString()}</p>
          <p className="coin-volume">Rs.{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">Rs.{marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coin;
