const wrapper = document.querySelector(".slider-wrapper");
const menuItems = document.querySelectorAll(".menu-item");

const currentProductImg = document.querySelector(".product-img");
const currentProductTitle = document.querySelector(".product-title");
const currentProductPrice = document.querySelector(".product-price");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

const products = [
  {
    id: 1,
    title: "IPHONE 16",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/iphone 16.webp"
      },
      {
        code: "darkblue",
        img: "./img/iphone 16.webp"
      }
    ]
  },
  {
    id: 2,
    title: "IPHONE 15",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/iphone 15.jfif"
      },
      {
        code: "green",
        img: "./img/iphone 15.jfif"
      }
    ]
  },
  {
    id: 3,
    title: "IPHONE 14",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/iphone 14.jfif"
      },
      {
        code: "green",
        img: "./img/iphone 14.jfif"
      }
    ]
  },
  {
    id: 4,
    title: "IPHONE 13",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/iphone 13.jpg"
      },
      {
        code: "lightgray",
        img: "./img/iphone 13.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "IPHONE 12",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/iphone 13.jpg"
      },
      {
        code: "black",
        img: "./img/iphone 13.jpg"
      }
    ]
  }
];

let chosenProduct = products[0];

let activeMenu = chosenProduct.title;

function initialActiveMenu() {
  if (activeMenu === menuItems[0].id) {
    menuItems[0].classList.add("active-menu");
  } else {
    menuItems[0].classList.remove("active-menu");
  }
}
initialActiveMenu();

menuItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    // change the current slide
    wrapper.style.transform = `translateX(${-100 * i}vw)`;

    // change the chose product
    chosenProduct = products[i];

    // change active menu variable
    activeMenu = chosenProduct.title;

    // change text of current product
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.colors[0].img;

    if (activeMenu === item.id) {
      menuItems.forEach((item) => item.classList.remove("active-menu"));
      item.classList.add("active-menu");
    } else {
      item.classList.remove("active-menu");
    }

    // change the color box for each product
    currentProductColors.forEach((color, i) => {
      color.style.backgroundColor = chosenProduct.colors[i].code;
    });
  });
});

currentProductColors.forEach((color, i) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[i].img;
  });
});

currentProductSizes.forEach((size, i) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


//products js....!

