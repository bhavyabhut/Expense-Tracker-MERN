import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { numberWithCommas } from "../utils/format.js";
const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amount = transactions.map((transaction) => transaction.amount);
	const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<>
			<h4>Your Balance</h4>
			<h1>₹{numberWithCommas(total)}</h1>
		</>
	);
};
export default Balance;
