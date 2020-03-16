import Animal from "./Animal.js";
import animalData from "./data.js"


let animals = animalData.map((animal) => {
    return new Animal(
        animal.name,
        animal.age,
        animal.species,
        animal.height,
        animal.placeOfOrigin
    );
})

console.log(animals);

animals.forEach((animal) => $("#animals").append(animal.html));