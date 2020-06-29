const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
	text: {
		type: String,
		trim: true,
		required: [true, "Please Add Some Text"],
	},
	amount: {
		type: Number,
		required: [true, "Enter any number"],
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Transaction", TransactionSchema);
