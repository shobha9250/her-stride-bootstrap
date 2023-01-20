const { CategoryModel } = require('./schema/category');
const { ProviderModel } = require('./schema/provider');

const UCServiceDML = {
  getAllCategories: () => {
    return CategoryModel.find().lean();
  },
  getCategoryDetails: (categoryKey) => {
    return CategoryModel.find({
      key: categoryKey
    }).lean();
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