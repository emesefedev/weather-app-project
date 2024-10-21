import firstQuarterIcon from "./Icons/first-quarter-moon.svg";
import fullMoonIcon from "./Icons/full-moon.svg";
import lastQuarterIcon from "./Icons/last-quarter-moon.svg";
import maxTemperatureIcon from "./Icons/max-temperature.svg";
import minTemperatureIcon from "./Icons/min-temperature.svg";
import newMoonIcon from "./Icons/new-moon.svg";
import sunriseIcon from "./Icons/sunrise.svg";
import sunsetIcon from "./Icons/sunset.svg";
import waningCrescentIcon from "./Icons/waning-crescent-moon.svg";
import waningGibbousIcon from "./Icons/waning-gibbous-moon.svg";
import waxingCrescentIcon from "./Icons/waxing-crescent-moon.svg";
import waxingGibbousIcon from "./Icons/waxing-gibbous-moon.svg";
import temperatureIcon from "./Icons/temperature.svg";
import rainIcon from "./Icons/rain.svg";
import snowIcon from "./Icons/snow.svg";
import freezingRainIcon from "./Icons/freezing-rain.svg";
import iceIcon from "./Icons/ice.svg";
import cloudCoverIcon from "./Icons/cloud-cover.svg";
import windDirectionIcon from "./Icons/wind-direction.svg";
import windSpeedIcon from "./Icons/wind-speed.svg";
import humidityIcon from "./Icons/humidity.svg";

import {
  getDescription,
  getMaxTemperature,
  getMinTemperature,
  getTemperature,
  getMoonPhase,
  getSunrise,
  getSunset,
  getPrecipitationProbability,
  getPrecipitationType,
  getPrecipitation,
  getSnow,
  getSnowDepth,
  getCloudCover,
  getHumidity,
  getWindDirection,
  getWindSpeed,
} from "./api";

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

export function displaySunriseAndSunset(data, container) {
  displaySunrise(data, container);
  displaySunset(data, container);
}

function displaySunrise(data, container) {
  displayImageAndInfo(data, container, sunriseIcon, getSunrise);
}

function displaySunset(data, container) {
  displayImageAndInfo(data, container, sunsetIcon, getSunset);
}

export function displayMoonphase(data, container) {
  displayImageFromCollectionAndInfo(
    data,
    container,
    moonPhaseIcons,
    getMoonPhase,
  );
}

export function displayDescription(data, container) {
  displayInfo(data, container, getDescription);
}

export function displayFullTemperature(data, container) {
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

export function displayFullPrecipitation(data, container) {
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

export function displayFullSnow(data, container) {
  displaySnow(data, container);
  displaySnowDepth(data, container);
}

function displaySnow(data, container) {
  displayInfo(data, container, getSnow);
}

function displaySnowDepth(data, container) {
  displayInfo(data, container, getSnowDepth);
}

export function displayCloudCover(data, container) {
  displayImageAndInfo(data, container, cloudCoverIcon, getCloudCover);
}

export function displayFullWind(data, container) {
  displayWindDirection(data, container);
  displayWindSpeed(data, container);
}

function displayWindDirection(data, container) {
  displayImageAndInfo(data, container, windDirectionIcon, getWindDirection);
}

function displayWindSpeed(data, container) {
  displayImageAndInfo(data, container, windSpeedIcon, getWindSpeed);
}

export function displayHumidity(data, container) {
  displayImageAndInfo(data, container, humidityIcon, getHumidity);
}
