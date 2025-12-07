const apiKey = "ae3f19d9ca65d94742500c043303e3cf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const elements = {
  input: document.querySelector(".search input"),
  button: document.querySelector(".search button"),
  icon: document.querySelector(".weather-icon"),
  temp: document.querySelector(".temp"),
  city: document.querySelector(".city"),
  humidity: document.querySelector(".humidity"),
  wind: document.querySelector(".wind"),
  weatherBox: document.querySelector(".weather"),
  errorBox: document.querySelector(".error"),
};


const weatherIcons = {
  Clouds: "assets/images/clouds.png",
  Clear: "assets/images/clear.png",
  Rain: "assets/images/rain.png",
  Drizzle: "assets/images/drizzle.png",
  Mist: "assets/images/mist.png",
  Snow: "assets/images/snow.png",
  Thunderstorm: "assets/images/storm.png",
};

async function checkWeather(city) {
  if (!city || city.trim() === "") return;

  try {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    elements.city.textContent = data.name;
    elements.temp.textContent = `${Math.round(data.main.temp)}°C`;
    elements.humidity.textContent = `${data.main.humidity}%`;
    elements.wind.textContent = `${Math.round(data.wind.speed)} km/h`;

    const status = data.weather[0].main;
    elements.icon.src = weatherIcons[status] || "assets/images/clear.png";

    elements.errorBox.style.display = "none";
    elements.weatherBox.style.display = "block";

    elements.weatherBox.classList.remove("fade-in");
    void elements.weatherBox.offsetWidth; // ریست انیمیشن
    elements.weatherBox.classList.add("fade-in");

  } catch (err) {
    elements.errorBox.style.display = "block";
    elements.weatherBox.style.display = "none";
  }
}

elements.button.addEventListener("click", () => {
  checkWeather(elements.input.value);
});


elements.input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkWeather(elements.input.value);
  }
});
