import {fahrenheitToCelsius,mphToKmh, runWindChill } from "./windchill.js";

const temperature = document.querySelector("#temperature");
const weatherPicture = document.querySelector("#weather-picture");
const windSpeed = document.querySelector("#windSpeed")
const weatherDesc = document.querySelector("#weather-description");

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Funes&appid=54da382318799586745f2112ab1d86ec&units=imperial'
if (temperature != null) { //Check if #temperature is in current .html, so it doesn't rise errors.
    async function apiFetch() {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } 
    function  displayResults(weatherData) {
    try {
    temperature.innerHTML = `<strong>${fahrenheitToCelsius(weatherData.main.temp).toFixed(1)}</strong>`
    } catch (error) {console.log(error)};
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description.toUpperCase();

    try {
        weatherPicture.setAttribute('src', iconsrc);
        weatherPicture.setAttribute('alt', `Logo for ${desc}`);
        weatherDesc.textContent = desc;
        windSpeed.innerHTML = `${mphToKmh(weatherData.wind.speed).toFixed(1)}` 
    } catch (error) {console.log(error)};
    runWindChill();
    }

    apiFetch();
};