// Function to show the popup
function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Function to check if the site was opened from the launcher
function checkLauncher() {
    const openedFromLauncher = localStorage.getItem('openedFromLauncher');

    if (openedFromLauncher === 'true') {
        // Hide the popup if opened from the launcher
        document.getElementById('popup').style.display = 'none';
        return; // Exit the function
    }

    // Show the popup if not opened from the launcher
    showPopup();
}

// Check launcher status on page load
window.addEventListener('load', function() {
    // Check if the warning has been acknowledged
    const acknowledged = localStorage.getItem('warningAcknowledged');

    if (acknowledged !== 'true') {
        checkLauncher();
    } else {
        document.getElementById('popup').style.display = 'none'; // Hide popup if acknowledged
    }
});

// Event listener for use launcher button
document.querySelector('.button').addEventListener('click', function() {
    // Set the local storage item to indicate the warning was acknowledged
    localStorage.setItem('warningAcknowledged', 'true');
});
