document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.getElementById('menuList');
    const addDishBtn = document.getElementById('addDishBtn');
    const categoryName = document.getElementById('categoryName');
    const addCategoryBtn = document.getElementById('addCategoryBtn');
    const categoryList = document.getElementById('categoryList');

    // Sample initial data for demonstration
    let categories = ['Starters', 'Main Course', 'Desserts'];
    let menuItems = [
        { id: 1, name: 'Chicken Wings', category: 'Starters', price: 10.99 },
        { id: 2, name: 'Spaghetti Bolognese', category: 'Main Course', price: 15.99 },
        { id: 3, name: 'Cheesecake', category: 'Desserts', price: 8.99 }
    ];

    // Function to display categories
    function displayCategories() {
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            categoryList.appendChild(li);
        });
    }

    // Function to display menu items
    function displayMenu() {
        menuList.innerHTML = '';
        menuItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${item.name}</strong> - ${item.category} - $${item.price} <button class="deleteBtn" data-id="${item.id}">Delete</button>`;
            menuList.appendChild(li);
        });
    }

    displayCategories();
    displayMenu();

    // Event listener for adding a new category
    addCategoryBtn.addEventListener('click', function () {
        const newCategory = categoryName.value.trim();
        if (newCategory) {
            categories.push(newCategory);
            displayCategories();
            categoryName.value = '';
        } else {
            alert('Please enter a valid category name.');
        }
    });

    // Event listener for adding a new dish
    addDishBtn.addEventListener('click', function () {
        const dishName = document.getElementById('dishName').value.trim();
        const dishCategory = document.getElementById('dishCategory').value.trim();
        const dishPrice = parseFloat(document.getElementById('dishPrice').value);

        if (dishName && dishCategory && !isNaN(dishPrice)) {
            const newItem = { id: Date.now(), name: dishName, category: dishCategory, price: dishPrice };
            menuItems.push(newItem);
            displayMenu();
            document.getElementById('dishName').value = '';
            document.getElementById('dishCategory').value = '';
            document.getElementById('dishPrice').value = '';
        } else {
            alert('Please fill all the fields correctly.');
        }
    });

    // Event listener for deleting a dish
    menuList.addEventListener('click', function (e) {
        if (e.target.classList.contains('deleteBtn')) {
            const itemId = parseInt(e.target.getAttribute('data-id'));
            menuItems = menuItems.filter(item => item.id !== itemId);
            displayMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');

    // Event listener for logout button
    logoutBtn.addEventListener('click', function () {
        // Clear user session data (in this case, you can clear localStorage)
        localStorage.removeItem('restaurantOwnerId');
        // Redirect to login page
        window.location.href = 'restaurant-login.html';
    });
});
