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

// Function to handle button clicks
function handleButtonClicks() {
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function() {
        sessionStorage.setItem('warningDismissed', 'true');
        window.location.href = 'index.html'; // Redirect to the main page
    });
}

// Show the popup when the page loads if not dismissed
window.onload = function() {
    const warningDismissed = sessionStorage.getItem('warningDismissed');
    if (warningDismissed !== 'true') {
        showPopup();
        handleButtonClicks();
    } else {
        window.location.href = 'index.html'; // Redirect to the main page if warning is dismissed
    }
};
