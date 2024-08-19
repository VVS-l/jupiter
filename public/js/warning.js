window.addEventListener('load', function() {
    // Check if the site was opened from the launcher
    const openedFromLauncher = localStorage.getItem('openedFromLauncher');
  
    if (openedFromLauncher === 'false') {
        // Show the popup if the site was not opened from the launcher
        showPopup();
    }
  
    function showPopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }
});
