document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Check if the body has the specific inline style set by the launcher
        const body = document.querySelector('body');
        if (body && body.style.margin === '0px' && body.style.height === '100vh') {
            console.log('The site is properly cloaked.');
        } else {
            console.error('⚠️ The site is not cloaked properly.');
        }
    }, 2000); // Adjust delay as needed
});
