// search.js

function performSearch() {
    // Get the query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    
    if (!query) return;

    const results = {
        games: [],
        apps: [],
        proxy: []
    };

    // Dummy data for demonstration
    const games = [
        { title: "Minecraft", link: "games.html#Minecraft" },
        { title: "Smash Karts", link: "games.html#SmashKarts" }
    ];

    const apps = [
        { title: "Useless Web", link: "apps.html#UselessWeb" },
    ];

    const proxy = [
        { title: "Proxy", link: "proxy.html" }
    ];

    // Search through games
    games.forEach(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
            results.games.push(item);
        }
    });

    // Search through apps
    apps.forEach(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
            results.apps.push(item);
        }
    });

    // Search through proxy services
    proxy.forEach(item => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
            results.proxy.push(item);
        }
    });

    displayResults(results, query);
}

function displayResults(results, query) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h3>Showing results for "${query}":</h3>`;

    if (results.games.length > 0) {
        resultsContainer.innerHTML += `<h4>Games:</h4><ul>${results.games.map(item => `<li><a href="${item.link}">${item.title}</a></li>`).join('')}</ul>`;
    }

    if (results.apps.length > 0) {
        resultsContainer.innerHTML += `<h4>Apps:</h4><ul>${results.apps.map(item => `<li><a href="${item.link}">${item.title}</a></li>`).join('')}</ul>`;
    }

    if (results.proxy.length > 0) {
        resultsContainer.innerHTML += `<h4>Proxy:</h4><ul>${results.proxy.map(item => `<li><a href="${item.link}">${item.title}</a></li>`).join('')}</ul>`;
    }

    if (results.games.length === 0 && results.apps.length === 0 && results.proxy.length === 0) {
        resultsContainer.innerHTML += `<p>No results found.</p>`;
    }
}
