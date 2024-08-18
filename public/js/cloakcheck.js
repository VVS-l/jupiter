document.addEventListener('DOMContentLoaded', () => {
    // Delay the check by 2 seconds (2000 milliseconds)
    setTimeout(() => {
        // Check if the element with class 'test-element' exists
        const element = document.querySelector('.test-element');
        
        if (element) {
            console.log('The test element exists. The site is cloaked using the launcher.');
        } else {
            console.error('⚠️ The test element does not exist. The site is not cloaked properly.');
        }
    }, 2000); // Change 2000 to the desired delay in milliseconds
});
