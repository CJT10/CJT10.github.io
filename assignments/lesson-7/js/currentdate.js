
/* CURRENT DATE JAVASCRIPT */

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var day = weekday[d.getDay()];
var year = d.getFullYear();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = months[d.getMonth()];

document.getElementById("currentdate").innerHTML = day + ", " + month + " " + d.getDate() + " " + year;