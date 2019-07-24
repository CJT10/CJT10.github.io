let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  "https://api.openweathermap.org/data/2.5/weather?lat=-48.856613&lon=2.352222&units=imperial&APPID=c56d49a01e77b339a90a3bf2c7dcf667";

weatherRequest.open("Get", apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  document.getElementById("description").innerHTML =
    weatherData.weather[0].description;
  document.getElementById("cc-temp").innerHTML = Math.round(
    weatherData.main.temp
  );
  document.getElementById("humidity").innerHTML = weatherData.main.humidity;
  document.getElementById("windspeed").innerHTML = weatherData.wind.speed;


  //CALCULATE WIND CHILL//
  var cur_temp = weatherData.main.temp;
  var wspeed = weatherData.wind.speed;
  var chill =
    35.74 +
    0.6215 * cur_temp -
    35.75 * Math.pow(wspeed, 0.16) +
    0.4275 * cur_temp * Math.pow(wspeed, 0.16);
  var c = Math.round(chill);

  document.getElementById("windchill").innerHTML = c;
};

//  TEMPLE CLOSING  //
var requestURL = "https://CJT10.github.io/assignments/final-project/data/closures.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var templedata = request.response;

  var templeclosure = templedata["temple"];

  for (var i = 0; i < templeclosure.length; i++) {

    if (templeclosure[i].name == "Paris") {
      var closed = templeclosure[i].closures;
      
      for (var j = 0; j < closed.length; j++) {
        var listItem = document.createElement("li");
        listItem.textContent = closed[j];
        document.getElementById("closedlist").appendChild(listItem);
      }
    }
  }
};
