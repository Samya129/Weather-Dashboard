var APIKey = "3351f058ad9dfc0e4631d2d16fcfdcff"
let searchButton = $("#searchButton");

$("#searchButton").on("click", function(event){
  alert("Works?")
  event.preventDefault(); //how to add an enter keyup or down function with on click... 
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
    console.log(uvIndex)
    if( uvIndex <= 2){
      uvIndexEl.removeClass("Moderate");
      uvIndexEl.removeClass("High");
      uvIndexEl.removeClass("Very-high");
      uvIndexEl.addClass("Low");
      //ohio, new york example
    } else if (uvIndex >= 2 && uvIndex <= 5){
      uvIndexEl.removeClass("Low");
      uvIndexEl.removeClass("High");
      uvIndexEl.removeClass("Very-high");
      uvIndexEl.addClass("Moderate");
      //florida example
    } else if (uvIndex >= 5 && uvIndex <= 7){
      uvIndexEl.removeClass("Low");
      uvIndexEl.removeClass("Moderate");
      uvIndexEl.removeClass("Very-high");
      uvIndexEl.addClass("High");
      //hawaii example
    } else {
      uvIndexEl.removeClass("Low");
      uvIndexEl.removeClass("Moderate");
      uvIndexEl.removeClass("High");
      uvIndexEl.addClass("Very-high");
      
    }
    var queryURL3 = "https://api.openweathermap.org/data/2.5/onecall?" + "lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=current,minutely,hourly,alerts" + "&appid=" + APIKey; 

    $.ajax({
      url: queryURL3, 
      method: "GET",
      }).then(function (response) {
      console.log(response); 
      //Card display
      for(i=0; i< 5; i++){
        var highTemp = "High:" + response.daily[i].temp.max + " °F"
        var humidity = "Humidity: " + response.daily[i].humidity + " %"
        
        let weatherArt2 = response.daily[i].weather[0].icon
         var iconurl2 = "https://openweathermap.org/img/w/" + weatherArt2 + ".png";
         $("#weatherArt").attr('src', iconurl2);

        $(".showFiveDayForecast").append(`
        <div class="col-md-2">
        <div class="card" style="width: 9;">
          <div class="card-body">
            <p class="card-text">${highTemp}</p>
             <p class="card-text">${humidity}</p>
             <img src="${iconurl2}"/>
          </div>
        </div>
      </div>
        `)
        //Date?
        // <p class="card-text">${imageIcon}</p>
        // var imageIcon = response.daily[i].weather[i].icon
      }
       
    });
    
    });
    
  });
})

//Each button on-click, shows weather and saves to local storage?

// // $("").each(function(){}
// var cityBtn = $("#buttonList button")
// cityBtn.on("click", function() {
// //alert("This works?")

// let weather = $(this).siblings("#fontProp").val();

// //console.log(weather);

// localStorage.setItem(weather);
// });

// function storedInfo (){
// $(".date").each(function(){
//   let storedInfo = localStorage.getItem(weather);

//   if (storedInfo !== null) {
//     $(this).siblings("fontProp").val(storedInfo);
//    }
// })
// }
// //Call it here
// storedInfo();