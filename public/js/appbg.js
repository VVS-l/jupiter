document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the background image URL from a data attribute in the body tag
    const bgImageUrl = document.body.getAttribute('data-background-url');
    if (bgImageUrl) {
        document.body.style.backgroundImage = `url('${bgImageUrl}')`;
    }

    // Set up the event listener for the button
    document.getElementById('copyLinkButton').addEventListener('click', function() {
        const link = document.getElementById('linkToCopy');
        link.select();
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    });
});
