var cityName = ""
var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={3351f058ad9dfc0e4631d2d16fcfdcff}" + cityName + ""

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    
  });