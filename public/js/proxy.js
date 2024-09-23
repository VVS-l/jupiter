document.addEventListener('DOMContentLoaded', function() {
    let proxyUrl = ''; // Store the proxy URL dynamically

    // Dropdown functionality
    document.getElementById('dropdown-toggle').addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = document.getElementById('dropdown-content');
        dropdownContent.classList.toggle('show');
    });

    // Prevent context menu
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // Show popup and set relevant information for each proxy button
    function showPopup(proxyType) {
        document.querySelector('.popup-overlay').style.display = 'flex';
        const proxyInfo = document.getElementById('proxy-info');
        const proxyLink = document.getElementById('proxy-link');
        const goButton = document.getElementById('go-button');
        const countdownElement = document.getElementById('countdown');

        // Reset the popup content for each button
        countdownElement.textContent = '';
        goButton.style.display = 'none';

        // Set content dynamically based on which proxy button is clicked
        if (proxyType === 'openProxy') {
            proxyInfo.innerHTML = "<h2>Proxy is opening soon, read if you have any issues.</h2><p>Some links will work, some won't. The proxies use networking from all over the world. If you are having any issues, click the help button, or </p>";
            proxyLink.innerHTML = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdKy-YstHvXOqCakld55_PzHXU0tqPVimXVBbdwCVHVE3ccqw/viewform" target="_blank" style="color: #ff6600;">File an issue</a>';
            proxyUrl = ''; // Clear proxy URL, as the cloaking function will handle this
            startCountdown('openProxy');
        } else if (proxyType === 'betterProxy') {
            proxyInfo.innerHTML = "<h2>Proxy is opening soon, read if you have any issues.</h2><p>Some links will work, some won't. The proxies use networking from all over the world. If you are having any issues, click the help button, or </p>";
            proxyLink.innerHTML = '<a href="https://docs.google.com/forms/d/e/1FAIpQLSdKy-YstHvXOqCakld55_PzHXU0tqPVimXVBbdwCVHVE3ccqw/viewform" target="_blank" style="color: #ff6600;">File an issue</a>';
            proxyUrl = 'https://leedsu.uk/'; // Set the correct proxy URL for betterProxy
            startCountdown();
        }
    }

    // Close the popup
    function closePopup() {
        document.querySelector('.popup-overlay').style.display = 'none';
    }

    // Start the countdown before showing the "Go" button
    function startCountdown(proxyType) {
        let countdown = 5;
        const countdownElement = document.getElementById('countdown');
        const goButton = document.getElementById('go-button');
        
        const interval = setInterval(() => {
            countdownElement.textContent = `Click Go in ${countdown} seconds...`;
            countdown--;
            if (countdown < 0) {
                clearInterval(interval);
                goButton.style.display = 'inline-block'; // Show the "Go" button after countdown

                if (proxyType === 'openProxy') {
                    goButton.onclick = openChatGPT; // Cloaking for openProxy
                } else {
                    goButton.onclick = openProxy; // Open proxy using dynamic URL for other proxies
                }
            }
        }, 1000);
    }

    // Open the correct proxy when the "Go" button is clicked
    function openProxy() {
        window.open(proxyUrl, '_blank'); // Open the proxy in a new tab using the dynamic URL
        closePopup(); // Close the popup
    }

    // Cloaking function to open ChatGPT
    function openChatGPT() {
        var url = "https://use.spanishlearning.com.ar/";
        var win;

        if (url) {
            win = window.open('', 'Inbox'); // Create a new window with the name 'Inbox'
            win.document.title = "Inbox"; // Set the tab name to "Inbox"
            
            // Change the favicon
            var favicon = win.document.createElement('link');
            favicon.rel = 'icon';
            favicon.href = 'https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000'; // Favicon URL
            win.document.head.appendChild(favicon);

            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }
        closePopup(); // Close the popup after opening
    }

    // Expose functions globally
    window.showPopup = showPopup;
    window.closePopup = closePopup;
    window.openProxy = openProxy; // Ensure `openProxy` is accessible
});
