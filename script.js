// Placeholder mock data
const mockWeatherData = {
    city: "Sample City",
    temperature: "25°C",
    description: "Sunny with clear skies",
};

// Select elements
const cityInput = document.getElementById("cityInput");
const getWeatherButton = document.getElementById("getWeatherButton");
const weatherInfo = document.getElementById("weatherInfo");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

// Function to fetch and display weather
function displayWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    // Simulate fetching weather data (use `mockWeatherData` for now)
    cityName.textContent = city;
    temperature.textContent = `Temperature: ${mockWeatherData.temperature}`;
    description.textContent = `Description: ${mockWeatherData.description}`;

    weatherInfo.classList.remove("hidden");
}

// Add event listener to the button
getWeatherButton.addEventListener("click", displayWeather);

// Add Enter key support
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        displayWeather();
    }
});
