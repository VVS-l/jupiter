window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const launchedFromLauncher = urlParams.get('launchedFromLauncher');
  
  if (launchedFromLauncher === 'true') {
    sessionStorage.setItem('openedFromLauncher', 'true');
  } else {
    sessionStorage.setItem('openedFromLauncher', 'false');
  }
  
  const openedFromLauncher = sessionStorage.getItem('openedFromLauncher');
  
  if (openedFromLauncher === 'true') {
    console.log('The site was opened from the launcher.');
  } else {
    console.log('The site was not opened from the launcher. Missing launcher parameter.');
    
    // Redirect to warning page
    window.location.href = 'warning.html';
  }
});
