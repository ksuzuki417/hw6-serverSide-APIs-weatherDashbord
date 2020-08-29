
$("#searchBtn").on("click", function getWeather(){

    //create variables
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

        //today's date
        var today = moment().format("dddd, MMMM Do YYYY");
        console.log(today);
        let date = $("<div>");
        date.text(today)
        $("#currentWeather").append(date)
        
        //weather icon
        let icon = response.weather[0].icon;
        let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(iconURL);
        let weatherIcon = $("<div>");
        weatherIcon.html("<img src='" + iconURL + "'>");
        $("#currentWeather").append(weatherIcon);
        
        //temperature
        let temperature = $("<div>");
        var fahrenheit = kelvin2F(response.main.temp);
        temperature.text(fahrenheit);
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

        //For Day 1
        //date
        let date1 = $("<div>");
        date1.text(fcstResponse.list[7].dt_txt);
        $("#fiveDayForecast").append(date1);
        
        //weather icon
        let day1Icon = fcstResponse.list[7].weather[0].icon;
        let day1IconURL = "http://openweathermap.org/img/wn/" + day1Icon + "@2x.png";
        console.log(day1IconURL);
        let day1WeatherIcon = $("<div>");
        day1WeatherIcon.html("<img src='" + day1IconURL + "'>");
        $("#fiveDayForecast").append(day1WeatherIcon);
        //temperature
        let day1Temperature = $("<div>");
        var day1Fahrenheit = kelvin2F(fcstResponse.list[7].main.temp);
        day1Temperature.text(day1Fahrenheit);
        $("#fiveDayForecast").append(day1Temperature);

        //humidity
        let day1Humidity = $("<div>");
        day1Humidity.text(fcstResponse.list[7].main.humidity);
        $("#fiveDayForecast").append(day1Humidity);

        //For Day 2
         //date
         let date2 = $("<div>");
         date2.text(fcstResponse.list[15].dt_txt);
         $("#fiveDayForecast").append(date2);
         
         //weather icon
         let day2Icon = fcstResponse.list[15].weather[0].icon;
         let day2IconURL = "http://openweathermap.org/img/wn/" + day2Icon + "@2x.png";
         console.log(day2IconURL);
         let day2WeatherIcon = $("<div>");
         day2WeatherIcon.html("<img src='" + day2IconURL + "'>");
         $("#fiveDayForecast").append(day2WeatherIcon);
         //temperature
         let day2Temperature = $("<div>");
         var day2Fahrenheit = kelvin2F(fcstResponse.list[15].main.temp);
         day2Temperature.text(day2Fahrenheit);
         $("#fiveDayForecast").append(day2Temperature);
 
         //humidity
         let day2Humidity = $("<div>");
         day2Humidity.text(fcstResponse.list[15].main.humidity);
         $("#fiveDayForecast").append(day2Humidity);
        
         //for day 3
          //date
        let date3 = $("<div>");
        date3.text(fcstResponse.list[23].dt_txt);
        $("#fiveDayForecast").append(date3);
        
        //weather icon
        let day3Icon = fcstResponse.list[23].weather[0].icon;
        let day3IconURL = "http://openweathermap.org/img/wn/" + day3Icon + "@2x.png";
        console.log(day3IconURL);
        let day3WeatherIcon = $("<div>");
        day3WeatherIcon.html("<img src='" + day3IconURL + "'>");
        $("#fiveDayForecast").append(day3WeatherIcon);
        //temperature
        let day3Temperature = $("<div>");
        var day3Fahrenheit = kelvin2F(fcstResponse.list[23].main.temp);
        day3Temperature.text(day3Fahrenheit);
        $("#fiveDayForecast").append(day3Temperature);

        //humidity
        let day3Humidity = $("<div>");
        day3Humidity.text(fcstResponse.list[23].main.humidity);
        $("#fiveDayForecast").append(day3Humidity);

        //for day 4
         //date
         let date4 = $("<div>");
         date4.text(fcstResponse.list[31].dt_txt);
         $("#fiveDayForecast").append(date4);
         
         //weather icon
         let day4Icon = fcstResponse.list[31].weather[0].icon;
         let day4IconURL = "http://openweathermap.org/img/wn/" + day4Icon + "@2x.png";
         console.log(day4IconURL);
         let day4WeatherIcon = $("<div>");
         day4WeatherIcon.html("<img src='" + day4IconURL + "'>");
         $("#fiveDayForecast").append(day4WeatherIcon);
         //temperature
         let day4Temperature = $("<div>");
         var day4Fahrenheit = kelvin2F(fcstResponse.list[31].main.temp);
         day4Temperature.text(day4Fahrenheit);
         $("#fiveDayForecast").append(day4Temperature);
 
         //humidity
         let day4Humidity = $("<div>");
         day4Humidity.text(fcstResponse.list[31].main.humidity);
         $("#fiveDayForecast").append(day4Humidity);

         //for day 5
          //date
        let date5 = $("<div>");
        date5.text(fcstResponse.list[39].dt_txt);
        $("#fiveDayForecast").append(date5);
        
        //weather icon
        let day5Icon = fcstResponse.list[39].weather[0].icon;
        let day5IconURL = "http://openweathermap.org/img/wn/" + day5Icon + "@2x.png";
        console.log(day5IconURL);
        let day5WeatherIcon = $("<div>");
        day5WeatherIcon.html("<img src='" + day5IconURL + "'>");
        $("#fiveDayForecast").append(day5WeatherIcon);
        //temperature
        let day5Temperature = $("<div>");
        var day5Fahrenheit = kelvin2F(fcstResponse.list[39].main.temp);
        day5Temperature.text(day5Fahrenheit);
        $("#fiveDayForecast").append(day5Temperature);

        //humidity
        let day5Humidity = $("<div>");
        day5Humidity.text(fcstResponse.list[39].main.humidity);
        $("#fiveDayForecast").append(day5Humidity);



    })

    //let searchHistory = JSON.parse(localStorage.getItem("search"));

    //convert kelvin to fahrenheit
    function kelvin2F(K) {
        return Math.floor((K - 273.15) *1.8 +32);
    }

    //click event to show search history
    let numberOfSearch = $("#searchCity").val();

    $("#searchBtn").on("click", function(){
       for(i = 0; i < numberOfSearch; i++){
           let history = $("<div>");
           history.text(response.name);
           $("#searchHistory").append(history);
       }    
       
        
        //renderSearchHistory();
    })


});
