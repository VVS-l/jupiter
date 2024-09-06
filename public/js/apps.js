function openAppInCloakedTab(url) {
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
                <title>COPY LINK</title>
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
                <iframe id="cloakedFrame" src="${url}" sandbox="allow-same-origin allow-scripts allow-modals" allowfullscreen></iframe>
            </body>
            </html>
        `);
        win.document.close();
    } else {
        console.error("Failed to open cloaked tab.");
    }
}

// Function to fetch app data
async function fetchAppData(folderPath) {
    try {
        const response = await fetch(`${folderPath}/info.txt`);
        if (!response.ok) throw new Error(`Failed to fetch ${folderPath}/info.txt`);
        const data = await response.text();
        const appInfo = {};
        
        data.split('\n').forEach(line => {
            const [key, value] = line.split(':');
            if (key && value) {
                appInfo[key.trim()] = value.trim();
            }
        });
        return appInfo;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Function to load apps
async function loadApps() {
    const appFolders = ['/Apps/yewt', '/Apps/FMovies', '/Apps/Netflix', '/Apps/GFN', '/Apps/Discord', '/Apps/blol', '/Apps/Snapchat', '/Apps/TikTok', '/Apps/Instagram', '/Apps/x', '/Apps/Reddit', '/Apps/Tubi', '/Apps/quizit', '/Apps/TVApp']; // Replace with actual app folder paths

    for (const folderPath of appFolders) {
        const appInfo = await fetchAppData(folderPath);

        if (!appInfo) {
            console.error(`No app info found for ${folderPath}`);
            continue;
        }

        const appImageSrc = `${folderPath}/app.png`;
        const appCategory = (appInfo.Category && appInfo.Category.toLowerCase().replace(/\s+/g, '-') + '-apps') || 'other-apps';

        const appGrid = document.querySelector(`#${appCategory} .app-grid`);

        if (!appGrid) {
            console.error(`No app grid found for category: ${appCategory}`);
            continue;
        }

        const appThumbnail = document.createElement('div');
        appThumbnail.className = 'app-thumbnail';

        const img = document.createElement('img');
        img.src = appImageSrc;
        img.alt = appInfo.Name || 'App Thumbnail';

        const title = document.createElement('p');
        title.textContent = appInfo.Name || 'Unknown Title';

        appThumbnail.appendChild(img);
        appThumbnail.appendChild(title);
        appGrid.appendChild(appThumbnail);

        // Make the app thumbnail clickable
        appThumbnail.onclick = () => openAppInCloakedTab(appInfo.URL);
    }
}

// Load the apps when the page is loaded
window.addEventListener('load', loadApps);
