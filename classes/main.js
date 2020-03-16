// A template to describe an object aka a type of object
class Animal {

    // The method that runs when you type "new"
    constructor(name, dob) {
        this.isAlive = true;
        this.name = name;
        this.dob = dob;
    }

    breathe() {
        return "In......and out."
    }

    sleep() {
        return "zzzzzzzzzzz"
    }

    eat(food) {
        // write a method that takes food as an argument
        return "I just ate some " + food;
    }
}

// instantiation - making an Animal object / an instance of the class Animal
const ollie = new Animal("ollie", "12/11/64");
const ellen = new Animal("ellen", "02/01/97");

// accessing an attribute
console.log(ollie.name);
console.log(ellen.name);
// running a method
console.log(ollie.breathe()); 
console.log(ollie.sleep()); 
console.log(ollie.eat("pasta")); 

