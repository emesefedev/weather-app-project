import { updateDisplayedInfo } from "./ui.js";

import { fetchWeatherTodayData } from "./api.js";

import { changeURL, getSelectedLocation } from "./url.js";

const dropdownButton = () => document.getElementById("dropdown-button");
const dropdownOptions = () => document.getElementById("dropdown-options");

let dropdownOptionsVisible = false;

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

  const selectedLocation = getSelectedLocation();
  let selectedOption = dropdownOptionsArray[0];
  if (selectedLocation) {
    selectedOption = getOptionGivenLocation(
      selectedLocation,
      dropdownOptionsArray,
    );
  }
  selectDropdownOption(selectedOption);

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

  displaySelectedOption(option);

  const selectedLocation = option.textContent.toLowerCase();

  changeURL(selectedLocation);

  const requestedData = await fetchWeatherTodayData(
    locations[selectedLocation],
  );
  updateDisplayedInfo(selectedLocation, requestedData);
}

function displaySelectedOption(option) {
  dropdownButton().textContent = option.textContent;
}

function getOptionGivenLocation(location, array) {
  for (const option of array) {
    if (option.textContent.toLowerCase() === location) {
      return option;
    }
  }
  return array[0]; // If not valid option, the first is returned
}
