document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the background image URL from a data attribute in the body tag
    const bgImageUrl = document.body.getAttribute('data-background-url');
    if (bgImageUrl) {
        document.body.style.backgroundImage = `url('${bgImageUrl}')`;
    }
});
