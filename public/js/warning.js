window.onload = function() {
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

  // Show the popup when the page loads
  showPopup();

  // Close button functionality
  document.getElementById('close-button').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to main page
  });
};
