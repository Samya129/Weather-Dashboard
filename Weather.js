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
      });
    $("").text("<br><hr>"+ location)
    $("").prepend("<br> <hr>"+ location);
  });
  
$(".date").text(luxon.DateTime.local().toLocaleString({
  weekday: "long",
  month: "long",
  day: "2-digit",
}));
  $(".city").html("<h1>" + response.name + " Weather Details</h1>");

  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
  console.log("Temperature (F): " + tempF);

  $(".humidity").text("Humidity: " + response.main.humidity);
  console.log("Humidity: " + response.main.humidity);
  