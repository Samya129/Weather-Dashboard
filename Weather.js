var APIKey = "3351f058ad9dfc0e4631d2d16fcfdcff"
let searchButton = $("#searchButton");

$("#searchButton").on("click", function(event){
  alert("Works?")
  event.preventDefault();
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
        $(".city").html("<h1>" + response.name + weatherArt + " Weather Forecast</h1>");

        $(".date").text(luxon.DateTime.local().toLocaleString({
          weekday: "long",
          month: "long",
          day: "2-digit",
        }));
    
      var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
      console.log("Temperature (F): " + tempF);

      $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
      console.log("Wind Speed: " + response.wind.speed + "MPH");

      $(".humidity").text("Humidity: " + response.main.humidity + "%");
      console.log("Humidity: " + response.main.humidity + "%");

      let weatherArt = weatherArt.weather[0].icon;
      let art = document.createElement("img");
      art.src = `http://openweathermap.org/img/w/${weatherArt}.png`;

      
    // $("").text("<br><hr>"+ location).val()
    // $("").prepend("<br> <hr>"+ location);

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

    var uvIndex= response.value;
    
    if( uvIndex <= 2){
      $(this).addClass("Low");
    } else if (uvIndex = 3 || uvIndex <= 5){
      $(this).addClass("Moderate");
    } else if (uvIndex = 6 || uvIndex <= 7){
      $(this).addClass("High");
    } else (uvIndex = 8 || uvIndex <= 10){
      $(this).addClass("Very-high");
    }
    }
    )});
  });

      // var randomPlace = ""; //generating a for loop or maybe a for each? for each place clicked might need to add document.ready
      //   for (i = 0; i < 9; i++){
      //       var random = Math.floor(Math.random() * 10);
      //       randomPlace = random + randomPlace
      //   }