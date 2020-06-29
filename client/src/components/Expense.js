import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import { numberWithCommas } from "../utils/format.js";

export const Expense = () => {
	const { transactions } = useContext(GlobalContext);
	const income = transactions
		.map((transaction) =>
			transaction.amount > 0 ? transaction.amount : null
		)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	const expense = transactions
		.map((transaction) =>
			transaction.amount < 0 ? -transaction.amount : null
		)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	return (
		<>
			<div className="inc-exp-container">
				<div>
					<h4>Income</h4>
					<p className="money plus">₹{numberWithCommas(income)}</p>
				</div>
				<div>
					<h4>Expense</h4>
					<p className="money minus">₹{numberWithCommas(expense)}</p>
				</div>
			</div>
		</>
	);
};
