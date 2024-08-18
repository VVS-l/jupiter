<script>
  // Function to check for cloaking query parameter
  function checkIfCloked() {
    var urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('cloaked')) {
      // User did not come through the launcher
      document.body.innerHTML = '<h1>⚠️ Please use the launcher to access this site.</h1>';
      document.body.style.backgroundColor = '#000'; // Adjust as needed
      return;
    }
  }

  // Run the check on page load
  window.onload = checkIfCloked;
</script>
