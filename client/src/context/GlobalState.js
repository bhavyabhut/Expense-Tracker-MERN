import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducre.js";
import axios from "axios";
const initailState = {
	transactions: [],
	error: null,
	loading: true,
};

export const GlobalContext = createContext(initailState);

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initailState);

	const getTransactions = async () => {
		try {
			const res = await axios.get("api/v1/transition/");
			dispatch({
				type: "GET_TRANS",
				payload: res.data.data,
			});
		} catch (e) {
			dispatch({
				type: "TRANS_ERROR",
				payload: e.res.data.error,
			});
		}
	};
	const deleteTransaction = async (id) => {
		try {
			await axios.delete("api/v1/transition/" + id);

			dispatch({
				type: "DELETE",
				payload: id,
			});
		} catch (e) {
			dispatch({
				type: "TRANS_ERROR",
				payload: e.res.data.error,
			});
		}
	};
	const addTransaction = async (transaction) => {
		try {
			const res = await axios.post("api/v1/transition", transaction, {
				"Content-Type": "application/json",
			});
			dispatch({
				type: "ADD",
				payload: res.data.data,
			});
		} catch (e) {
			dispatch({
				type: "TRANS_ERROR",
				payload: e.res.data.error,
			});
		}
	};

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				error: state.error,
				loading: state.loading,
				getTransactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
