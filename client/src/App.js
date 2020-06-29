import React from "react";
import "./App.css";
import { Provider } from "./context/GlobalState.js";
import Header from "./components/Header.js";
import Balance from "./components/Balance.js";
import { Expense } from "./components/Expense.js";
import { List } from "./components/List.js";
import { Form } from "./components/Form.js";

function App() {
  return (
    <Provider>
      <Header />
      <div className="container">
        <Balance />
        <Expense />
        <List />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
