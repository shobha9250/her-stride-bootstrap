// API: /api/getCategories
const Req = {};
const Res = {
  categories: [{
    key: '',
    name: ''
  }]
};

// API: /api/getCategoriesDetails
const Req = {
  categoryKey: ''
};
const Res = {
  category: {
    key: '',
    name: ''
  },
  providers: [{
    id: '',
    name: '',
    rating: ''
  }]
};