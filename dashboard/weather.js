const apiKey = "YOUR_API_KEY";

/* GET WEATHER */

async function getWeather() {

  const city =
    document.getElementById("cityInput").value;

  if (city === "") return;

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("cityName")
      .innerText = data.name;

    document.getElementById("temperature")
      .innerText = `${Math.round(data.main.temp)}°`;

    document.getElementById("condition")
      .innerText = data.weather[0].main;

    document.getElementById("humidity")
      .innerText = `${data.main.humidity}%`;

    document.getElementById("wind")
      .innerText = `${data.wind.speed} km/h`;

  }

  catch (error) {

    alert("City not found");

  }

}
