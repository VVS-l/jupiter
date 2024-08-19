document.addEventListener('DOMContentLoaded', function() {
  // Function to get a cookie by name
  function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  // Check if the site was opened from the launcher
  if (getCookie('openedFromLauncher') === 'true') {
    console.log('Site was opened from the launcher.');
    // You can remove the cookie if you only want to check once
    document.cookie = 'openedFromLauncher=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  } else {
    console.error('The site was not opened from the launcher. Missing launcher cookie.');
  }
});
