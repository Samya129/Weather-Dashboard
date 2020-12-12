//var cityName = ""
//var APIKey = "3351f058ad9dfc0e4631d2d16fcfdcff"
//var queryURL = "api.openweathermap.org/data/2.5/weather?" + "q=London,uk&appid=" + APIKey;
//"https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={3351f058ad9dfc0e4631d2d16fcfdcff}" + cityName + ""

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response)
    
//     console.log(queryURL);

//         // Log the resulting object
//         console.log(response);

//         // Transfer content to HTML
//         $(".city").html("<h1>" + response.name + " Weather Details</h1>");
//         $(".wind").text("Wind Speed: " + response.wind.speed);
//         $(".humidity").text("Humidity: " + response.main.humidity);
        
//         // Convert the temp to fahrenheit
//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;

//         // add temp content to html
//         $(".temp").text("Temperature (K) " + response.main.temp);
//         $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

//         // Log the data in the console as well
//         console.log("Wind Speed: " + response.wind.speed);
//         console.log("Humidity: " + response.main.humidity);
//         console.log("Temperature (F): " + tempF);
//   });
  let clickMe = $("#clickMe");
  $("#clickMe").on("click", function(){
alert("Search button works!");

  });
