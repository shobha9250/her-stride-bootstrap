const express = require('express');
const Router = express();
const { UCServiceDML } = require('./models');

/**
  curl --location --request POST 'http://localhost:3001/api/getCategories' \
  --header 'Content-Type: application/json' \
  --data-raw '{}'
*/
Router.post('/getCategories', async (req, res) => {
  try {
    const categories = await UCServiceDML.getAllCategories();
    
    return res.json({
      categories: categories.map(category => ({
        key: category.key,
        name: category.name
      }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});


/**
  curl --location --request POST 'http://localhost:3001/api/getCategoriesDetails' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "categoryKey": "salon"
  }'
*/
Router.post('/getCategoriesDetails', async (req, res) => {
  try {
    const { categoryKey } = req.body;
    
    const categoryDetails = await UCServiceDML.getCategoryDetails(categoryKey);
    const providers = await UCServiceDML.getProvidersByCategoryKey(categoryKey);
    
    return res.json({
      category: {
        key: categoryDetails.key,
        name: categoryDetails.name
      },
      providers: providers.map(provider => ({
        id: providers._id,
        name: providers.name,
        rating: provider.rating
      }))
    });
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = Router;