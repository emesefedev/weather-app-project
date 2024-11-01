export function getSelectedLocation() {
  const url = new URL(window.location);
  const selectedLocation = url.searchParams.get("location");
  return selectedLocation;
}

export function changeURL(selectedLocation) {
  const url = new URL(window.location);

  if (selectedLocation) {
    // Update the 'location' search parameter with the selected location
    url.searchParams.set("location", selectedLocation);
  } else {
    // Remove the 'location' parameter if no location is selected
    url.searchParams.delete("location");
  }

  // Update the browser's URL without reloading the page
  window.history.pushState({}, "", url);
}
