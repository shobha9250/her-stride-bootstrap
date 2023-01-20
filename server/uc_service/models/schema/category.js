const mongoose = require('mongoose');

const Category = new mongoose.Schema({
  key: { type: String, required: true },
  name: { type: String, required: true },
});

const CategoryModel = mongoose.model('categories', Category, 'categories');

module.exports = {
  CategoryModel
};
