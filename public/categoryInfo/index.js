
const GET_CATEGORY_INFO_API_CONFIG = {
  url: "/sampleapi",
  method: "POST",
  body: {
    categoryKey: location.pathname.split("/")[2],
  },
};

const CATEGORY_KEY_TO_IMAGE_MAP = {
  "salon_at_home": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
  "electricians": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/categories/category_v2/category_72d18950.png",
  "spa_at_home": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/categories/category_v2/category_1312fb60.png",
  "carpenters": "https://res.cloudinary.com/urbanclap/image/upload/categories/category_v2/category_6fbad370.png",
  "mens_grooming": "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
};

const getCategoryInfo = async () => {
  // // show loader
  // const fetchRes = await fetch(GET_CATEGORY_INFO_API_CONFIG.url, {
  //   method: GET_CATEGORY_INFO_API_CONFIG.method,
  //   body: GET_CATEGORY_INFO_API_CONFIG.body,
  // });
  // const data = await fetchRes.json();

  // // hide loader
  // console.log("data", data);

  return ({
    category: {
      name: "Women's salon",
      key: "salon_at_home"
    },
    providers: [
      {
        name: "Pro name 1",
        rating: "4.2"
      },
      {
        name: "Pro name 2",
        rating: "4.1"
      },
      {
        name: "Pro name 3",
        rating: "4.3"
      },
      {
        name: "Pro name 4",
        rating: "4.5"
      },
    ],
  });
};

const renderPage = (pageLoadData) => {
  const rootContainer = document.querySelector("#rootContainer");
  rootContainer.innerHTML = `
    <div class="categoryGridContainer">
      <div class="categoryGridItem">
        <div class="categoryImageContainer">
          <img src=${CATEGORY_KEY_TO_IMAGE_MAP[pageLoadData.category.key]}>
        </div>
        <p>Explore the best in class <b>${pageLoadData.category.name}</b></p>
      </div>
    </div>
  `;

  rootContainer.innerHTML += `<div class="proListContainer">`;

  pageLoadData.providers.forEach((provider) => {
    rootContainer.innerHTML += `
      <div class="proCardRoot">
        <div class="proInfoRoot">
          <div class="proImageContainer">
            <img src="https://i.ibb.co/vxmHs93/User-avatar-svg.png">
          </div>
          <div class="proInfoContainer">
            <p>${provider.name}</p>
            <p>★ ${provider.rating}</p>
          </div>
        </div>
        <p class="proCardCTA">Book now</p>
      </div>
    `;
  });

  rootContainer.innerHTML += `</div>`;
};

window.onload = async (e) => {
  console.log("window onload::e", e);
  const pageLoadData = await getCategoryInfo();
  renderPage(pageLoadData);
};
