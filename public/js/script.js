// Function to open a game in a cloaked tab
function openGameInCloakedTab(url) {
    const win = window.open('about:blank', '_blank');

    if (win) {
        win.document.open();
        win.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Edpuzzle</title>
                <link rel="icon" href="https://i.postimg.cc/LXChv87v/EDP.png" type="image/png">
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
                <iframe 
                    id="cloakedFrame" 
                    src="${url}" 
                    sandbox="allow-same-origin allow-scripts allow-pointer-lock" 
                    allowfullscreen 
                    allow="pointer-lock">
                </iframe>
            </body>
            </html>
        `);
        win.document.close();
    } else {
        console.error("Failed to open cloaked tab.");
    }
}

// Function to fetch game data from info.txt
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

// Function to load games from the serverless function
async function loadGames() {
    try {
        // Fetch the list of game folders from the gamehandler API
        const response = await fetch('/api/gamehandler');
        if (!response.ok) throw new Error('Failed to fetch game folders');
        const gameFolders = await response.json();

        for (const folderName of gameFolders) {
            const folderPath = `/public/games/${folderName}`;
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
    } catch (error) {
        console.error('Error loading games:', error.message);
    }
}

// Load the games when the page is loaded
window.addEventListener('load', loadGames);
