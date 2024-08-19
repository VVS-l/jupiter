window.addEventListener('load', function() {
    // Check if the tab has been previously checked
    const previouslyChecked = localStorage.getItem('launcherChecked');
    
    // If the tab was previously checked, do nothing
    if (previouslyChecked === 'true') {
        console.log('The site has been previously checked.');
        return;
    }
    
    // Check if the URL has the 'launchedFromLauncher' parameter
    const urlParams = new URLSearchParams(window.location.search);
    const launchedFromLauncher = urlParams.get('launchedFromLauncher');
    
    // Set or check local storage based on the URL parameter
    if (launchedFromLauncher === 'true') {
        localStorage.setItem('openedFromLauncher', 'true');
    } else {
        localStorage.setItem('openedFromLauncher', 'false');
    }
    
    // Mark that the check has been performed
    localStorage.setItem('launcherChecked', 'true');
    
    // Check local storage value
    const openedFromLauncher = localStorage.getItem('openedFromLauncher');
    
    if (openedFromLauncher === 'true') {
        console.log('The site was opened from the launcher.');
    } else {
        console.log('The site was not opened from the launcher. Redirecting to warning page.');
        // Redirect to warning page
        window.location.href = 'warning.html';
    }
});
