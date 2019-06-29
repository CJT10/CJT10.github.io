// SODA SPRINGS ID //
let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  'https://api.openweathermap.org/data/2.5/weather?id=5678757&units=imperial&APPID=c56d49a01e77b339a90a3bf2c7dcf667';

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  document.getElementById('description').innerHTML = weatherData.weather[0].description;
  document.getElementById("cc-temp").innerHTML = Math.round(weatherData.main.temp);
  document.getElementById("humidity").innerHTML = weatherData.main.temp_max;
  document.getElementById("windspeed").innerHTML = weatherData.wind.speed;

  //  ICON PICTURE //
  let icon =
    "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
  let desc = weatherData.weather[0].description;

  document.getElementById("cc-img").setAttribute("src", icon);
  document.getElementById("cc-img").setAttribute("alt", desc);

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
}
  // FORECAST //
  let forecastRequest = new XMLHttpRequest();

  forecastRequest.open('Get', 'https://api.openweathermap.org/data/2.5/forecast?id=5678757&units=imperial&APPID=c56d49a01e77b339a90a3bf2c7dcf667', true);
  forecastRequest.send();
  
 forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

  



    document.getElementById("forecasttemp").innerHTML = forecastData.list[0].main.temp;



  }
