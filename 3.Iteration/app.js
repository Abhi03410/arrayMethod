var ul = document.querySelector("ul");

var data = ["HTML", "CSS", "Javascript", "React.js", "Next.Js", "Typescript"];

//1
// for (let i = 0; i < data.length; i++) {
//   // console.log(i); //0 1 2 3 4 5
//   console.log(data[i]);
// }

//2
var result = "";
for (let i = 0; i < data.length; i++) {
  result = data[i];
}
console.log(result);

//3
// var result = "";
// for (let i = 0; i < data.length; i++) {
//   result = result + data[i];
// }
// console.log(result); //HTMLCSSJavascriptReact.jsNext.JsTypescript
// ul.innerHTML = result

//4
// var result = "";
// for (let i = 0; i < data.length; i++) {
//   result += data[i];
// }
// console.log(result); //HTMLCSSJavascriptReact.jsNext.JsTypescript
// ul.innerHTML = result

//5
// var result = "";
// for (let i = 0; i < data.length; i++) {
//   result += "<li class='list-group-item'>" + data[i] + "</li>"
// }
// console.log(result);
// ul.innerHTML = result

//6
// var result = "";
// for (let i = 0; i < data.length; i++) {
//   result += `<li class="list-group-item">${data[i]}</li>`
// }
// console.log(result);
// ul.innerHTML = result

//7
// var result = "";
// data.forEach((skill)=>{
//     result += `<li class="list-group-item">${skill}</li>`
// })
// console.log(result);
// ul.innerHTML = result

//8
// var result = "";
// data.map((skill)=>{
//     result += `<li class="list-group-item">${skill}</li>`
// })
// console.log(result);
// ul.innerHTML = result

// for...of
var result = '';
for(const value of data){
  // console.log(value);
  result += `<li>${value}</li>`;
}

// ul.innerHTML = result;

//for...in
var result = '';
for(const value in data){
  console.log(data[value]);
  result += `<li>${data[value]}</li>`;
}
// ul.innerHTML = result;

// values();
var arr = data.values();
var result = '';
for(const val of arr){
  result += `<li>${val}</li>`;
}
// ul.innerHTML = result;

//Object.key();
var result = '';
Object.keys(data).map((e)=>{
    result += `<li>${data[e]}</li>`;
});
// ul.innerHTML = result;
// console.log(result);

//Object.values();

var result = '';
Object.values(data).map((e)=>{
  result += `<li>${e}</li>`;
});

// ul.innerHTML = result;

// Object.entires()
var result = '';
Object.entries(data).map(([key,value])=>{
  console.log(key,value);
  result += `<li>${value}</li>`;
})
// ul.innerHTML = result;

var data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

//1
// var result = ""
// data.map((item)=>{
//     result += `<li class="list-group-item">${item.title}</li>`
// })
// ul.innerHTML = result

//2
// var result = "";
// data.map((item) => {
//   result += `<li class="list-group-item">
//     <h4>${item.title}</h4>
//     <p>${item.completed}</p>
//     </li>`;
// });
// ul.innerHTML = result;

//3
// var tbody = document.querySelector("tbody")

// var result = "";
// data.map((item)=>{
//     result += `<tr>
//     <td>${item.id}</td>
//     <td>${item.title}</td>
//     <td>${item.completed}</td>
//     </tr>`
// })
// tbody.innerHTML = result

var data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

// var product = document.getElementById("product");

// var result = "";
// data.map((item) => {
//   result += `   <div class="col-md-3 p-2">
//                  <div class="card p-2 h-100">
//                   <div>
//                       <img src=${item.image} alt="" class="card-img-top">
//                  </div>
//                 <div class="card-body d-flex flex-column">
//                  <p class="small">${item.category}</p>
//                  <h4>${item.title}</h4>
//                  <h6>$${item.price}</h6>
//                 </div>
//              </div>
//             </div>`;
// });
// product.innerHTML = result;
ul.style.listStyle = "none";

const menuList = [
  { day: "Monday", menuItem: ["chapati", "rice", "daal", "papad"] },
  { day: "Tuesday", menuItem: ["chapati", "rice", "daal", "papad"] },
  { day: "Wednesday", menuItem: ["chapati", "rice", "daal", "papad"] },
  { day: "Thursday", menuItem: ["chapati", "rice", "daal", "papad"] },
  { day: "Friday", menuItem: ["chapati", "rice", "daal", "papad"] },
  { day: "Saturday", menuItem: ["chapati", "rice", "daal", "papad"] },
  { day: "Sunday", menuItem: ["chapati", "rice", "daal", "papad"] },
];

const accordionContainer = document.getElementById("menuAccordion");

menuList.forEach((menu, index) => {
  const collapseId = `collapse${index}`;
  const isActive = index === 0 ? "show" : ""; // First item open by default

  const menuHTML = `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${
    index === 0
  }" aria-controls="${collapseId}">
                            ${menu.day}
                        </button>
                    </h2>
                    <div id="${collapseId}" class="accordion-collapse collapse ${isActive}" aria-labelledby="heading${index}" data-bs-parent="#menuAccordion">
                        <div class="accordion-body">
                            <ul class="list-group">
                                ${menu.menuItem
                                  .map(
                                    (item) =>
                                      `<li class="list-group-item">${item}</li>`
                                  )
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
  accordionContainer.innerHTML += menuHTML;
});



//practice
var data = {
  school_friends: [
    {
      id: 0,
      name: "Hebert Olsen",
    },
    {
      id: 1,
      name: "Bradshaw Nash",
    },
    {
      id: 2,
      name: "Caitlin Downs",
    },
  ],
  college_friends: [
    {
      id: 0,
      name: "Compton Sellers",
    },
    {
      id: 1,
      name: "Gloria Bray",
    },
    {
      id: 2,
      name: "Etta Ray",
    },
  ],
};

console.log(data);
data.school_friends.map((data)=>{
  console.log(data);
})

//4.Object.groupBy()
var data = [
  {
    age: 27,
    eyeColor: "green",
    name: "Bernard Adkins",
    gender: "male",
    company: "LYRICHORD",
  },
  {
    age: 37,
    eyeColor: "green",
    name: "Trujillo Riggs",
    gender: "female",
    company: "STELAECOR",
  },
  {
    age: 35,
    eyeColor: "blue",
    name: "Roberts Hull",
    gender: "male",
    company: "OULU",
  },
  {
    age: 34,
    eyeColor: "brown",
    name: "Goff Long",
    gender: "male",
    company: "ESSENSIA",
  },
  {
    age: 30,
    eyeColor: "green",
    name: "Ferrell Giles",
    gender: "female",
    company: "ROOFORIA",
  },
];

// console.log(Object.groupBy(data, (obj) => obj.eyeColor));
// console.log(Object.groupBy(data, ({ eyeColor }) => eyeColor));
// console.log(Object.groupBy(data, ({ gender }) => gender));


const recipeList = {
  // Array for breakfast recipes
  breakfast: [
    {
      name: "Pancakes",
      ingredients: ["flour", "eggs", "milk", "butter"],
      prepTime: 20
    },
    {
      name: "Omelette",
      ingredients: ["eggs", "cheese", "mushrooms", "onions"],
      prepTime: 15
    }
  ],
  
  // Array for lunch recipes
  lunch: [
    {
      name: "Caesar Salad",
      ingredients: ["romaine lettuce", "croutons", "parmesan", "caesar dressing"],
      prepTime: 10
    },
    {
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      prepTime: 8
    }
  ],
  
  // Array for dinner recipes
  dinner: [
    {
      name: "Spaghetti Bolognese",
      ingredients: ["pasta", "ground beef", "tomato sauce", "onions", "garlic"],
      prepTime: 45
    },
    {
      name: "Chicken Curry",
      ingredients: ["chicken", "curry paste", "coconut milk", "vegetables"],
      prepTime: 40
    }
  ],
  
  // Array for dessert recipes
  dessert: [
    {
      name: "Chocolate Cake",
      ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter"],
      prepTime: 60
    }
  ]
};