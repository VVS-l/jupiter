window.addEventListener('load', function() {
  // Check if the URL has the 'launchedFromLauncher' parameter
  const urlParams = new URLSearchParams(window.location.search);
  const launchedFromLauncher = urlParams.get('launchedFromLauncher');
  
  // Set or check local storage based on the URL parameter
  if (launchedFromLauncher === 'true') {
    localStorage.setItem('openedFromLauncher', 'true');
  }
  
  // Check local storage value
  const openedFromLauncher = localStorage.getItem('openedFromLauncher');
  
  if (openedFromLauncher === 'true') {
    console.log('The site was opened from the launcher.');
  } else {
    console.log('The site was not opened from the launcher. Redirecting to warning page.');
    if (window.location.pathname !== '/warning.html') {
      window.location.href = 'warning.html'; // Redirect to the warning page
    }
  }
});
