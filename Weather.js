var APIKey = "3351f058ad9dfc0e4631d2d16fcfdcff"
let searchButton = $("#searchButton");

$("#searchButton").on("click", function(event){
  alert("Works?")
  event.preventDefault(); //how to add an enter keyup or down function with on click... when weather info comes up its pink before click its the transparent background.
  var location = $("#searchInput").val();
  console.log($("#searchInput").val())
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q="+ location +"&appid=" + APIKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Display response in the console log
        console.log(response)
        $(".city").html("<h1>" + response.name + " Weather</h1>");

        $(".date").text(luxon.DateTime.local().toLocaleString({
          weekday: "long",
          month: "long",
          day: "2-digit",
        }));
    
      let weatherArt = response.weather[0].icon;
      let iconurl = "https://openweathermap.org/img/w/" + weatherArt + ".png";
      $("#weatherArt").attr('src', iconurl);
        
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(".tempF").text("Temperature: " + tempF.toFixed(2) + " °F");
      console.log("Temperature (F): " + tempF);

      $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
      console.log("Wind Speed: " + response.wind.speed + "MPH");

      $(".humidity").text("Humidity: " + response.main.humidity + " %");
      console.log("Humidity: " + response.main.humidity + "%");
      
    $("#buttonList").append("<button>"+ response.name +"</button>");
    //hr break into it 
    
    var lat = response.coord.lat
    var lon = response.coord.lon 

    var queryURL2 = 
    "https://api.openweathermap.org/data/2.5/uvi?" + 
    "lat=" + 
    lat + 
    "&lon=" + 
    lon +
    "&appid=" + 
    APIKey

    $.ajax({
    url: queryURL2, 
    method: "GET",
    }).then(function (response) {
    console.log(response)
    $(".uvIndex").text("uvIndex: " + response.value);
    console.log("uvIndex: " + response.value);
    uvIndexEl = $(".uvIndex")
    var uvIndex= response.value;
    if( uvIndex <= 2){
      uvIndexEl.addClass("Low");
      //ohio, new york example
    } else if (uvIndex >= 2 && uvIndex <= 5){
      uvIndexEl.addClass("Moderate");
      //florida example
    } else if (uvIndex >= 5 && uvIndex <= 7){
      uvIndexEl.addClass("High");
      //hawaii example
    } else {
      uvIndexEl.addClass("Very-high");
      //??
    }
    var queryURL3 = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts" + "&appid=" + APIKey; 

    $.ajax({
      url: queryURL3, 
      method: "GET",
      }).then(function (response) {
      console.log(response); 
      
    });
    
    });
    
  });
})