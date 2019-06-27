let weatherRequest = new XMLHttpRequest();
let apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c56d49a01e77b339a90a3bf2c7dcf667";

weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText)
    console.log(weatherData);
    document.getElementById('description').innerHTML = weatherData.weather[0].description;
    document.getElementById('high').innerHTML = weatherData.main.temp;
    document.getElementById('humidity').innerHTML = weatherData.main.temp_max;
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed;

    let icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);

}