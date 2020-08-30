
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
        $("#cityName").append(name);

        //today's date
        var today = moment().format("dddd, MMMM Do YYYY");
        console.log(today);
        let date = $("<div>");
        date.innerHTML = today
        $("#todaysDate").append(date.innerHTML)
        
        //weather icon
        let icon = response.weather[0].icon;
        let iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(iconURL);
        let weatherIcon = $("<div>");
        weatherIcon.html("<img src='" + iconURL + "'>");
        $("#weatherIcon").append(weatherIcon);
        console.log(weatherIcon);
        
        //temperature
        let temperature = $("<div>");
        var fahrenheit = kelvin2F(response.main.temp);
        temperature.innerHTML = "Temperature: " + fahrenheit + "F";
        $("#temperature").append(temperature.innerHTML);
        
        //humidity
        let humidity = $("<div>");
        humidity.innerHTML = "Humidity: " + response.main.humidity;
        $("#humidity").append(humidity.innerHTML);
        
        //wind speed
        let windSpeed = $("<div>");
        windSpeed.innerHTML = "Wind Speed: " + response.wind.speed;
        $("#windSpeed").append(windSpeed.innerHTML);

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
        uvIndex.innerHTML = "UV Index: " + uvResponse.value;
        $("#uvIndex").append(uvIndex.innerHTML);
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
        var date1 = $("<div>");
        date1.text(fcstResponse.list[7].dt_txt);
        $("#forecastDate1").append(date1);
        
        //weather icon
        let day1Icon = fcstResponse.list[7].weather[0].icon;
        let day1IconURL = "http://openweathermap.org/img/wn/" + day1Icon + "@2x.png";
        console.log(day1IconURL);
        let day1WeatherIcon = $("<div>");
        day1WeatherIcon.html("<img src='" + day1IconURL + "'>");
        $("#forecastIcon1").append(day1WeatherIcon);
        //temperature
        let day1Temp = $("<div>");
        var day1F = kelvin2F(fcstResponse.list[7].main.temp);
        day1Temp.innerHTML = "Temperature: " + day1F + "F";
        $("#forecastTemp1").append(day1Temp.innerHTML);
        //humidity
        let day1Humidity = $("<div>");
        day1Humidity.innerHTML = "Humidity: " + fcstResponse.list[7].main.humidity;
        $("#forecastHumidity1").append(day1Humidity.innerHTML);

        //For Day 2
         //date
         let date2 = $("<div>");
         date2.text(fcstResponse.list[15].dt_txt);
         $("#forecastDate2").append(date2);
         
         //weather icon
         let day2Icon = fcstResponse.list[15].weather[0].icon;
         let day2IconURL = "http://openweathermap.org/img/wn/" + day2Icon + "@2x.png";
         console.log(day2IconURL);
         let day2WeatherIcon = $("<div>");
         day2WeatherIcon.html("<img src='" + day2IconURL + "'>");
         $("#forecastIcon2").append(day2WeatherIcon);
         //temperature
         let day2Temp = $("<div>");
         var day2F = kelvin2F(fcstResponse.list[15].main.temp);
         day2Temp.innerHTML = "Temperature: " + day2F + "F";
        $("#forecastTemp2").append(day2Temp.innerHTML);
 
         //humidity
         let day2Humidity = $("<div>");
        day2Humidity.innerHTML = "Humidity: " + fcstResponse.list[15].main.humidity;
        $("#forecastHumidity2").append(day2Humidity.innerHTML);
        
         //for day 3
          //date
        let date3 = $("<div>");
        date3.text(fcstResponse.list[23].dt_txt);
        $("#forecastDate3").append(date3);
        
        //weather icon
        let day3Icon = fcstResponse.list[23].weather[0].icon;
        let day3IconURL = "http://openweathermap.org/img/wn/" + day3Icon + "@2x.png";
        console.log(day3IconURL);
        let day3WeatherIcon = $("<div>");
        day3WeatherIcon.html("<img src='" + day3IconURL + "'>");
        $("#forecastIcon3").append(day3WeatherIcon);
        //temperature
        let day3Temp = $("<div>");
         var day3F = kelvin2F(fcstResponse.list[23].main.temp);
         day3Temp.innerHTML = "Temperature: " + day3F + "F";
        $("#forecastTemp3").append(day3Temp.innerHTML);

        //humidity
        let day3Humidity = $("<div>");
        day3Humidity.innerHTML = "Humidity: " + fcstResponse.list[23].main.humidity;
        $("#forecastHumidity3").append(day3Humidity.innerHTML);

        //for day 4
         //date
         let date4 = $("<div>");
         date4.text(fcstResponse.list[31].dt_txt);
         $("#forecastDate4").append(date4);
         
         //weather icon
         let day4Icon = fcstResponse.list[31].weather[0].icon;
         let day4IconURL = "http://openweathermap.org/img/wn/" + day4Icon + "@2x.png";
         console.log(day4IconURL);
         let day4WeatherIcon = $("<div>");
         day4WeatherIcon.html("<img src='" + day4IconURL + "'>");
         $("#forecastIcon4").append(day4WeatherIcon);
         //temperature
         let day4Temp = $("<div>");
         var day4F = kelvin2F(fcstResponse.list[31].main.temp);
         day4Temp.innerHTML = "Temperature: " + day4F + "F";
        $("#forecastTemp4").append(day4Temp.innerHTML);
 
         //humidity
         let day4Humidity = $("<div>");
        day4Humidity.innerHTML = "Humidity: " + fcstResponse.list[31].main.humidity;
        $("#forecastHumidity4").append(day4Humidity.innerHTML);

         //for day 5
          //date
        let date5 = $("<div>");
        date5.text(fcstResponse.list[39].dt_txt);
        $("#forecastDate5").append(date5);
        
        //weather icon
        let day5Icon = fcstResponse.list[39].weather[0].icon;
        let day5IconURL = "http://openweathermap.org/img/wn/" + day5Icon + "@2x.png";
        console.log(day5IconURL);
        let day5WeatherIcon = $("<div>");
        day5WeatherIcon.html("<img src='" + day5IconURL + "'>");
        $("#forecastIcon5").append(day5WeatherIcon);
        //temperature
        let day5Temp = $("<div>");
         var day5F = kelvin2F(fcstResponse.list[39].main.temp);
         day5Temp.innerHTML = "Temperature: " + day5F + "F";
        $("#forecastTemp5").append(day5Temp.innerHTML);

        //humidity
        let day5Humidity = $("<div>");
        day5Humidity.innerHTML = "Humidity: " + fcstResponse.list[39].main.humidity;
        $("#forecastHumidity5").append(day5Humidity.innerHTML);



    })

    //let searchHistory = JSON.parse(localStorage.getItem("search"));

    //convert kelvin to fahrenheit
    function kelvin2F(K) {
        return Math.floor((K - 273.15) *1.8 +32);
    }

    //click event to show search history
    //let numberOfSearch = $("#searchCity").val();
    //$("#searchBtn").on("click", function(){
       //for(i = 0; i < numberOfSearch.length; i++){
           //let history = $("<div>");
           //history.text(response.name);
           //$("searchHistory").prepend(history);
       //}    
       
        
        //renderSearchHistory();
    


});
