// Function to get the value of a specific cookie
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Function to show the popup
function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    let countdown = 5; // Countdown in seconds
    const closeButton = document.getElementById('close-button');

    // Function to update the countdown
    function updateCountdown() {
        closeButton.textContent = `Close (${countdown})`;
        if (countdown <= 0) {
            closeButton.textContent = 'Close';
            closeButton.disabled = false; // Enable the close button
            clearInterval(countdownInterval); // Stop the countdown
        }
        countdown--;
    }

    // Start the countdown
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Check if the site was opened from the launcher
window.onload = function() {
    const launcherCookie = getCookie('openedFromLauncher');
    if (launcherCookie !== 'true') {
        showPopup(); // Show the popup if the cookie is not set or false
    }
};
