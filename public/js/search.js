// search.js

function performSearch() {
    const query = document.getElementById('search-query').value.toLowerCase();
    if (!query) return;

    const results = {
        games: [],
        apps: [],
        proxy: []
    };

    // Dummy data for demonstration
    const games = [
        { title: "Space Invaders", link: "games.html#space-invaders" },
        { title: "Asteroids", link: "games.html#asteroids" }
    ];

    const apps = [
        { title: "Photo Editor", link: "apps.html#photo-editor" },
        { title: "Calculator", link: "apps.html#calculator" }
    ];

    const proxy = [
        { title: "Web Proxy", link: "proxy.html#web-proxy" },
        { title: "VPN Service", link: "proxy.html#vpn-service" }
    ];

    // Search through games
    games.forEach(item => {
        if (item.title.toLowerCase().includes(query)) {
            results.games.push(item);
        }
    });

    // Search through apps
    apps.forEach(item => {
        if (item.title.toLowerCase().includes(query)) {
            results.apps.push(item);
        }
    });

    // Search through proxy services
    proxy.forEach(item => {
        if (item.title.toLowerCase().includes(query)) {
            results.proxy.push(item);
        }
    });

    displayResults(results, query);
}

function displayResults(results, query) {
    const resultsContainer = document.getElementById('search-results');
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
