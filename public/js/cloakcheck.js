document.addEventListener('DOMContentLoaded', () => {
    const testElement = document.querySelector('.test-element');
    if (testElement) {
        console.log('The site is correctly cloaked using the launcher.');
    } else {
        console.error('⚠️ The site is not cloaked properly. Test element not found.');
		alert('⚠️ The site is not cloaked properly. Please use the recommended launcher.');
    }
});
