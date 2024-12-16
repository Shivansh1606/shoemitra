const products = [];

// Generate 40 products dynamically
for (let i = 1; i <= 20; i++) {
    products.push({
        id: i,
        name: `Product ${i}`,
        price: `Rs---`,
        image: `https://via.placeholder.com/250?text=Product+${i}`
    });
}

// Function to render products dynamically
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products
        .map(
            (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `
        )
        .join('');
}

// Placeholder function for Add to Cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    alert(`${product.name} has been added to your cart!`);
}

// Call renderProducts on page load
renderProducts();
