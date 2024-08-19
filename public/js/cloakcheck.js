// Function to check for the presence of the launch message
function checkForLaunchMessage() {
  // Use querySelector to find the message element by its style property
  var message = document.querySelector('div[style*="position: fixed; bottom: 10px; left: 10px;"]');

  if (message) {
    console.log('The site was launched with the launcher.');
  } else {
    console.error('Error: The site was not launched with the launcher. Missing launch message.');
  }
}

// Execute the function to check for the launch message
checkForLaunchMessage();
