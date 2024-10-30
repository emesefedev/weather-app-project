import cloudCoverIcon from "./Icons/cloud-cover.svg";
import firstQuarterIcon from "./Icons/first-quarter-moon.svg";
import freezingRainIcon from "./Icons/freezing-rain.svg";
import fullMoonIcon from "./Icons/full-moon.svg";
import humidityIcon from "./Icons/humidity.svg";
import iceIcon from "./Icons/ice.svg";
import lastQuarterIcon from "./Icons/last-quarter-moon.svg";
import maxTemperatureIcon from "./Icons/max-temperature.svg";
import minTemperatureIcon from "./Icons/min-temperature.svg";
import newMoonIcon from "./Icons/new-moon.svg";
import rainIcon from "./Icons/rain.svg";
import snowIcon from "./Icons/snow.svg";
import sunriseIcon from "./Icons/sunrise.svg";
import sunsetIcon from "./Icons/sunset.svg";
import temperatureIcon from "./Icons/temperature.svg";
import waningCrescentIcon from "./Icons/waning-crescent-moon.svg";
import waningGibbousIcon from "./Icons/waning-gibbous-moon.svg";
import waxingCrescentIcon from "./Icons/waxing-crescent-moon.svg";
import waxingGibbousIcon from "./Icons/waxing-gibbous-moon.svg";
import windDirectionIcon from "./Icons/wind-direction.svg";
import windSpeedIcon from "./Icons/wind-speed.svg";

import {
  getCloudCover,
  getDescription,
  getHumidity,
  getMaxTemperature,
  getMinTemperature,
  getMoonPhase,
  getPrecipitation,
  getPrecipitationProbability,
  getPrecipitationType,
  getSnow,
  getSnowDepth,
  getSunrise,
  getSunset,
  getTemperature,
  getWindDirection,
  getWindSpeed,
} from "./api.js";

import { convertToTitleCase } from "./utilities.js";

const moonPhaseIcons = {
  "New Moon": newMoonIcon,
  "Waxing Crescent": waxingCrescentIcon,
  "Fist Quarter": firstQuarterIcon,
  "Waxing Gibbous": waxingGibbousIcon,
  "Full Moon": fullMoonIcon,
  "Waning Gibbous": waningGibbousIcon,
  "Last Quarter": lastQuarterIcon,
  "Waning Crescent": waningCrescentIcon,
};

const precipitationTypeIcons = {
  rain: rainIcon,
  snow: snowIcon,
  "freezing rain": freezingRainIcon,
  ice: iceIcon,
};

const locationTitle = () => document.getElementById("location-title");

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

export function updateDisplayedInfo(location, data) {
  displayLocation(location);
  displayFullWeatherInfo(data);
}

function displayLocation(location) {
  locationTitle().textContent = convertToTitleCase(location);
}

function displayFullWeatherInfo(data) {
  displaySunriseAndSunset(data, sunriseSunsetContainer);
  displayMoonphase(data, moonPhaseContainer);
  displayDescription(data, descriptionContainer);
  displayFullTemperature(data, temperatureContainer);
  displayFullPrecipitation(data, precipitationContainer);
  displayFullSnow(data, snowContainer);
  displayFullWind(data, windContainer);
  displayCloudCover(data, cloudCoverContainer);
  displayHumidity(data, humidityContainer);
}

function displayImageAndInfo(data, container, icon, getInfo) {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex");

  container().appendChild(flexContainer);

  const info = document.createElement("p");
  info.textContent = getInfo(data);

  const image = document.createElement("img");
  image.src = icon;

  flexContainer.appendChild(image);
  flexContainer.appendChild(info);
}

function displayImageFromCollectionAndInfo(
  data,
  container,
  iconCollection,
  getInfo,
) {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex");

  container().appendChild(flexContainer);

  const info = document.createElement("p");
  const infoText = getInfo(data);
  info.textContent = infoText;

  const image = document.createElement("img");
  image.src = iconCollection[infoText];

  flexContainer.appendChild(image);
  flexContainer.appendChild(info);
}

function displayInfo(data, container, getInfo) {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex");

  container().appendChild(flexContainer);

  const info = document.createElement("p");
  info.textContent = getInfo(data);

  flexContainer.appendChild(info);
}

function displaySunriseAndSunset(data, container) {
  clear(container);
  displaySunrise(data, container);
  displaySunset(data, container);
}

function displaySunrise(data, container) {
  displayImageAndInfo(data, container, sunriseIcon, getSunrise);
}

function displaySunset(data, container) {
  displayImageAndInfo(data, container, sunsetIcon, getSunset);
}

function displayMoonphase(data, container) {
  clear(container);
  displayImageFromCollectionAndInfo(
    data,
    container,
    moonPhaseIcons,
    getMoonPhase,
  );
}

function displayDescription(data, container) {
  clear(container);
  displayInfo(data, container, getDescription);
}

function displayFullTemperature(data, container) {
  clear(container);
  displayMinTemperature(data, container);
  displayTemperature(data, container);
  displayMaxTemperature(data, container);
}

function displayMinTemperature(data, container) {
  displayImageAndInfo(data, container, minTemperatureIcon, getMinTemperature);
}

function displayTemperature(data, container) {
  displayImageAndInfo(data, container, temperatureIcon, getTemperature);
}

function displayMaxTemperature(data, container) {
  displayImageAndInfo(data, container, maxTemperatureIcon, getMaxTemperature);
}

function displayFullPrecipitation(data, container) {
  clear(container);
  displayPrecipitationProbability(data, container);
  displayPrecipitationType(data, container);
  displayPrecipitation(data, container);
}

function displayPrecipitationProbability(data, container) {
  displayInfo(data, container, getPrecipitationProbability);
}

function displayPrecipitationType(data, container) {
  displayImageFromCollectionAndInfo(
    data,
    container,
    precipitationTypeIcons,
    getPrecipitationType,
  );
}

function displayPrecipitation(data, container) {
  displayInfo(data, container, getPrecipitation);
}

function displayFullSnow(data, container) {
  clear(container);
  displaySnow(data, container);
  displaySnowDepth(data, container);
}

function displaySnow(data, container) {
  displayInfo(data, container, getSnow);
}

function displaySnowDepth(data, container) {
  displayInfo(data, container, getSnowDepth);
}

function displayCloudCover(data, container) {
  clear(container);
  displayImageAndInfo(data, container, cloudCoverIcon, getCloudCover);
}

function displayFullWind(data, container) {
  clear(container);
  displayWindDirection(data, container);
  displayWindSpeed(data, container);
}

function displayWindDirection(data, container) {
  displayImageAndInfo(data, container, windDirectionIcon, getWindDirection);
}

function displayWindSpeed(data, container) {
  displayImageAndInfo(data, container, windSpeedIcon, getWindSpeed);
}

function displayHumidity(data, container) {
  clear(container);
  displayImageAndInfo(data, container, humidityIcon, getHumidity);
}

function clear(container) {
  container().textContent = "";
}
