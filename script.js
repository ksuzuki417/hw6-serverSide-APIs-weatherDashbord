
$("#searchBtn").on("click", function(){
    let cityName = $("#searchCity").val();

    var apiKey = "fb1261b0f3ac4a566912fe67708cee92";


    //current weather URL
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        //city name
        let name = $("<div>");
        name.text(response.name);
        $("#currentWeather").append(name);
        
        //weather icon
        let icon = response.weather[0].icon;
        let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(iconURL);
        let weatherIcon = $("<div>");
        weatherIcon.html("<img src='" + iconURL + "'>");
        $("#currentWeather").append(weatherIcon);
        
        //temperature
        let temperature = $("<div>");
        temperature.text(response.main.temp);
        $("#currentWeather").append(temperature);
        
        //humidity
        let humidity = $("<div>");
        humidity.text(response.main.humidity);
        $("#currentWeather").append(humidity);
        
        //wind speed
        let windSpeed = $("<div>");
        windSpeed.text(response.wind.speed);
        $("#currentWeather").append(windSpeed);

        //latitude element
        let latEl = response.coord.lat;
        console.log(latEl);

        //longitude element
        let lonEl = response.coord.lon;
        console.log(lonEl);

        //UV index URL
        let uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + latEl + "&lon=" + lonEl;

        $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function(uvResponse){
            console.log(uvResponse);

        //UV index
        let uvIndex = $("<div>");
        uvIndex.text(uvResponse.value);
        $("#currentWeather").append(uvIndex);
        })
    })

    //5 day forecast
    let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;

    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function(fcstResponse){
        console.log(fcstResponse);
    })

})