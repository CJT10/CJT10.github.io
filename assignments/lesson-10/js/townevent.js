var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var towndata = request.response;

  var towns = towndata["towns"];

  for (var i = 0; i < towns.length; i++) {

    if (towns[i].name == "Preston") {
      var townEvents = towns[i].events;
      
      for (var j = 0; j < townEvents.length; j++) {
        var listItem = document.createElement("li");
        listItem.textContent = townEvents[j];
        document.getElementById("eventlist").appendChild(listItem);
      }
    }
  }
};
