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

import {
  getDescription,
  getMaxTemperature,
  getMinTemperature,
  getTemperature,
  getMoonPhase,
  getSunrise,
  getSunset,
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

function displayImageAndInfo(data, container, icon, getInfo) {
  const flexContainer = document.createElement("div");
  flexContainer.classList.add("flex");

  container().appendChild(flexContainer);

  const image = document.createElement("img");
  image.src = icon;

  const info = document.createElement("p");
  info.textContent = getInfo(data);

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

export function displayDescription(data, container) {
  displayInfo(data, container, getDescription);
}

export function displayMoonphase(data, container) {
  const moonPhaseContainer = document.createElement("div");
  moonPhaseContainer.classList.add("flex");

  container().appendChild(moonPhaseContainer);

  const moonPhase = getMoonPhase(data);

  const moonPhaseImage = document.createElement("img");
  moonPhaseImage.src = moonPhaseIcons[moonPhase];
  const moonPhaseInfo = document.createElement("p");
  moonPhaseInfo.textContent = moonPhase;

  moonPhaseContainer.appendChild(moonPhaseImage);
  moonPhaseContainer.appendChild(moonPhaseInfo);
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
