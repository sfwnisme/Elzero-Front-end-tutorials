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

/** ===|STEPS
 * create an array and insert objects contains the details of the projects in it
 * create onload event 'DOMContentLoaded'
 * create a function to loop the array and creating html element then append then in DOM
you will use Array.map() to loop the array of the product details

 * grap the function of the products into 'DOMContentLoaded' event
    to excute the function after onloading directly
 * create a loop for the filter buttons
 * create click event for the buttons
 * target the dataset.id of the clicked button 
 * save the dataset.id in a variable
 * use Array.filter for the main products array
 * create if condition for filter
 * if the dataset === the array category display the selected category
 * create another codition out the filter 
 * if the clicked button dataset === "all" display all products by adding the products 
    function with the products details array as a parameter
 * else display the products function but with the filter variable as a parameter
 * 
 */

let sectionCenter = document.querySelector(".section-center");
let btnContainer = document.querySelector(".btn-container");

document.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  filterButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems
    .map((item) => {
      return `
    <article class="menu-item" >
    <img src="${item.img}" alt="${item.title}" class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}
      </p>
    </div>
  </article>
    `;
    })
    .reduce((a, b) => a + b);
  // displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function filterButtons() {
  /** ===| STEPS
 * create Array.reduce() high order function
 * set new paramenters (vlaue, item) value is the accumulator=[the help parameter like in this
    function we used it as array => ['all']]
    item is the current value=[menu]
 * now you should check it the value[new array['all']] includes
    any category from item[menu.category]
 * push the item.category to the value parameter
 * return value
 * after the function you should add (,['all']) to excute the function
 */
  let categories = menu.reduce(
    (value, item) => {
      if (!value.includes(item.category)) {
        value.push(item.category);
      }
      return value;
    },
    ["all"]
  );
  console.log(categories);

  // for (let i = 0; i < categories.length; i++) {
  //   btnContainer = `
  // <button type="button" class="filter-btn" data-id="${i}">${i}</button>

  // `;
  // }
  let btns = categories
    .map((cate) => {
      return `<button type="button" class="filter-btn" data-id=${cate}>${cate}</button>`;
    })
    .join("");
  btnContainer.innerHTML = btns;

  console.log(btnContainer);
  let filterBtns = document.querySelectorAll(".filter-btn");
  console.log(filterBtns);
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
      // displayMenuItems(menuCategory);
      // console.log(menuCategory);
    });
  });
}

/*TODO
[] excute the all functions onloading the window
[] create products using loop like Array.map()
[] create buttons depending on the products array
[] excute the buttons
[] create filter by clicking on buttons
  [] use dataset ways for buttons
[] 

*/
