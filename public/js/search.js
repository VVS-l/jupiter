document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const query = document.getElementById('search-input').value.trim();
    if (query) {
        // Redirect to search.html with the query as a parameter
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    }
});
