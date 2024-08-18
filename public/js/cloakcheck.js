<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inbox</title> <!-- This should be set by the launcher if the site is cloaked -->
    <style>
        /* Your existing styles */
    </style>
</head>
<body>
    <!-- Your existing content -->

    <script>
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
    </script>
</body>
</html>
