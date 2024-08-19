// Function to check if the text "Site was launched with launcher" exists anywhere in the page's HTML
function checkForLaunchMessageInHTML() {
  setTimeout(function() {
    // Get the entire HTML content of the page
    var htmlContent = document.documentElement.outerHTML;

    // Check if the specific text exists in the HTML content
    if (htmlContent.indexOf("Site was launched with launcher") !== -1) {
      console.log('The site was launched with the launcher.');
    } else {
      console.error('Error: The site was not launched with the launcher. Missing launch message.');
    }
  }, 4000); // 4000 milliseconds = 4 seconds
}

// Execute the function to check for the launch message in the HTML after a 4-second delay
checkForLaunchMessageInHTML();
