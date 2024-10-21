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

export function getDescription(data) {
  return data.description;
}

export function getMaxTemperature(data) {
  return `${data.tempmax}°C`;
}

export function getMinTemperature(data) {
  return `${data.tempmin}°C`;
}

export function getTemperature(data) {
  return `${data.temp}°C`;
}

export function getPrecipitation(data) {
  return `${data.precip} mm`;
}

export function getPrecipitationProbability(data) {
  return `${data.precipprob}%`;
}

export function getPrecipitationType(data) {
  return data.preciptype;
}

export function getSnow(data) {
  return `New Snow: ${data.snow} cm`;
}

export function getSnowDepth(data) {
  return `Depth: ${data.snowdepth} cm`;
}

export function getWindDirection(data) {
  return `${data.winddir}°`;
}

export function getWindSpeed(data) {
  return `${data.windspeed} kph`;
}

export function getCloudCover(data) {
  return `${data.cloudcover}%`;
}

export function getHumidity(data) {
  return `${data.humidity}%`;
}
