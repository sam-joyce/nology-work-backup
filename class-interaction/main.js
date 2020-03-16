import Airport from "./Airport.js";
import Flight from "./Flight.js";
import Passenger from "./Passenger.js";

const leedsBradford = new Airport("Leeds Bradford");
const guatemalaFlight = new Flight(
    "GUAT1",
    "1400h",
    15,
    "Guatemala"
);
const newYorkFlight = new Flight(
    "NYC1",
    "0700h",
    8,
    "New York"
);
const tokyoFlight = new Flight(
    "TOKY1",
    "0900h",
    13,
    "Tokyo"
);

leedsBradford.addFlight(guatemalaFlight);
leedsBradford.removeFlight(newYorkFlight);
console.log(leedsBradford.flights);

const newPerson1 = new Passenger(
    "John"
);
const newPerson2 = new Passenger(
    "Sunny"
);
const newPerson3 = new Passenger(
    "Sam"
);
guatemalaFlight.addPassenger(newPerson1);
newYorkFlight.addPassenger(newPerson2);
tokyoFlight.addPassenger(newPerson3);
// console.log(guatemalaFlight.passengers);
