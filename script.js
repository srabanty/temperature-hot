const weatherApi = {
    key : "81b49d8794cc9e1b712f231924687eb8",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

const cityName = document.getElementById('cityName');
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',function(){
    document.getElementById('weather-status').style.display = "block";
    console.log(cityName.value);
    getWeatherReport(cityName.value);
    
    cityName.value = "";
})

//Get Weather Report 
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    })
    .then(showWeatherReport)
}

//showWeatherReport
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${(weather.main.temp)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    //image icon
    if(weather.weather[0].main == 'clear'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/01d@2x.png";
    }
    else if(weather.weather[0].main == 'Clouds'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/02d@2x.png";
    }
    else if(weather.weather[0].main == 'Mist' || weather.weather[0].main == 'Smoke' || weather.weather[0].main == 'Haze' || weather.weather[0].main == 'Fog' || weather.weather[0].main == 'Sand'||weather.weather[0].main == 'Dust'||weather.weather[0].main == 'Ash'||weather.weather[0].main == 'Squall'||weather.weather[0].main == 'Tornado'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/50d@2x.png";
    }
    else if(weather.weather[0].main == 'Snow'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/13d@2x.png";
    }
    else if(weather.weather[0].main == 'Rain'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/10d@2x.png";
    }
    else if(weather.weather[0].main == 'Drizzle'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/09d@2x.png";
    }
    else if(weather.weather[0].main == 'Thunderstorm'){
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/11d@2x.png";
    }

}