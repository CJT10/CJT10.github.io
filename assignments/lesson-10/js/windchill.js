


var t = parseInt(document.getElementById("high").innerHTML);
var s = parseInt(document.getElementById("windspeed").innerHTML);
var chill = (35.74 + (0.6215*t) - 35.75* Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
var c = chill.toFixed(1);

document.getElementById("windchill").innerHTML = c;

