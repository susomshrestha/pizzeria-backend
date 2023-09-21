const { default: mongoose } = require('mongoose');
const Item = require('../models/item');

const ItemController = {
  getAll: async (req, res) => {
		try {
			const data = await Item.find({}).populate('category').exec();
			res.json(data);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
	getById: (req, res) => {
		// Implement logic to get a user by ID
	},
	create: async (req, res) => {
    console.log('in')
		const data = new Item({
			name: req.query.name,
			category: '6509df1a6bc12d0c2438f129',
		});
    console.log(data)
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
}

module.exports = ItemController;