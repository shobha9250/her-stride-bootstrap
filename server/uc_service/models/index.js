const { CategoryModel } = require('./schema/category');
const { ProviderModel } = require('./schema/provider');

const UCServiceDML = {
  createCategory: (key, name) => {
    return CategoryModel.create({
      key, name
    });
  },
  getAllCategories: () => {
    return CategoryModel.find().lean();
  },
  getCategoryDetails: (categoryKey) => {
    return CategoryModel.findOne({
      key: categoryKey
    }).lean();
  },
  createProvider: (name, rating, categoryKey) => {
    return ProviderModel.create({
      name, rating, categoryKey
    });
  },
  getProvidersByCategoryKey: (categoryKey) => {
    return ProviderModel.find({
      categoryKey: categoryKey
    }).lean();
  }
};

module.exports = {
  UCServiceDML
};