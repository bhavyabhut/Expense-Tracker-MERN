import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

export const Form = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const formSubmit = (e) => {
    e.preventDefault();
    const newTran = {
      id: Math.floor(Math.random() * 100000),
      text: name,
      amount: +price,
    };
    addTransaction(newTran);
    setName("");
    setPrice("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
