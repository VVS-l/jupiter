window.addEventListener('load', function() {
    // Function to reset the launcher flag
    function resetLauncherFlag() {
        sessionStorage.removeItem('launcherFlag'); // Clear the launcher flag
    }

    // Check if the URL has the 'launchedFromLauncher' parameter
    const urlParams = new URLSearchParams(window.location.search);
    const launchedFromLauncher = urlParams.get('launchedFromLauncher');

    // Set session storage based on the URL parameter
    if (launchedFromLauncher === 'true') {
        sessionStorage.setItem('launcherFlag', 'true');
        // Reset the launcher flag to false after 1 minute
        setTimeout(resetLauncherFlag, 60000); // 60000 ms = 1 minute
    }

    // Check session storage value
    const launcherFlag = sessionStorage.getItem('launcherFlag');

    if (launcherFlag === 'true') {
        console.log('The site was opened from the launcher.');
        // Do nothing if opened from the launcher
        return; // Exit the function, no need to redirect
    } else {
        console.log('The site was not opened from the launcher. Redirecting to warning page.');
        // Redirect to warning page
        window.location.href = 'warning.html';
    }

    // Reset the launcher flag when the tab is closed
    window.addEventListener('beforeunload', resetLauncherFlag);
});
