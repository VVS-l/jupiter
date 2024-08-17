<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proxy - Jupiter</title>
    <link rel="stylesheet" href="css/proxystyle.css">
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header with Blur Effect -->
    <header class="blur-header">
        <div class="logo">
            <img src="https://i.postimg.cc/FKCJQmP0/jupi-ter.png" alt="Jupiter Logo">
        </div>
        <nav>
            <ul>
                <li class="dropdown">
                    <a href="#" id="dropdown-toggle">
                        <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" alt="Sections" class="dropdown-icon">
                    </a>
                    <div class="dropdown-content" id="dropdown-content">
                        <a href="games.html">Games</a>
                        <a href="apps.html">Apps</a>
                        <a href="proxy.html">Proxy</a>
                    </div>
                </li>
                <li class="search-bar">
                    <input type="text" placeholder="Search...">
                    <button>
                        <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF" alt="Search">
                    </button>
                </li>
            </ul>
        </nav>
    </header>

    <!-- Main Content with Rounded Frames -->
    <main>
        <section class="main-section">
            <div class="blurred-frame frame-top">
                <div class="welcome-message">🔒 Proxy Access 🔒</div>
                <div class="proxy-description">
                    <h3>About the Proxy</h3>
                    <hr class="proxy-line">
                    <p>The proxy service allows you to access websites and content securely and privately. It acts as an intermediary between your device and the internet, hiding your IP address and encrypting your connection.</p>
                    <p>To use the proxy:</p>
                    <ol>
                        <li>Click the "Open Proxy" button below.</li>
                        <li>You'll be redirected to the proxy service where you can browse securely.</li>
                    </ol>
                </div>
            </div>

            <div class="button-container">
                <div class="blurred-frame button-frame">
                    <button class="button" onclick="openGameInCloakedTab('https://javasquript.photographs.gs')">Open Proxy</button>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Jupiter. All rights reserved.</p>
    </footer>

    <!-- JavaScript for Dropdown Toggle -->
    <script>
        document.getElementById('dropdown-toggle').addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownContent = document.getElementById('dropdown-content');
            dropdownContent.classList.toggle('show');
        });

        function openGameInCloakedTab(url) {
            // Create a new cloaked tab
            const win = window.open('about:blank', '_blank');
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
                    </style>
                </head>
                <body>
                    <iframe src="${url}" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" allowfullscreen></iframe>
                </body>
                </html>
            `);
            win.document.close();

            // Close the current tab
            window.close();
        }
    </script>
</body>
</html>

// Function to fetch game data
async function fetchGameData(folderPath) {
    try {
        const response = await fetch(`${folderPath}/info.txt`);
        if (!response.ok) throw new Error(`Failed to fetch ${folderPath}/info.txt`);
        const data = await response.text();
        const gameInfo = {};
        
        data.split('\n').forEach(line => {
            const [key, value] = line.split(':');
            if (key && value) {
                gameInfo[key.trim()] = value.trim();
            }
        });
        return gameInfo;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}
// Function to load games
async function loadGames() {
    const gameFolders = ['/games/SmashKarts', '/games/Minecraft', '/games/Uno']; // Only Smash Karts for now
    for (const folderPath of gameFolders) {
        const gameInfo = await fetchGameData(folderPath);
        if (!gameInfo) {
            console.error(`No game info found for ${folderPath}`);
            continue;
        }
        const gameImageSrc = `${folderPath}/game.png`;
        const gameCategory = (gameInfo.Genre && gameInfo.Genre.toLowerCase().replace(/\s+/g, '-') + '-games') || 'unknown-games';
        const gameGrid = document.querySelector(`#${gameCategory} .game-grid`);
        if (!gameGrid) {
            console.error(`No game grid found for category: ${gameCategory}`);
            continue;
        }
        const gameThumbnail = document.createElement('div');
        gameThumbnail.className = 'game-thumbnail';
        const img = document.createElement('img');
        img.src = gameImageSrc;
        img.alt = gameInfo.Name || 'Game Thumbnail';
        const title = document.createElement('p');
        title.textContent = gameInfo.Name || 'Unknown Title';
        gameThumbnail.appendChild(img);
        gameThumbnail.appendChild(title);
        gameGrid.appendChild(gameThumbnail);
        // Make the game thumbnail clickable
        gameThumbnail.onclick = () => openGameInCloakedTab(gameInfo.URL);
    }
}
// Load the games when the page is loaded
window.addEventListener('load', loadGames);
