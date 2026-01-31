const axios = require("axios");

const city = process.argv[2];

if (!city) {
  console.error("Please provide a city name. Example: node index.js London");
  process.exit(1);
}

const API_KEY = "336989235bdc4142ce16fd5325df33c1"; // your API key
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

async function getWeather() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    console.log(`Weather in ${city}: ${temp}°C, ${description}`);
  } catch (error) {
    console.error(
      "Error fetching weather:",
      error.response?.data?.message || error.message
    );
  }
}

getWeather();