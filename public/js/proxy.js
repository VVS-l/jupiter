document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dropdown-toggle').addEventListener('click', function(event) {
        event.preventDefault();
        const dropdownContent = document.getElementById('dropdown-content');
        dropdownContent.classList.toggle('show');
    });

    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    function showPopup(proxyType) {
        document.querySelector('.popup-overlay').style.display = 'flex';
        const proxyInfo = document.getElementById('proxy-info');
        const proxyLink = document.getElementById('proxy-link');
        const countdownDisplay = document.getElementById('countdown');

        if (proxyType === 'openProxy') {
            proxyInfo.innerHTML = "Proxy is opening soon, read if you have any issues. Some links will work, some won't. The proxies use networking from all over the world. If you are having any issues, click the help button, or <a href='https://docs.google.com/forms/d/e/1FAIpQLSdKy-YstHvXOqCakld55_PzHXU0tqPVimXVBbdwCVHVE3ccqw/viewform' target='_blank' style='color: #ff6600;'>File an issue</a>";
            startCountdown('openProxy');
        } else if (proxyType === 'betterProxy') {
            proxyInfo.innerHTML = "Proxy is opening soon, read if you have any issues. Some links will work, some won't. The proxies use networking from all over the world. If you are having any issues, click the help button, or <a href='https://docs.google.com/forms/d/e/1FAIpQLSdKy-YstHvXOqCakld55_PzHXU0tqPVimXVBbdwCVHVE3ccqw/viewform' target='_blank' style='color: #ff6600;'>File an issue</a>";
            startCountdown('betterProxy');
        }
    }

    let interval;

    function startCountdown(proxyType) {
        let countdown = 5;
        const countdownDisplay = document.getElementById('countdown');
        countdownDisplay.textContent = `Redirecting in ${countdown} seconds...`;

        interval = setInterval(() => {
            countdownDisplay.textContent = `Redirecting in ${countdown} seconds...`;
            countdown--;
            if (countdown < 0) {
                clearInterval(interval);
                if (proxyType === 'openProxy') {
                    openChatGPT();
                } else if (proxyType === 'betterProxy') {
                    window.open('https://leedsu.uk/', '_blank');
                }
                document.querySelector('.popup-overlay').style.display = 'none';
            }
        }, 1000);
        document.getElementById('skip-button').style.display = 'block';
    }

    function skipCountdown() {
        document.querySelector('.popup-overlay').style.display = 'none';
        if (typeof interval !== 'undefined') {
            clearInterval(interval);
        }
    }

    function closePopup() {
        document.querySelector('.popup-overlay').style.display = 'none';
        if (typeof interval !== 'undefined') {
            clearInterval(interval);
        }
    }

    function openChatGPT() {
        var url = "https://javasquript.photographs.gs/";
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
    }

    // Expose functions to global scope
    window.showPopup = showPopup;
    window.skipCountdown = skipCountdown;
    window.closePopup = closePopup;
});
