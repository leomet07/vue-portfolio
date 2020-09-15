const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 4,
		max: 30,
	},
	description: {
		type: String,
		required: true,
		min: 4,
		max: 500,
	},
	images: {
		type: Array,
		required: true
	},
	url: {
		type: String,
		required: true,
		min: 4,
		max: 500
	}
});

const projectModel = mongoose.model("Project", projectSchema);

module.exports = projectModel;