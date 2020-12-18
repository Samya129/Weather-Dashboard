var APIKey = "3351f058ad9dfc0e4631d2d16fcfdcff"
let searchButton = $("#searchButton");
var cityBtn = $("#buttonList button")
var location;

$("#searchButton").on("click", function(event){
  alert("Works?")
  event.preventDefault(); //how to add an enter keyup or down function with on click... 
  $('.showFiveDayForecast').empty(); //Prevents 
  var location = $("#searchInput").val();
  //console.log($("#searchInput").val())
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
      //console.log("Temperature (F): " + tempF);

      $(".windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
      //console.log("Wind Speed: " + response.wind.speed + "MPH");

      $(".humidity").text("Humidity: " + response.main.humidity + " %");
      //console.log("Humidity: " + response.main.humidity + "%");
      
    $("#buttonList").append("<button>"+ response.name +"</button>");
    event.preventDefault();
    
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
    //console.log("uvIndex: " + response.value);
    uvIndexEl = $(".uvIndex")
    var uvIndex= response.value;
    //console.log(uvIndex)
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
      //Card Display
      for(i=0; i< 5; i++){
        var date = new Date(response.daily[i+1].dt * 1000).toLocaleDateString('en-US',{
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
        })
        
        let weatherArt2 = response.daily[i].weather[0].icon
        var iconurl2 = "https://openweathermap.org/img/w/" + weatherArt2 + ".png";
        $("#weatherArt").attr('src', iconurl2);

        var highTemp = "High:" + response.daily[i].temp.max + "°F"
        var lowTemp = "Low:" + response.daily[i].temp.min + "°F"
        var humidity = "Humidity: " + response.daily[i].humidity + "%"
        
        $(".showFiveDayForecast").append(`
        <div class="col-md-2">
        
          <div class="card-body">
          <p class="card-text">${date}</p>
          <img src="${iconurl2}"/>
            <p class="card-text">${highTemp}</p>
            <p class="card-text">${lowTemp}</p>
            <p class="card-text">${humidity}</p>
          </div>
        </div>
      </div>
        `)

      }
       
    });
    
    });
    
  });
})
//Local storage area
$("#buttonList").on("click", function(event){
  alert("Hey you!")
  // console.log(event)
  event.preventDefault();
//  let cityButton = $(this).siblings("#buttonList").val();
//   console.log(cityButton)

 let cityInfo= $(this).children("#searchInput").val();
console.log(this)
  localStorage.setItem("city Name",cityInfo);
// renderLastRegistered();
 });

 function history (){
 $("#buttonList button").each(function(){
   let history = localStorage.getItem(location);
   let 

   if (history !== null) {
    $(this).siblings("#buttonList").val(history);
  }
 })
 }

history();
function displayWeather(){

}