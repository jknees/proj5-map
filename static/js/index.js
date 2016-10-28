var mymap = L.map('mapid').setView([44.04443, -123.07241], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'jknees.1p56j2p6',
    accessToken: 'pk.eyJ1IjoiamtuZWVzIiwiYSI6ImNpdXN3ODJlMzAwMnEyeW9lYXNzMW03YTYifQ.xdgJCTLepTJvKmpdB06mBA'
}).addTo(mymap);

mymap.locate({
	setView: true
}).on('locationfound', function(e) {
	yourLatLng = L.latLng(e.latittude, e.longitude)
	L.marker(yourLatLng).addTo(mymap).bindPopup('Your Location')
}).on('locationerror', function(e) {
	yourLatLng = L.latLng(44.04443, -123.07241)
	L.marker(yourLatLng).addTo(mymap).bindPopup('Your Location')
});

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

{% for place in session.Places%}
	var {{place.name}} = L.marker([{{place.lat}}, {{place.lon}}]).addTo(mymap).bindPopup({{place.name}});
