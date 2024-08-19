function checkForLaunchMessageInTextContent() {
  setTimeout(function() {
    var textContent = document.body.textContent || document.body.innerText;

    if (textContent.includes("Site was launched with launcher")) {
      console.log('The site was launched with the launcher.');
    } else {
      console.error('Error: The site was not launched with the launcher. Missing launch message.');
    }
  }, 2000); // Adjust the delay if necessary
}

checkForLaunchMessageInTextContent();
