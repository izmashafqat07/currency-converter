import React, { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";
const App = () => {
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const currencyInfo = useCurrencyInfo(from);
  console.log(currencyInfo);
  const options = Object.keys(currencyInfo);
  console.log(options);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(0);
   
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div className="main-div">
        <div className="currency-converter-div">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <h1 className="curr-converter-head">Currency Converter</h1>
            <h2 className="amount-converted">
              converted amount: {convertedAmount}
            </h2>
            <div className="amount-entering-field">
              <h3 style={{ marginLeft: "20px", marginTop: "30px" }}>Amount</h3>
              <input
                type="number"
                style={{ marginLeft: "20px", width: "300px", height: "30px" }}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div className="options-selecting-div">
              <label>From:</label>
              <select value={from} onChange={(e) => setFrom(e.target.value)}>
                {options.map((currency) => (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <button onClick={swap}>swap</button>
              <label>To:</label>
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                {options.map((currency) => (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>

            <div className="convert-btn">
              <button type="submit">Convert </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
