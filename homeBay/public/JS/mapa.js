
var map = L.map('map').setView([39.65, -7.50], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
maxZoom: 10,
id: 'mapbox.streets',
accessToken: 'ADD MAPBOX ACCESS TOKEN HERE'
}).addTo(map);


L.marker([38.1781676, -8.1024168]).addTo(map)
.bindPopup("<b>Hello world!</b><br/>I am a popup.").openPopup();

L.marker([40.9281676, -8.5024168]).addTo(map)
.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.marker([38.7981676, -9.3024168]).addTo(map)
.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.marker([38.7181676, -8.1324168]).addTo(map)
.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();




     
