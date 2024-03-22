// Write your helper functions here!
require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  //Task 3: Here is the HTML formatting for our mission target div..
  const htmlString = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;

  //
  document.getElementById("missionTarget").innerHTML = htmlString;
}

function validateInput(Input) {
  if (Input === "") {
    return "Empty";
  } else if (!isNaN(Input)) {
    return "Is a Number";
  } else {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  // Validate pilot
  if (validateInput(pilot) === "Empty") {
    alert("Pilot input cannot be empty");
  } else if (validateInput(pilot) === "Is a Number") {
    alert("Pilot input cannot be a number");
    return false;
  }

  // Validate copilot
  if (validateInput(copilot) === "Empty") {
    alert("Pilot input cannot be empty");
  } else if (validateInput(copilot) === "Is a Number") {
    alert("Copilot input cannot be a number");
    return false;
  }

  // Validate fuelLevel
  if (validateInput(fuelLevel) === "Empty") {
    alert("Fuel Level cannot be empty");
  } else if(validateInput(fuelLevel) === "Not a Number") {
    alert("Fuel level must be a number")
    return false;
  }

  // Validate cargoLevel
  if (validateInput(cargoLevel) === "Empty") {
    alert("Cargo Level cannot be empty");
  } else if(validateInput(cargoLevel) === "Not a Number") {
    alert("Cargo level must be a number")
    return false;
  }

  // Update pilot status with user input
  const pilotStatusElement = document.getElementById("pilotStatus");
  pilotStatusElement.innerHTML = `Pilot ${pilot} is ready for launch`;

  // Update copilot status with user input
  const copilotStatusElement = document.getElementById("copilotStatus");
  copilotStatusElement.innerHTML = `Co-pilot ${copilot} is ready for launch`;

  // Reset shuttle requirements list visibility
  document.getElementById("faultyItems").style.visibility = "visible";

  // Check if fuel level is too low
  const fuelStatusElement = document.getElementById("fuelStatus");
  if (fuelLevel < 10000) {
    fuelStatusElement.innerHTML = "Fuel level too low for launch";
    fuelStatusElement.style.color = "red";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    return false;
  } else {
    fuelStatusElement.innerHTML = "Fuel level high enough for launch";
    fuelStatusElement.style.color = "green";
    document.getElementById("launchStatus").style.color = "green";
   
  }

  // Check if cargo mass is too large
  const cargoStatusElement = document.getElementById("cargoStatus");
  if (cargoLevel > 10000) {
    cargoStatusElement.innerHTML = "Cargo mass too heavy for launch";
    cargoStatusElement.style.color = "red";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    return false;
  } else {
    cargoStatusElement.innerHTML = "Cargo mass low enough for launch";
  }

  // Check if shuttle is ready for launch
  document.getElementById("launchStatus").innerHTML =
    "Shuttle is Ready for Launch";
  document.getElementById("launchStatus").style.color = "green";
  return true;
}
// fetch data
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });

  return planetsReturned;
}

function pickPlanet(planets) {
  const randomIndex = Math.floor(Math.random() * planets.length);
  const Planet = planets[randomIndex];
  return Planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
