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
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data;
}

getThreeDayForecast();

async function displayThreeDayForecast() {

}

function getWeekDay(number) {
    let weekDay;
    switch (number) {
        case 0:
            weekDay = "Monday";
            break
        case 1:
            weekDay = "Tuesday";
            break
        case 2:
            weekDay = "Wednesday";
            break
        case 3:
            weekDay = "Thursday";
            break
        case 4:
            weekDay = "Friday";
            break
        case 5:
            weekDay = "Saturday";
            break
        default:
            weekDay = "Sunday";
    }
    return weekDay;
}
