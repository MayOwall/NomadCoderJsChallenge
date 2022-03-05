const API_KEY = '2b386290b83920a25414d3b284dc00ad';

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const city = data.name;
        const temp = `${data.main.temp}'C`;
        const weather = data.weather[0].main;
        document.getElementById("weather-city").innerText = city;
        document.getElementById("weather-temp").innerText = temp;
        document.getElementById("weather-weather").innerText = weather;
    });
};
function onGeoError() {
    console.log("I can't find you TT");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);