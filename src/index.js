import "./style.css";

const key = "XVF7TBHT2V3J5DLP6WLJCBJVE";
const inca = "39.72196,2.91347";
const mancor = "39.75021,2.87229";
const palma = "39.57562,2.65355";
const sierraNevada = "37.09792,-3.39954";

async function fetchWeatherTodayData(location) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?unitGroup=metric&key=${key}`;

  const rawData = await fetch(url);
  const data = await rawData.json();
  return data.days[0];
}

const requestedData = await fetchWeatherTodayData(sierraNevada);
console.log(requestedData.description);

// Me interesa enseñar
// * sunrise
// * sunset
// * moonphase
// * description
// * tempmax
// * tempmin
// * temp
// * precip
// * precipprob
// * preciptype
// * snow
// * snowdepth
// * winddir
// * windspeed
// * cloudcover
// * humidity
