window.addEventListener('load', function() {
    // Function to reset the launcher flag
    function resetLauncherFlag() {
        localStorage.setItem('launcherFlag', 'false');
    }

    // Function to verify if the URL parameter is correct
    function isValidLauncherParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const launchedFromLauncher = urlParams.get('launchedFromLauncher');
        return launchedFromLauncher === 'true';
    }

    // Check if the URL has the 'launchedFromLauncher' parameter
    if (isValidLauncherParam()) {
        localStorage.setItem('launcherFlag', 'true');
        // Reset the launcher flag to false after 1 minute
        setTimeout(resetLauncherFlag, 60000); // 60000 ms = 1 minute
    } else {
        // If not valid, redirect to the warning page
        window.location.href = 'warning.html';
    }
});
