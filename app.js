const items = [
  { name: "Biryani", url: "biryani.jpeg", price: 120, category: "Lunch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Tandoori Chicken", url: "biryani.jpeg", price: 150, category: "Lunch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Butter Chicken", url: "biryani.jpeg", price: 130, category: "Lunch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Mango Shake", url: "biryani.jpeg", price: 80, category: "Shakes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Chocolate Shake", url: "biryani.jpeg", price: 90, category: "Shakes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Biryani", url: "biryani.jpeg", price: 120, category: "Lunch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Tandoori Chicken", url: "biryani.jpeg", price: 150, category: "Lunch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Butter Chicken", url: "biryani.jpeg", price: 130, category: "Lunch", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Mango Shake", url: "biryani.jpeg", price: 80, category: "Shakes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Chocolate Shake", url: "biryani.jpeg", price: 90, category: "Shakes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Strawberry Shake", url: "biryani.jpeg", price: 85, category: "Shakes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
  { name: "Strawberry Shake", url: "biryani.jpeg", price: 85, category: "Shakes", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, ducimus" },
];

function categoryHandler(category) {
  const container = document.querySelector(".box-container");
  container.innerHTML = "";
  const filteredItems = category === "All" ? items : items.filter(item => item.category === category);
  filteredItems.forEach(item => {
    container.innerHTML += `
                    <div class="container">
                        <div class="img"><img src="${item.url}" alt=""></div>
                        <div class="item-name-price">
                            <div class="item-name">${item.name}</div>
                            <div class="price">${item.price}</div>
                        </div>
                        <p>${item.description}</p>
                    </div>
                `;
  });
}

// Initial load with all items
categoryHandler('All');