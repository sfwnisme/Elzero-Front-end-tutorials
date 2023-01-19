const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "stick dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

/*TODO
[x] excute the all functions onloading the window
[x] create products using loop like Array.map()
[x] create buttons depending on the products array
[x] excute the buttons
[] create filter by clicking on buttons
  [] use dataset ways for buttons
[] 

*/

let sectionContainer = document.querySelector(".section-center");

document.addEventListener("DOMContentLoaded", () => {
  menuProducts(menu);
  filterProductsBtns();
});

/* ===========| Create Products */
function filterProductsBtns() {
  let filterBtns = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );

  //===|append to buttons container
  let btnsContainer = document.querySelector(".btn-container");
  filterBtns.forEach((btn) => {
    let btns = document.createElement("button");
    btns.setAttribute("type", "button");
    btns.className = "filter-btn";
    btns.setAttribute("data-id", btn);
    btns.innerText = btn.toUpperCase();

    btnsContainer.append(btns);
    // btnsContainer.innerHTML = btns;
  });

  // excute the filter
  let btns = document.querySelectorAll(".filter-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (b) => {
      let data = b.target.dataset.id;

      let menuFilter = menu.filter((item) => {
        if (item.category == data) {
          return menu;
        }
      });
      if (data == "all") {
        menuProducts(menu);
      } else {
        menuProducts(menuFilter);
      }
    });
  });
}

/* ===========| Create Products */
function menuProducts(menuItems) {
  let items = menuItems
    .map((item) => {
      return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>`;
    })
    .reduce((acc, curr) => acc + curr);
  sectionContainer.innerHTML = items;
}
