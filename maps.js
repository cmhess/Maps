
/*I haven't really had any trouble getting the map to show up on the screen, but I am still
 struggling with getting my functions to work properly. I tried some straight javascript and 
 jquery, but I can't seem to pass them correctly from the form to the variable and when I was
  getting closer I ran into issues where I got an error saying that map.setview was not a function
  even though there were plenty of examples of people using it that way on the web. Looking forward
  to seeing your solution. 

*/
var leafletMap = L.map( 'map' );

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxzoom: 19
    } ).addTo( leafletMap );

leafletMap.setView( [ 47.6205, -122.3493 ], 16 );



function changeLocation () {
var lat = document.getElementById("latitude");
var long = document.getElementById("longitude");
var zoomAmount = document.getElementById("zoom");
map.setView([lat, long], zoomAmount); };








   
    /*var lat = document.getElementById("latitude").value;
    var long = document.getElementById("longitude").value;
    var zoomAmount = document.getElementById("zoom").value;
 	var latlng = L.latlng(lat, long); 
 	L.map('map').setView([latlng],zoomAmount);*/
    

   




 	

  