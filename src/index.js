import "./style.css";
import {
  displayDescription,
  displayFullTemperature,
  displayMoonphase,
  displaySunriseAndSunset,
  displayFullPrecipitation,
  displayFullSnow,
  displayFullWind,
  displayCloudCover,
  displayHumidity,
} from "./ui";

const inca = "39.72196,2.91347";
const mancor = "39.75021,2.87229";
const palma = "39.57562,2.65355";
const sierraNevada = "37.09792,-3.39954";

import { fetchWeatherTodayData } from "./api";

const sunriseSunsetContainer = () =>
  document.getElementById("sunrise-sunset-container");
const moonPhaseContainer = () =>
  document.getElementById("moon-phase-container");
const descriptionContainer = () =>
  document.getElementById("description-container");
const temperatureContainer = () =>
  document.getElementById("temperature-container");
const precipitationContainer = () =>
  document.getElementById("precipitation-container");
const snowContainer = () => document.getElementById("snow-container");
const windContainer = () => document.getElementById("wind-container");
const cloudCoverContainer = () =>
  document.getElementById("cloud-cover-container");
const humidityContainer = () => document.getElementById("humidity-container");

const requestedData = await fetchWeatherTodayData(sierraNevada);
displaySunriseAndSunset(requestedData, sunriseSunsetContainer);
displayMoonphase(requestedData, moonPhaseContainer);
displayDescription(requestedData, descriptionContainer);
displayFullTemperature(requestedData, temperatureContainer);
displayFullPrecipitation(requestedData, precipitationContainer);
displayFullSnow(requestedData, snowContainer);
displayFullWind(requestedData, windContainer);
displayCloudCover(requestedData, cloudCoverContainer);
displayHumidity(requestedData, humidityContainer);
