import { updateDisplayedInfo } from "./ui.js";

import { fetchWeatherTodayData } from "./api.js";

const dropdownButton = () => document.getElementById("dropdown-button");
const dropdownOptions = () => document.getElementById("dropdown-options");

let dropdownOptionsVisible = false;
let selectedOption = null;

const locations = {
  inca: "39.72196,2.91347",
  mancor: "39.75021,2.87229",
  palma: "39.57562,2.65355",
  "sierra nevada": "37.09792,-3.39954",
};

export function setUpDrowDownButton() {
  dropdownButton().addEventListener("click", () => {
    showOrHideDropdownOptions();
  });

  const dropdownOptionsArray = dropdownOptions().children;

  for (const option of dropdownOptionsArray) {
    option.addEventListener("click", (event) => {
      selectDropdownOption(event.target);
    });
  }

  selectDropdownOption(dropdownOptionsArray[0]);
  hideDropdownOptions();
}

function showDropdownOptions() {
  dropdownOptions().classList.remove("hidden");
}

function hideDropdownOptions() {
  dropdownOptions().classList.add("hidden");
}

function showOrHideDropdownOptions() {
  dropdownOptionsVisible = !dropdownOptionsVisible;
  if (dropdownOptionsVisible) {
    showDropdownOptions();
  } else {
    hideDropdownOptions();
  }
}

async function selectDropdownOption(option) {
  showOrHideDropdownOptions();

  selectedOption = option;
  displaySelectedOption(selectedOption);

  const chosenLocation = option.textContent.toLowerCase();
  const requestedData = await fetchWeatherTodayData(locations[chosenLocation]);
  updateDisplayedInfo(chosenLocation, requestedData);
}

function displaySelectedOption(option) {
  dropdownButton().textContent = option.textContent;
}
