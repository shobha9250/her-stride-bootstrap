const mongoose = require('mongoose');

const Provider = new mongoose.Schema({
  name: { type: String, required: true },
  categoryKey: { type: String, required: true },
  rating: { type: Number },
});

const ProviderModel = mongoose.model('providers', Provider, 'providers');

module.exports = {
  ProviderModel
};
