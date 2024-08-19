// Function to check if the text "Site was launched with launcher" exists anywhere in the page's HTML
function checkForLaunchMessageInHTML() {
  setTimeout(function() {
    var htmlContent = document.documentElement.outerHTML;

    if (htmlContent.includes("Site was launched with launcher")) {
      console.log('The site was launched with the launcher.');
    } else {
      console.error('Error: The site was not launched with the launcher. Missing launch message.');
    }
  }, 2000); // 2000 milliseconds = 2 seconds
}

// Execute the function to check for the launch message in the HTML after a 2-second delay
checkForLaunchMessageInHTML();
