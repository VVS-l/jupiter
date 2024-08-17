<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Results - Jupiter</title>
    <link rel="stylesheet" href="css/homestyle.css">
</head>
<body>
    <!-- Header with Blur Effect -->
    <header class="blur-header">
        <div class="logo">
            <a href="index.html">
                <img src="https://i.postimg.cc/FKCJQmP0/jupi-ter.png" alt="Jupiter Logo">
            </a>
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
                    <form action="search.html" method="GET" class="search-bar">
                        <input type="text" name="query" placeholder="Search..." required>
                        <button type="submit">
                            <img src="https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF" alt="Search">
                        </button>
                    </form>
                </li>
            </ul>
        </nav>
    </header>

    <!-- Main Content for Search Results -->
    <main>
        <section class="main-section">
            <h1>Search Results for "<span id="search-query"></span>"</h1>
            <div id="results"></div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Jupiter. All rights reserved.</p>
    </footer>

    <!-- JavaScript to handle search and display results -->
    <script src="search.js"></script>
    <script>
        // Call the performSearch function when the page loads
        performSearch();
    </script>
</body>
</html>
