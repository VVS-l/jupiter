document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            console.log('The iframe exists. The site is properly cloaked.');
        } else {
            console.error('⚠️ The iframe does not exist. The site is not cloaked properly.');
        }
    }, 2000); // Adjust delay as needed
});
