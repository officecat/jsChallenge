const API_KEY = "60ad76027a948f4186bbe532b396d4aa";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather  = document.querySelector("#weather div:nth-child(2)");
            const weatherIcon  = document.querySelector("#weather img");
            const city = document.querySelector("#weather div:last-child");
            city.innerText = `${data.name}`;
            weather.innerText = `${data.main.temp}°C`;
            weatherIcon.src=(`https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            }
        );
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);