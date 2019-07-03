// SODA SPRINGS ID //
let weatherRequest = new XMLHttpRequest();
let apiURLstring =
  'https://api.openweathermap.org/data/2.5/weather?zip=83287,us&units=imperial&APPID=c56d49a01e77b339a90a3bf2c7dcf667';

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);

  document.getElementById('description').innerHTML = weatherData.weather[0].description;
  document.getElementById("cc-temp").innerHTML = Math.round(weatherData.main.temp);
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
}


  // FORECAST //
  let forecastRequest = new XMLHttpRequest();

  forecastRequest.open('Get', 'https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&units=imperial&APPID=c56d49a01e77b339a90a3bf2c7dcf667', true);
  forecastRequest.send();
  
  forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
    var dayofweek = 1;
    
    for(i=0; i<forecastData.list.length; i++){
    if (forecastData.list[i].dt_txt.includes('18:00:00')) {
        var maintemp = forecastData.list[i].main.temp;
    var temp = "temp" + dayofweek;
    document.getElementById(temp).innerHTML = Math.round(maintemp);
     
    var icon =
    "http://openweathermap.org/img/wn/" + forecastData.list[i].weather[0].icon + ".png";
  var desc = forecastData.list[i].weather[0].description;
        var forecastimage = "forecastimage" + dayofweek;
  document.getElementById(forecastimage).setAttribute("src", icon);
  document.getElementById(forecastimage).setAttribute("alt", desc);

    dayofweek++;

    
}
}
  }
