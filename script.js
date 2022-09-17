var apiKey = "e31f1cf00f23d49b2e440554509fd314";

function getWeatherLocation(cityName) {
    var cityName = document.getElementById("city").value;
    var apiKey = "e31f1cf00f23d49b2e440554509fd314";
    console.log(cityName);
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    console.log(url);
    document.getElementById("cityNameEntered").value = cityName;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var nameCity = data["name"];
            var tempCity = data["main"]["temp"];
            console.log(nameCity);
            console.log(tempCity);
            document.getElementById("cityNameEntered").innerHTML =
                "City name: " + nameCity;
            document.getElementById("citytemp").innerHTML =
                "Temperature: " + tempCity;
            var desc = data["weather"][0]["description"];
            document.getElementById("weatherLocationCity").innerHTML = desc;
            var windSpeed = data["wind"]["speed"];
            document.getElementById("windSpeed1").innerHTML =
                "Wind Speed: " + windSpeed;
            var iconcode = data["weather"][0].icon;
            console.log(iconcode);
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            console.log(iconurl);
            document.getElementById("iconimage").src = iconurl;
        });
}

var submit = document.getElementById("btnLocation");
if (submit.addEventListener) {
    submit.addEventListener("click", getWeatherLocation, false);
} else if (submit.attachEvent) {
    submit.attachEvent("onclick", getWeatherLocation);
}

function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(locationSuccess);
}

function locationSuccess(pos) {
    getWeather(pos.coords.latitude, pos.coords.longitude);
}

function getWeather(lat, long) {
    var apiKey = "e31f1cf00f23d49b2e440554509fd314";
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=` +
            lat +
            `&lon=` +
            long +
            `&appid=` +
            apiKey
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var nameCity = data["name"];
            var tempCity = data["main"]["temp"];
            document.getElementById("cityName").innerHTML = "City name: " + nameCity;
            document.getElementById("currentCityTemperature").innerHTML =
                "Temperature: " + tempCity;
            var desc = data["weather"][0]["description"];
            document.getElementById("weatherLocation").innerHTML = desc;
            var windSpeed = data["wind"]["speed"];
            document.getElementById("windSpeed").innerHTML =
                "Wind Speed: " + windSpeed;
        });
}
window.addEventListener("load", getGeoLocation);