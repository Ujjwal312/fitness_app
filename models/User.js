const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	dueration: {
		type: String,
		required: true,
		
	},
	status: {
		type: String,
		required: true,
	},

});

module.exports = mongoose.model("User", userSchema);
