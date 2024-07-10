// Array to store shopping list items
let shoppingList = [];

// DOM Elements
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const clearListButton = document.getElementById('clearListButton');
const shoppingListContainer = document.getElementById('shoppingList');

// Add item to the shopping list
function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText) {
        shoppingList.push(itemText);
        renderList();
        itemInput.value = '';
        itemInput.focus();
    }
}

// Mark item as purchased
function togglePurchased(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('purchased');
    }
}

// Clear the shopping list
function clearList() {
    shoppingList = [];
    renderList();
}

// Render the shopping list
function renderList() {
    shoppingListContainer.innerHTML = '';
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        shoppingListContainer.appendChild(listItem);
    });
}

// Event Listeners
addItemButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
shoppingListContainer.addEventListener('click', togglePurchased);
clearListButton.addEventListener('click', clearList);

// Initial Render
renderList();
