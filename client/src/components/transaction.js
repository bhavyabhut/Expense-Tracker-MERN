import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transaction.amount < 0 ? "-" : "+";
	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			{transaction.text}
			<span>
				{sign}₹{Math.abs(transaction.amount)}
			</span>
			<button
				className="delete-btn"
				onClick={() => {
					deleteTransaction(transaction._id);
				}}
			>
				x
			</button>
		</li>
	);
};
