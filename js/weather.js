const API_KEY = 'e1dc75c4fc9d679feb39bb2a3a62a4f3';
const city = 'Carlsbad';

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`);
  const data = await response.json();
  return data;
}

async function displayWeather() {
    // Get weather data
    const weather = await getWeather();
    console.log(weather);
    
    // Display temperature
    const temperature = document.querySelector("#temperature");
    temperature.textContent = `${weather.main.temp} °F`; 

    // Display description
    const description = document.querySelector("#description");
    description.textContent = `${weather.weather[0].description}`;

    // Display humidity
    const humidity = document.querySelector("#humidity");
    humidity.textContent = `Humidity: ${weather.main.humidity}`;
}

displayWeather();

async function getThreeDayForecast() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`);
    const data = await response.json();
    console.log(data);
    return data;
}

getThreeDayForecast();

async function displayThreeDayForecast() {
    const weather = await getThreeDayForecast();
    // Get weather for tomorrow
    const weatherTomorrow = weather.list[10].main.temp;
    const weatherTomorrowDescription = weather.list[10].weather[0].description;
    // Get weather in 2 days (ficticious)
    const weatherInTwoDays = weather.list[20].main.temp;
    const weatherInTwoDaysDescription = weather.list[20].weather[0].description;
    // Get weather in 3 days (ficticous)
    const weatherInThreeDays = weather.list[30].main.temp;
    const weatherInThreeDaysDescription = weather.list[30].weather[0].description;
    console.log(`${weatherTomorrow}${weatherInTwoDays}${weatherInThreeDays}`)

    // Display weather
    document.querySelector("#weather-tomorrow").textContent = `${weatherTomorrow} ºF ${weatherTomorrowDescription}`;
    document.querySelector("#weather-in-two-days").textContent = `${weatherInTwoDays} ºF ${weatherInTwoDaysDescription}`
    document.querySelector("#weather-in-three-days").textContent = `${weatherInThreeDays} ºF ${weatherInThreeDaysDescription}`
}

displayThreeDayForecast();
