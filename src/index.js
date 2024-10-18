import "./style.css";
import sunriseIcon from "./Icons/sunrise.svg";
import sunsetIcon from "./Icons/sunset.svg";

const inca = "39.72196,2.91347";
const mancor = "39.75021,2.87229";
const palma = "39.57562,2.65355";
const sierraNevada = "37.09792,-3.39954";

import { fetchWeatherTodayData, getSunrise, getSunset } from "./api";

const sunriseSunsetContainer = () =>
  document.getElementById("sunrise-sunset-container");

function displaySunrise(data) {
  const sunriseContainer = document.createElement("div");
  sunriseContainer.classList.add("flex");

  console.log("hey");

  sunriseSunsetContainer().appendChild(sunriseContainer);

  const sunriseImage = document.createElement("img");
  sunriseImage.src = sunriseIcon;
  const sunriseInfo = document.createElement("p");
  sunriseInfo.textContent = getSunrise(data);

  sunriseContainer.appendChild(sunriseImage);
  sunriseContainer.appendChild(sunriseInfo);
}

function displaySunset(data) {
  const sunsetContainer = document.createElement("div");
  sunsetContainer.classList.add("flex");

  sunriseSunsetContainer().appendChild(sunsetContainer);

  const sunriseImage = document.createElement("img");
  sunriseImage.src = sunsetIcon;
  const sunsetInfo = document.createElement("p");
  sunsetInfo.textContent = getSunset(data);

  sunsetContainer.appendChild(sunriseImage);
  sunsetContainer.appendChild(sunsetInfo);
}

const requestedData = await fetchWeatherTodayData(sierraNevada);
displaySunrise(requestedData);
displaySunset(requestedData);
