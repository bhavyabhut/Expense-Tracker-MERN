//const ADD_ITEM = "ADD_ITEM";

export default (state, action) => {
	switch (action.type) {
		case "GET_TRANS":
			return {
				...state,
				loading: false,
				transactions: action.payload,
			};
		case "DELETE":
			return {
				...state,
				transactions: state.transactions.filter(
					(transaction) => transaction._id !== action.payload
				),
			};
		case "ADD":
			return {
				...state,
				transactions: [...state.transactions, action.payload],
			};
		case "TRANS_ERROR":
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};
