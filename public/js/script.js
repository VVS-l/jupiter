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
    const gameFolders = ['/games/MinecraftP','/games/SmashKartsP','/games/SmashKarts', '/games/Minecraft', '/games/Uno', '/games/1v1lolold', '/games/1v1lolnew', '/games/BaldiBasics', '/games/ClickerHeros', '/games/CrossyBacon', '/games/MicroWars', '/games/pixwars2', '/games/SubwaySurfers', '/games/ThumbFighter', '/games/TempleRun', '/games/Motox2', '/games/BBS2', '/games/CrazyCars', '/games/Blumgi', '/games/MaskedForces', '/games/SausageFlip', '/games/PacMan', '/games/BubbleShooter','/games/RS','/games/Slope','/games/1v1lololdP','/games/BR','/games/SR','/games/Happy','/games/Tabs','/games/BNB','/games/HIO','/games/CC','/games/C4','/games/PRIO2']; // Only Smash Karts for now
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
