// Function to show the popup
function showPopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// Function to check if the site was opened from the launcher
function checkLauncher() {
    const openedFromLauncher = localStorage.getItem('openedFromLauncher');

    if (openedFromLauncher === 'true') {
        // Hide the popup if opened from the launcher
        const popup = document.getElementById('popup');
        if (popup) {
            popup.style.display = 'none';
        }
        return; // Exit the function
    }

    // Show the popup if not opened from the launcher
    showPopup();
}

// Check launcher status on page load
window.addEventListener('load', checkLauncher);
