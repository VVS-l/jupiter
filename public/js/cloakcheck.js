window.addEventListener('load', function() {
  // Check if the URL has the 'launchedFromLauncher' parameter
  const urlParams = new URLSearchParams(window.location.search);
  const launchedFromLauncher = urlParams.get('launchedFromLauncher');
  
  // Set or check session storage based on the URL parameter
  if (launchedFromLauncher === 'true') {
    sessionStorage.setItem('openedFromLauncher', 'true');
  } else {
    sessionStorage.setItem('openedFromLauncher', 'false');
  }
  
  // Check session storage value
  const openedFromLauncher = sessionStorage.getItem('openedFromLauncher');
  
  if (openedFromLauncher === 'true') {
    console.log('The site was opened from the launcher.');
  } else {
    console.log('The site was not opened from the launcher. Missing launcher parameter.');
    window.location.href = 'warning.html'; // Redirect to the warning page if not opened from launcher
  }
});
