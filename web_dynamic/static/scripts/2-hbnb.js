$(document).ready(function() {
    // Function to check the API status
    function checkAPIStatus() {
        $.ajax({
            type: 'GET',
            url: 'http://0.0.0.0:5001/api/v1/status/',
            success: function(response) {
                // If the status is "OK", add the class "available" to the div#api_status
                if (response.status === 'OK') {
                    $('#api_status').addClass('available');
                } else {
                    // If the status is not "OK", remove the class "available" from the div#api_status
                    $('#api_status').removeClass('available');
                }
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    }

    // Initial check of API status
    checkAPIStatus();

    // Periodically check API status every 5 seconds
    setInterval(checkAPIStatus, 5000);
});
