function openGameInCloakedTab(url) {
    // Create a new cloaked tab
    const win = window.open('about:blank', '_blank');

    // Ensure win is available before accessing its document
    if (win) {
        win.document.open();
        win.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Inbox</title>
                <link rel="icon" href="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" type="image/png">
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        width: 100vw;
                        height: 100vh;
                        overflow: hidden;
                    }
                    iframe {
                        width: 100vw;
                        height: 100vh;
                        border: none;
                        display: block;
                    }
                    .sidebar {
                        position: absolute;
                        top: 10%;
                        right: 0;
                        width: 30px;
                        height: 30px;
                        background-color: rgba(0, 0, 255, 0.8); /* Blue color */
                        border-radius: 8px 0 0 8px;
                        transition: width 0.3s ease;
                        overflow: hidden;
                        cursor: pointer;
                    }
                    .sidebar.expanded {
                        width: 100px;
                        height: 220px;
                    }
                    .sidebar img {
                        width: 20px;
                        margin: 5px;
                        display: block;
                    }
                    .sidebar ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        display: none;
                    }
                    .sidebar.expanded ul {
                        display: block;
                    }
                    .sidebar li {
                        text-align: left;
                        color: white;
                        padding: 10px;
                        cursor: pointer;
                    }
                    .sidebar li:hover {
                        background-color: rgba(255, 255, 255, 0.2);
                    }
                    .close-button {
                        text-align: center;
                        color: red;
                        padding: 10px;
                        cursor: pointer;
                    }
                    .close-button:hover {
                        background-color: rgba(255, 0, 0, 0.2);
                    }
                </style>
            </head>
            <body>
                <iframe id="cloakedFrame" src="${url}" sandbox="allow-same-origin allow-scripts" allowfullscreen></iframe>
                <div class="sidebar" onclick="toggleSidebar()">
                    <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" alt="Menu Icon">
                    <ul>
                        <li onclick="navigateIframe('/')">Home</li>
                        <li onclick="navigateIframe('/games.html')">Games</li>
                        <li onclick="navigateIframe('/apps.html')">Apps</li>
                        <li onclick="navigateIframe('/proxy.html')">Proxy</li>
                        <li class="close-button" onclick="closeMenu()">Close GUI</li>
                    </ul>
                </div>
                <script>
                    function toggleSidebar() {
                        const sidebar = document.querySelector('.sidebar');
                        sidebar.classList.toggle('expanded');
                    }

                    function closeMenu() {
                        if (confirm('Closing the menu will hide it. You will need to relaunch Jupiter to show the menu again. Do you want to proceed?')) {
                            const sidebar = document.querySelector('.sidebar');
                            sidebar.classList.remove('expanded');
                            // Hide the sidebar
                            sidebar.style.display = 'none';
                        }
                    }

                    function navigateIframe(newUrl) {
                        document.getElementById('cloakedFrame').src = newUrl;
                    }
                </script>
            </body>
            </html>
        `);
        win.document.close();
    } else {
        console.error("Failed to open cloaked tab.");
    }

    // Close the current tab
    window.close();
}