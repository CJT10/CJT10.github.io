var townindex, townname;
var section = document.querySelector("section.townsection");

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  var towndata = request.response;
  showTown(towndata);
}

function showTown(jsonObj) {
  townname = jsonObj["towns"];

  for (townindex = 0; townindex < townname.length; townindex++){

        if (townname[townindex].name == 'Preston')
        populateTownInfo(townname[townindex]);
  }
  for (townindex = 0; townindex < townname.length; townindex++){

    if (townname[townindex].name == 'Soda Springs')
    populateTownInfo(townname[townindex]);
}
for (townindex = 0; townindex < townname.length; townindex++){

    if (townname[townindex].name == 'Fish Haven')
    populateTownInfo(townname[townindex]);
}

  
function populateTownInfo(jsonObj){
    var town = jsonObj;



    var myArticle = document.createElement("article");
    var myH2 = document.createElement("h2");
    var myPara1 = document.createElement("p");
    var myPara2 = document.createElement("p");
    var myPara3 = document.createElement("p");
    var myPara4 = document.createElement("p");
    
    var myImage = document.createElement("img");

    myH2.textContent = town.name;
    myPara1.textContent = town.motto;
    myPara2.textContent = "Year Founded: " + town.yearFounded;
    myPara3.textContent = "Population: " + town.currentPopulation;
    myPara4.textContent = "Annual Rainfall: " + town.averageRainfall;

    switch (myH2.textContent){
        case "Preston":
            myImage.src = "images/homePrestoncolby-thomas-85780-unsplash.jpg";
            break;

            case "Soda Springs":
            myImage.src = "images/homeSodaSpringsroberto-nickson-48064-unsplash.jpg";
            break;

            case "Fish Haven":
                myImage.src = "images/homeFishHaventyson-dudley-365313-unsplash.jpg";
                break;
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    
    myArticle.appendChild(myImage);
    myArticle.className = "townsection";

    section.appendChild(myArticle);
  
}
}