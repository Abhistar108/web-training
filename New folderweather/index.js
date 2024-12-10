const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const  weather_img = document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind_speed');

// const location_not_found = document.querySelector('.location-not-found');

async function checkWeather(city){
const api_key = "f57332715be3ab7f43b600b420b82a3e";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response => response.json());

temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}°C`;
if(weather_data.cod ===`404`){
    // location_not_found.style.display = "flex";
console.log("error");
    return;
}
description.innerHTML = `${weather_data.weather[0].description}`;
// console.log(weather_data);
humidity.innerHTML =`${weather_data.main.humidity}%`;
wind_speed.innerHTML =`${weather_data.wind.speed}Km/H`;


console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});
