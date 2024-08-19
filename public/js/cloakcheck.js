window.addEventListener('load', function() {
  // Check if the URL has the 'launchedFromLauncher' parameter
  const urlParams = new URLSearchParams(window.location.search);
  const launchedFromLauncher = urlParams.get('launchedFromLauncher');

  // Set or check local storage based on the URL parameter
  if (launchedFromLauncher === 'true') {
    localStorage.setItem('openedFromLauncher', 'true');
  } else {
    localStorage.setItem('openedFromLauncher', 'false');
  }

  // Check local storage value
  const openedFromLauncher = localStorage.getItem('openedFromLauncher');

  if (openedFromLauncher === 'true') {
    console.log('The site was opened from the launcher.');
  } else {
    console.log('The site was not opened from the launcher. Redirecting to warning page.');
    window.location.href = 'warning.html'; // Redirect to warning page
  }
});
