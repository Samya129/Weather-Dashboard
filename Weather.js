var APIKey = "3351f058ad9dfc0e4631d2d16fcfdcff"
let searchButton = $("#searchButton");

$("#searchButton").on("click", function(event){
  alert("Works?")
  event.preventDefault();
  var cityName = $("#searchInput").val();
  console.log($("#searchInput").val())
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q="+ cityName +"&appid=" + APIKey;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // Display response in the console log
        console.log(response)
      });
    $("").text
    $("").prepend("<br> <hr>"+ cityName);
  });