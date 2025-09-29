function getLocation(latitudeFieldId, longitudeFieldId) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById(latitudeFieldId).value = position.coords.latitude;
            document.getElementById(longitudeFieldId).value = position.coords.longitude;
        }, function(error) {
            alert("Error: " + error.message);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}