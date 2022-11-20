var Products = new Object();
Products = [
  {
    product_name: "Birthday Sweets and Treats - Bear Theme",
    price: "",
    short_description:
      "A combination of cookies, cone dipped in icing, pretzels with white chocolate that is perfect for your child's next birthday.",
    long_description: [
      "This is combination of treats were ordered by one of our closest friends for her little boy's birthday.",
      "Depending on the availability, you can request a special order for your child according to your own theme!",
    ],
    img: "./img/resized/rsz_1bday-1.jpg",
    category: ["birthday"],
  },
  {
    product_name: "Wedding Cupcakes",
    price: "",
    short_description: "The perfect cupcakes for your next anticipated event.",
    long_description: [
      "This cupcake was made with a swirl of icing on top topped with white chocolate pearls.",
      "This order was ordered by my sister for her wedding day.",
    ],
    img: "./img/resized/rsz_1wedding-1.jpg",
    category: ["wedding"],
  },
  {
    product_name: "Wedding Bun Cake",
    price: "",
    short_description: "The best wedding bun cake for your special day.",
    long_description: [
      "This bun cake is topped with icing decorated with baby's breath flowers per requested by the bride for her special day.",
      "This order was made by my sister for her wedding day.",
    ],
    img: "./img/resized/rsz_1wedding-2.jpg",
    category: ["cake", "wedding"],
  },
  {
    product_name: "Creme Brulee Puff Pastry",
    price: "",
    short_description:
      "Satisfying Pastry filled with pudding topped with glazed that will satisfy your sweet tooth.",
    long_description: [
      "This pastry is filled with pudding inside and topped with a glaze that just hits the pallete.",
      "This order was made for my friends.",
    ],
    img: "./img/resized/rsz_1treats-3.jpg",
    category: ["treats", "pastry"],
  },
  {
    product_name: "Strawberry Danish",
    price: "",
    short_description: "Danish pastry, strawberry jam, ",
    long_description: [
      "This easy and beautiful Strawberry Cream Cheese Danish is perfect for a breakfast treat, light dessert, or Sunday brunch. Simple, sweet, and only seven ingredients. You will be delighted in every way!",
    ],
    img: "./img/resized/rsz_1treats-4.jpg",
    category: ["pastry"],
  },
  {
    product_name: "Wedding Vanilla Cake",
    price: "",
    short_description: "Vanilla Cake, Multi-layered,",
    long_description: [
      "Ever seen a combination of cake and floral design? Here it is.",
      "Get your own for your next special event!",
    ],
    img: "./img/resized/rsz_1wedding-3.jpg",
    category: ["cake", "wedding"],
  },
  {
    product_name: "Mangomisu Cake",
    price: "",
    short_description: "Mangoes, Tiramisu, Ladies Finger, ",
    long_description: [
      "Sweet and healthy.",
      "Get your own taste of tiramisu mixed with mangoes instead of coffee.",
    ],
    img: "./img/resized/rsz_cake-5.jpg",
    category: ["cake"],
  },
];

var Reviews = new Object();
Reviews = [
  {
    reviewer_name: "Chelice Ko Aguilar",
    review_text:
      "The cake she made for my wedding was so good! It really means a lot to me that my sister made my cake for my special day.",
  },
  {
    reviewer_name: "Jenny Gonzales",
    review_text: "Ang sarap sarap neto! Magaling na magaling yung baker!",
  },
  {
    reviewer_name: "Kryssma Flores",
    review_text: "Must buy treats! I highly recommend this one.",
  },
  {
    reviewer_name: "Abish Corpuz",
    review_text: "The cupcakes are so filling and so moist on the inside!",
  },
  {
    reviewer_name: "Mhel Corpuz",
    review_text: "Masarap na masarap ang mga ginagawa ni Hana! Must buy!",
  },
  {
    reviewer_name: "Andoy Corpuz",
    review_text: "Pinakain ni papa sakin yung gawa ni tita, ang sarap sobra!",
  },
  {
    reviewer_name: "Mikee Rafada",
    review_text: "Everything she bakes are so good and delicious!",
  },
];

const showProducts = () => {
  Products.map((product) => {
    // console.log(product);
    const element = document.getElementById("products");
    const div_product = document.createElement("div");
    div_product.className = "product";
    const div_product__info = document.createElement("div");
    div_product__info.className = "product__info";
    // Product Name
    const product_name = document.createElement("h3");
    product_name.innerHTML = product.product_name;
    // Image
    var img = new Image();
    img.src = product.img;
    // console.log(img);
    // Short Description
    const short_description = document.createElement("p");
    const short_desc_value = document.createTextNode(product.short_description);
    short_description.appendChild(short_desc_value);

    div_product__info.appendChild(product_name);
    div_product__info.appendChild(short_description);
    div_product.appendChild(img);
    div_product.appendChild(div_product__info);
    element.appendChild(div_product);
  });
};

const showReviews = () => {
  Reviews.map((review) => {
    const element = document.getElementById("reviews__scroll");
    const div_review = document.createElement("div");
    div_review.className = "review";
    const reviewer_name = document.createElement("h3");
    reviewer_name.innerHTML = review.reviewer_name;
    const review_text = document.createElement("p");
    const review_text_value = document.createTextNode(review.review_text);
    review_text.appendChild(review_text_value);

    const hr = document.createElement("hr");

    div_review.appendChild(reviewer_name);
    div_review.appendChild(review_text);
    div_review.appendChild(hr);
    element.appendChild(div_review);
  });
};

const showReviewsWithImage = () => {
  Reviews.map((review) => {
    const element = document.getElementById("reviews__scroll");
    const div_review = document.createElement("div");
    div_review.className = "review";
    const reviewer_name = document.createElement("h3");
    reviewer_name.innerHTML = review.reviewer_name;
    const review_text = document.createElement("p");
    const review_text_value = document.createTextNode(
      `"${review.review_text}"`
    );
    review_text.appendChild(review_text_value);
    var img = new Image();
    img.src = "./img/rsz_1about-us.jpg";

    div_review.appendChild(img);
    div_review.appendChild(reviewer_name);
    div_review.appendChild(review_text);
    element.appendChild(div_review);
  });
};

const showTitle = () => {
  const randomIndex = Math.floor(Math.random() * Products.length);
  // console.log(randomIndex);
  document.getElementById("hero__img").src = Products[randomIndex].img;
  const title_h1 = document.getElementById("hero-msg__title");
  title_h1.innerHTML = Products[randomIndex].product_name;
  const short_desc = document.getElementById("hero-msg__info__desc");
  short_desc.innerHTML = Products[randomIndex].short_description;
};

const showAll = () => {
  showTitle();
  showProducts();
  showReviews();
};
