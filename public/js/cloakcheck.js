window.addEventListener('load', function() {
    // Function to reset the launcher flag
    function resetLauncherFlag() {
        localStorage.removeItem('launcherFlag'); // Clear the launcher flag
    }

    // Check if the URL has the 'launchedFromLauncher' parameter
    const urlParams = new URLSearchParams(window.location.search);
    const launchedFromLauncher = urlParams.get('launchedFromLauncher');

    // Set or check local storage based on the URL parameter
    if (launchedFromLauncher === 'true') {
        localStorage.setItem('launcherFlag', 'true');
        // Reset the launcher flag to false after 1 minute
        setTimeout(resetLauncherFlag, 60000); // 60000 ms = 1 minute
    }

    // Check local storage value
    const launcherFlag = localStorage.getItem('launcherFlag');

    if (launcherFlag === 'true') {
        console.log('The site was opened from the launcher.');
    } else {
        console.log('The site was not opened from the launcher. Redirecting to warning page.');
        // Redirect to warning page
        window.location.href = 'warning.html';
    }

    // Reset the launcher flag when the tab is closed
    window.addEventListener('unload', resetLauncherFlag);
});
