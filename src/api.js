const key = "XVF7TBHT2V3J5DLP6WLJCBJVE";

export async function fetchWeatherTodayData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=${key}`;

  const rawData = await fetch(url);
  const data = await rawData.json();
  return data.days[0];
}

export function getSunrise(data) {
  return data.sunrise;
}

export function getSunset(data) {
  return data.sunset;
}

export function getMoonPhase(data) {
  const percentage = data.moonphase;
  if (percentage === 0) return "New Moon";
  if (percentage < 0.25) return "Waxing Crescent";
  if (percentage === 0.25) return "Fist Quarter";
  if (percentage < 0.5) return "Waxing Gibbous";
  if (percentage === 0.5) return "Full Moon";
  if (percentage < 0.75) return "Waning Gibbous";
  if (percentage === 0.75) return "Last Quarter";
  if (percentage <= 1) return "Waning Crescent";
}

function getDescription(data) {
  return data.description;
}

function getMaxTemperature(data) {
  return data.tempmax;
}

function getMinTemperature(data) {
  return data.tempmin;
}

function getTemperature(data) {
  return data.temp;
}

function getPrecipitation(data) {
  return data.precip;
}

function getPrecipitationProbability(data) {
  return data.precipprob;
}

function getPrecipitationType(data) {
  return data.preciptype;
}

function getSnow(data) {
  return data.snow;
}

function getSnowDepth(data) {
  return data.snowdepth;
}

function getWindDirection(data) {
  return data.winddir;
}

function getWindSpeed(data) {
  return data.windspeed;
}

function getCloudCover(data) {
  return data.cloudcover;
}

function getHumidity(data) {
  return data.humidity;
}
