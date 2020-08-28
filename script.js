
$("#searchBtn").on("click", function(){
    let cityName = $("#searchCity").val();


    //current weather URL
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=fb1261b0f3ac4a566912fe67708cee92";

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
        let weatherIcon = $("<div>");
        weatherIcon.text(response.weather[0].icon);
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
        let uvURL = "https://api.openweathermap.org/data/2.5/uvi/?appid=fb1261b0f3ac4a566912fe67708cee92&lat=" + latEl + "&lon=" + longEl + 

        $.ajax({
            url: uvURL,
            method: "GET"
        }).then(function(uvResponse){
            console.log(uvResponse);

        //UV index
        let uvIndex = $("<div>");
        uvIndex.text(uvResponse[0].value);
        $("#currentWeather").append(uvIndex);
        })
    })

    //5 day forecast
    let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=fb1261b0f3ac4a566912fe67708cee92";

    $.ajax({
        url: forecastURL,
        method: "GET"
    }).then(function(fcstResponse){
        console.log(fcstResponse);
    })

})