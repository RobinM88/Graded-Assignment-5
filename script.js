// Write your JavaScript code here!

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      console.log("Fetched planets:", result);
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      const selectedPlanet = pickPlanet(listedPlanets);
      console.log("Selected planet:", selectedPlanet); // Logging the selected planet for verification

      // Adding the destination information to the document
      addDestinationInfo(
        document,
        selectedPlanet.name,
        selectedPlanet.diameter,
        selectedPlanet.star,
        selectedPlanet.distance,
        selectedPlanet.moons,
        selectedPlanet.image
      );
    });

  let list = this.document.getElementById("faultyItems");
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    // Call formSubmission function with extracted values
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    event.preventDefault();
  });
});
