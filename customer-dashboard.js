document.addEventListener('DOMContentLoaded', function () {
    const restaurantList = document.getElementById('restaurantList');
    const menuList = document.getElementById('menuList');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Sample data for demonstration
    let restaurants = ['Coconut Groove', 'Xander', 'Meat the Cheese'];
    let menuItems = [
        { restaurant: 'Coconut Groove', name: 'Pizza', price: 12.99 },
        { restaurant: 'Coconut Groove', name: 'Burger', price: 8.99 },
        { restaurant: 'Xander', name: 'Steak', price: 18.99 },
        { restaurant: 'Xander', name: 'Pasta', price: 14.99 },
        { restaurant: 'Meat the Cheese', name: 'Cheese Steak', price: 10.99 },
        { restaurant: 'Meat the Cheese', name: 'Cheese Pasta', price: 11.99 }
    ];

    // Function to display restaurants
    function displayRestaurants() {
        restaurantList.innerHTML = '';
        restaurants.forEach(restaurant => {
            const li = document.createElement('li');
            li.textContent = restaurant;
            restaurantList.appendChild(li);
        });
    }

    // Function to display menu items of a specific restaurant
    function displayMenu(restaurant) {
        menuList.innerHTML = '';
        const filteredItems = menuItems.filter(item => item.restaurant === restaurant);
        filteredItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.name}</strong> - $${item.price} <button class="addToCartBtn" data-name="${item.name}" data-price="${item.price}">Add to Cart</button>`;
            menuList.appendChild(li);
        });
    }

    // Event listener for restaurant selection
    restaurantList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const selectedRestaurant = e.target.textContent;
            displayMenu(selectedRestaurant);
        }
    });

    // Event listener for adding items to cart
    menuList.addEventListener('click', function (e) {
        if (e.target.classList.contains('addToCartBtn')) {
            const itemName = e.target.getAttribute('data-name');
            const itemPrice = parseFloat(e.target.getAttribute('data-price'));
            const li = document.createElement('li');
            li.textContent = `${itemName} - $${itemPrice}`;
            cartItems.appendChild(li);

            // Calculate total amount
            let currentTotal = parseFloat(totalAmount.textContent);
            currentTotal += itemPrice;
            totalAmount.textContent = currentTotal.toFixed(2);
        }
    });

    // Event listener for checkout button
    checkoutBtn.addEventListener('click', function () {
        alert(`Total Amount: $${totalAmount.textContent}`);
        // You can add further checkout functionality here
        // For example, clearing cart, processing payment, etc.
    });

    displayRestaurants();
});

document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');

    // Event listener for logout button
    logoutBtn.addEventListener('click', function () {
        // Clear user session data (in this case, you can clear localStorage)
        localStorage.removeItem('customerId');
        // Redirect to login page
        window.location.href = 'customer-login.html';
    });
});
