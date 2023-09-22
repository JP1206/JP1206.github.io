// Get references to the elements using classes
const showPopupButtons = document.querySelectorAll('.show-popup-button');
const closePopupButtons = document.querySelectorAll('.close-popup-button');
const popupContainers = document.querySelectorAll('.popup-container');

// Function to show the popup
function showPopup() {
    popupContainers.forEach(container => {
        container.style.display = 'block';
    });
}

// Function to close the popup
function closePopup() {
    popupContainers.forEach(container => {
        container.style.display = 'none';
    });
}

// Attach event listeners to the buttons
showPopupButtons.forEach(button => {
    button.addEventListener('click', showPopup);
});
closePopupButtons.forEach(button => {
    button.addEventListener('click', closePopup);
});