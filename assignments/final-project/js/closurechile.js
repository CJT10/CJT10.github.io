var requestURL = "https://CJT10.github.io/assignments/final-project/data/closures.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function() {
  var templedata = request.response;

  var templeclosure = templedata["temple"];

  for (var i = 0; i < templeclosure.length; i++) {

    if (templeclosure[i].name == "Concepcion") {
      var closed = templeclosure[i].closures;
      
      for (var j = 0; j < closed.length; j++) {
        var listItem = document.createElement("li");
        listItem.textContent = closed[j];
        document.getElementById("closedlist").appendChild(listItem);
      }
    }
  }
};
