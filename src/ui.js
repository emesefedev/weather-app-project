import sunriseIcon from "./Icons/sunrise.svg";
import sunsetIcon from "./Icons/sunset.svg";
import newMoonIcon from "./Icons/new-moon.svg";
import waxingCrescentIcon from "./Icons/waxing-crescent-moon.svg";
import firstQuarterIcon from "./Icons/first-quarter-moon.svg";
import waxingGibbousIcon from "./Icons/waxing-gibbous-moon.svg";
import fullMoonIcon from "./Icons/full-moon.svg";
import waningGibbousIcon from "./Icons/waning-gibbous-moon.svg";
import lastQuarterIcon from "./Icons/last-quarter-moon.svg";
import waningCrescentIcon from "./Icons/waning-crescent-moon.svg";

import { getMoonPhase, getSunrise, getSunset } from "./api";

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

export function displaySunriseAndSunset(data, container) {
  displaySunrise(data, container);
  displaySunset(data, container);
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

function displaySunrise(data, container) {
  const sunriseContainer = document.createElement("div");
  sunriseContainer.classList.add("flex");

  container().appendChild(sunriseContainer);

  const sunriseImage = document.createElement("img");
  sunriseImage.src = sunriseIcon;
  const sunriseInfo = document.createElement("p");
  sunriseInfo.textContent = getSunrise(data);

  sunriseContainer.appendChild(sunriseImage);
  sunriseContainer.appendChild(sunriseInfo);
}

function displaySunset(data, container) {
  const sunsetContainer = document.createElement("div");
  sunsetContainer.classList.add("flex");

  container().appendChild(sunsetContainer);

  const sunriseImage = document.createElement("img");
  sunriseImage.src = sunsetIcon;
  const sunsetInfo = document.createElement("p");
  sunsetInfo.textContent = getSunset(data);

  sunsetContainer.appendChild(sunriseImage);
  sunsetContainer.appendChild(sunsetInfo);
}
