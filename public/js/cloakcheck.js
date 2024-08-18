// cloakcheck.js

document.addEventListener('DOMContentLoaded', () => {
    // Check the document title
    if (document.title === 'Inbox') {
        console.log('The site is correctly cloaked with title "Inbox".');
    } else {
        console.error('⚠️ The site is not cloaked properly. Expected title "Inbox", but found: ' + document.title);
        // Optionally, display a message to the user
        alert('⚠️ The site is not cloaked properly. Please use the recommended launcher.');
    }
});
