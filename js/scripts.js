'use strict';

const refreshButton = document.querySelector('button');

refreshButton.addEventListener('click', function () {
    fetchWeather();
})

function fetchWeather(city="buffalo") {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f22b972a12d757db6f1d9adbb226b9c1&units=imperial`
    ).then(function (response) {
        return response.json();
    }).then(function (data) {
        updateWeather(data);
    });

}

function updateWeather(data) {

    const weather = document.querySelector('#weather');
    const feelsLike = document.querySelector('#feelsLike');

    console.log(data.weather.main);

    weather.innerHTML = "The current temperature is: <strong>" + data.main.temp + "</strong> degrees";
    feelsLike.innerHTML = "It feels like: <strong>" + data.main.feels_like + "</strong> degrees";

}

fetchWeather();