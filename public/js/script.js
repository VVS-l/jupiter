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
                    width: 75px;
                    height: 200px;
                }
                .sidebar img {
                    width: 40px;
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
                .controls {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: 10%;
                    right: 0;
                    margin-right: 10px;
                }
                .exit-button {
                    background-color: red;
                    color: white;
                    border: none;
                    padding: 5px 10px;
                    cursor: pointer;
                    border-radius: 5px;
                    margin-left: 5px;
                }
            </style>
        </head>
        <body>
            <iframe src="${url}" sandbox="allow-same-origin allow-scripts" allowfullscreen></iframe>
            <div class="controls">
                <div class="sidebar" onclick="toggleSidebar()">
                    <img src="https://img.icons8.com/?size=100&id=36389&format=png&color=FFFFFF" alt="Menu Icon">
                </div>
                <button class="exit-button" onclick="closeMenu()">Exit</button>
            </div>
            <script>
                function toggleSidebar() {
                    const sidebar = document.querySelector('.sidebar');
                    sidebar.classList.toggle('expanded');
                }

                function closeMenu() {
                    const sidebar = document.querySelector('.sidebar');
                    sidebar.classList.remove('expanded');
                    sidebar.style.display = 'none'; // Hide the menu icon and sidebar
                    const exitButton = document.querySelector('.exit-button');
                    exitButton.style.display = 'none'; // Hide the exit button
                    alert("To reopen the menu, please refresh the page.");
                }
            </script>
        </body>
        </html>
    `);
    win.document.close();

    // Close the current tab
    window.close();
}


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
