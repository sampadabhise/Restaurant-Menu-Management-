const menuItems = [
    {
        name: "Pasta ",
        description: "Delicious pasta with creamy sauce and bacon.",
        price: "$12.99"
    },
    {
        name: "Pizza",
        description: "Classic pizza with fresh mozzarella and basil.",
        price: "$10.99"
    },
    {
        name: " Salad",
        description: "Crisp lettuce with Caesar dressing and croutons.",
        price: "$7.99"
    }
];

const menuSection = document.querySelector(".menu-items");

menuItems.forEach(item => {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");
    menuItemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p><strong>${item.price}</strong></p>
        <button onclick="addToCart('${item.name}')">Add to Cart</button>
    `;
    menuSection.appendChild(menuItemDiv);
});

let cart = [];

function addToCart(itemName) {
    cart.push(itemName);
    alert(`${itemName} added to your cart!`);
}
