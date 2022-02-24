let p1, p2;

$('#clic').click(
function tin(){
  p1 = document.getElementById('point1').value;
  p2 = document.getElementById('point2').value;
  var poin1 = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [p1]
  }
};
var poin2 = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Point",
    "coordinates": [p2]
  }
};
var units = "miles";
  var points = {
  "type": "FeatureCollection",
  "features": [poin1, poin2]
};

//=points

var distance = turf.distance([78.5265468,17.413502], [78.5090268,17.3960607], units);
  document.getElementById('output').inneHTML = distance;
  console.log(distance.toFixed(1) + 'miles');
}
)