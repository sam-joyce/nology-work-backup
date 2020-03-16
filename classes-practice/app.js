console.log("anything");
class Company {
    constructor(name, infectedEmployees) {
        this.name = name;
        this.infectedEmployees = infectedEmployees;
        this.employees = [];
    }
    infect(virus) {
        this.infectedEmployees += 4;
    }
    hireEmployee(employee) {
        if (employee.infected) this.infectedEmployees += 1;
        this.employees.push(employee);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
    breathe() {
        console.log("I'm breathing");
    }
}
class Employee extends User {
    // 1. Constructor that gives an employee a health rating (Number), performance rating (Number), name (String)
    constructor(healthRating, performanceRating, name) {
        super(name);
        this.healthRating = healthRating;
        this.performanceRating = performanceRating;
        this.infected = false;
    }
    // 2. Method, "getInfected" that halves the health rating, takes 20 off the performance rating
    getInfected(virus) {
        this.healthRating /= 2;
        this.performanceRating -= 20;
        this.infected = true;
    }
    // 3. EXTENSION - Add the employee to a company. If they're infected, add one to "nfectedEmployees"
}
const nology = new Company("_nology", 12);
const sam = new Employee(100, 100, "sam");
sam.breathe();
nology.hireEmployee(sam);
sam.getInfected();
console.log(sam.healthRating, sam.performanceRating)