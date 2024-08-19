window.addEventListener('load', function() {
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

  // Check if the warning has already been acknowledged
  if (!localStorage.getItem('warningAcknowledged')) {
    // Show the warning popup
    showPopup();
  }

  // Handle the close button click
  document.getElementById('close-button').addEventListener('click', function() {
    localStorage.setItem('warningAcknowledged', 'true'); // Set the flag
    window.location.href = 'index.html'; // Redirect to the home page
  });
});
