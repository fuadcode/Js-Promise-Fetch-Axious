document.getElementById("weatherForm").addEventListener("submit", function (event) {
  event.preventDefault();
  searchWeather();
});

function searchWeather() {
  let city = document.getElementById("cityInput").value;
  let unit = document.querySelector('input:checked').value;
  let apiKey = "6bc15cfb31414fbda9f95625221905";
  let url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      let weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
          <div class="weather-container">
            <h2>${data.location.name}, ${data.location.country}</h2>
            <p>${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}" alt="weather-icon">
            <p>Temperature: ${convertTemperature(data.current.temp_c, unit)}°</p>
          </div>
        `;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function convertTemperature(temperature, unit) {
  if (unit === "f") {
    return (temperature * 9 / 5) + 32;
  } else {
    return temperature;
  }
}
