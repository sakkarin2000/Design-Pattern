import { Ship, Transportation, Truck } from "./Transportation";

function newTransportation(transportation: Transportation) {
  console.log(
    "Creator: I'm not aware of the type of transportation, this shall be worked."
  );
  console.log(transportation.explainTransportation());
}

function main() {
  console.log("App: Launched with the Truck.");
  newTransportation(new Truck());
  console.log("");

  console.log("App: Launched with the Ship.");
  newTransportation(new Ship());
}

main();
