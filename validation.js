function registerRestaurantOwner(id, name, email, password) {
    if (checkIfIdExists(id, registeredRestaurantIds)) {
        alert('ID already exists. Please choose a different ID.');
        return false;
    }

    // Perform registration process here (e.g., add to database)
    registeredRestaurantIds.push(id);
    alert('Registration successful!');
    return true;
}