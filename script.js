
$("#searchBtn").on("click", function(){
    let cityName = $("#searchCity").val();


    //current weather URL
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fb1261b0f3ac4a566912fe67708cee92";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })
})