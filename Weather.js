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
  let searchButton = $("#searchButton");
  $("#searchButton").on("click", function(){
alert("Search button works!");

  });

  $(document).ready(function() {

    // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
    // ...jQuery click function...$ means selector
    //don't put var lottoNumber =  here bc then you will get a number that keeps adding to it.
    $("#random-button").on("click", function() {
      //alert("") here to check if on-click works
      var location = ""; 
      for (i = 0; i < 9; i++){
          var randomCity = Math.floor(Math.random() * 10); //need to incorporate input.value
          location = randomCity + location
          //console.log(lottoNumber)
      }
      $("").prepend("<br> <hr>"+ location);
      //prepend each searched city to 
    
  });
  })
