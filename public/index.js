
const GET_CATEGORIES_API_CONFIG = {
  url: "/api/getCategories",
  method: "POST",
  body: {}
};

const CATEGORY_KEY_TO_IMAGE_MAP = {
  "salon_at_home": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
  "electricians": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/categories/category_v2/category_72d18950.png",
  "spa_at_home": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/categories/category_v2/category_1312fb60.png",
  "carpenters": "https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_6fbad370.png",
  "mens_grooming": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
};

const getCategoryList = async () => {
  // show loader
  const fetchRes = await fetch(GET_CATEGORIES_API_CONFIG.url, {
    method: GET_CATEGORIES_API_CONFIG.method,
    body: GET_CATEGORIES_API_CONFIG.body,
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const data = await fetchRes.json();

  // hide loader
  console.log("data", data);

  return data;

  // return ({
  //   categories: [
  //     {
  //       name: "Women's salon",
  //       key: "salon_at_home",
  //     },
  //     {
  //       name: "Electricians",
  //       key: "electricians",
  //     },
  //     {
  //       name: "Spa at home",
  //       key: "spa_at_home",
  //     },
  //     {
  //       name: "Carpenters",
  //       key: "carpenters",
  //     },
  //     {
  //       name: "Men's grooming",
  //       key: "mens_grooming",
  //     },
  //   ],
  // });
};

const renderPage = (pageLoadData) => {
  const rootContainer = document.querySelector("#categoryGridContainer");

  pageLoadData.categories.forEach((category) => {
    rootContainer.innerHTML += `
      <div class="categoryGridItem" onclick="openCategoryInfo('${category.key}')">
        <div class="categoryImageContainer">
          <img src=${CATEGORY_KEY_TO_IMAGE_MAP[category.key]}>
        </div>
        <p>${category.name}</p>
      </div>
    `;
  });
}

window.onload = async (e) => {
  console.log("window onload::e", e);
  const pageLoadData = await getCategoryList();
  renderPage(pageLoadData);
};

const openCategoryInfo = (categoryKey) => {
  window.location.href = `/categoryInfo/${categoryKey}`;
};
