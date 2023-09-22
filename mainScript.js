// Get references to the elements using classes
const showPopupButtons = document.querySelectorAll('.show-popup-button');
const closePopupButtons = document.querySelectorAll('.close-popup-button');
const popupContainers = document.querySelectorAll('.popup-container');
const overlay = document.querySelector('.overlay');

// Function to show the popup
function showPopup() {
    popupContainers.forEach(container => {
        container.style.display = 'block';
    });
    overlay.style.display = 'block'; // Show the overlay
}

// Function to close the popup
function closePopup() {
    popupContainers.forEach(container => {
        container.style.display = 'none';
    });
    overlay.style.display = 'none'; // Hide the overlay
}

// Attach event listeners to the buttons
showPopupButtons.forEach(button => {
    button.addEventListener('click', showPopup);
});
closePopupButtons.forEach(button => {
    button.addEventListener('click', closePopup);
});

function showAlertS() {
    alert("I'm sorry, headphone warning, prank incoming");
}