import Flight from "./Flight.js";

export default class Airport {
    constructor(name) {
        this.name = name;
        this.flights = [];
    }

    addFlight(flight) {
        this.flights.push(flight);
    }

    removeFlight(flight) {
        this.flights.splice(this.flights.indexOf(flight), 1);
    }
}
