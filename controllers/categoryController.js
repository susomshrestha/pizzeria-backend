const Category = require('../models/category');

const categoryController = {
	getAll: async (req, res) => {
		try {
			const data = await Category.find();
			res.json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
	getById: (req, res) => {
		// Implement logic to get a user by ID
	},
	create: async (req, res) => {
		const data = new Category({
			name: req.query.name,
		});
		try {
			const dataToSave = await data.save();
			res.status(200).json(dataToSave);
		} catch (error) {
			res.status(400).json({
				message: error.message,
			});
		}
	},
	update: (req, res) => {
		// Implement logic to update a user
	},
	delete: (req, res) => {
		// Implement logic to delete a user
	},
};

module.exports = categoryController;
