import './style.css';
import Cloudy from './assets/icons/cloudy.png';
import Clear from './assets/icons/clear.png';
import Rain from './assets/icons/rain.png';
import Snow from './assets/icons/snow.png';
import Fog from './assets/icons/fog.png';
import AllWeather from './assets/icons/allweather.png';
import Search from './assets/search.png';

const apiKey = '38a405a41362c01109f684973e1dd2f4';

// DOM elements
const citName = document.querySelector('#city');
const tempDisplay = document.querySelector('#temp');
const weatherIcon = document.querySelector('img');
const citySearch = document.querySelector('input');
citySearch.focus();
const button = document.querySelector('button');
button.innerHTML = `<img src="${Search}"></img>`;
const loader = document.querySelector('.loader');

// Displays the inputted city on the page if a result is found
function displayCity(data) {
  if (data.name) {
    citName.textContent = data.name;
  }
}

// Displays the temp on the page
function displayTemp(data) {
  const temp = Math.round(Number(data.main.temp));
  tempDisplay.textContent = `${temp}° F`;
}

// Displays the appropriate image for the weather conditions
function displayCondition(data) {
  const condition = data.weather[0].description;
  console.log(condition);
  if (condition === 'clear sky') {
    weatherIcon.src = Clear;
  } else if (condition === 'few clouds'
    || condition === 'scattered clouds'
    || condition === 'broken clouds'
    || condition === 'overcast clouds') {
    weatherIcon.src = Cloudy;
  } else if (condition === 'shower rain'
    || condition === 'rain'
    || condition === 'thunderstorm'
    || condition === 'moderate rain'
    || condition === 'light rain') {
    weatherIcon.src = Rain;
  } else if (condition === 'snow' || condition === 'light snow') {
    weatherIcon.src = Snow;
  } else if (condition === 'haze' || condition === 'mist' || condition === 'fog') {
    weatherIcon.src = Fog;
  } else {
    weatherIcon.src = AllWeather;
  }
}

async function getWeather(city) {
  try {
    // Get weather data for subject city
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`, { mode: 'cors' });
    const data = await response.json();

    // Displays the information on the page
    displayCity(data);
    displayTemp(data);
    displayCondition(data);

    // Activates the loading animation
    loader.classList = 'loader';
  } catch (err) {
    // Alerts the user that the city cannot be found
    alert('City not found');
    console.log(`There was an error: ${err}`);

    // Ends the loading animation
    loader.classList = 'loader';
  }
}

// Pre-populate the page with a query for Los Angeles
getWeather('Los Angeles');

button.addEventListener('click', (e) => {
  e.preventDefault();
  loader.classList = 'loader animate';
  getWeather(citySearch.value);
  citySearch.value = '';
});
