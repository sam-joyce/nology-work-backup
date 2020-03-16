export default class Animal {
    constructor(
        name,
        age,
        species,
        height,
        placeOfOrigin
    ) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }

    get description() {
        return `${this.age} - ${this.species} - ${this.placeOfOrigin}`
    }

    get html() {
        return `Name: ${this.name}
        Age: ${this.age}
        Species: ${this.species}
        Height: ${this.height}
        Origin: ${this.placeOfOrigin}`
    };

}