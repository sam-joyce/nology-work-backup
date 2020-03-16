// MY HOUSE
// occupants: Number
// rooms: Number
// roof: String
// windows: Number
// shelter() : "comforts and warms the occupants"
// createBill(String billType, Number amount) : "pay up"
// fallDown() : a method that removes all occupants, rooms, the roof and the windows
// rebuild() : recreates the destroyed parameters

// Build, destroy and rebuild two houses

class House {
    constructor(occupants, rooms, roof, windows) {
        this.occupants = occupants;
        this.rooms = rooms;
        this.roof = roof;
        this.windows = windows;
        this.isBuilt = true;
    }
    shelter() {
        return "I provide warmth for my " + this.occupants + " occupants";
    }
    createBill(billType, amount){
        return `Pay your ${billType} that amounts to £${amount}, pay up`;
    }
    fallDown() {
        this.occupants = 0; 
        this.rooms = 0; 
        this.roof = 0; 
        this.windows = 0; 
        this.isBuilt = false;
         return "Your house has fallen down! You now have " + this.occupants + " occupants. You also have " + this.rooms + " Rooms and " + this.windows + " windows.";
    }
    reBuild(occupants, rooms, roof, windows) {
        if (this.isBuilt) {
            return "Your house is okay"
        } else {
            constructor(occupants, rooms, roof, windows);
            return `Your house has magically been rebuilt!`
        }
    }
}
const myHouse = new House(4, 4, "flat", 1700);
console.log(myHouse.shelter());
console.log(myHouse.createBill("gas", 50));
console.log(myHouse.fallDown());
console.log(myHouse.windows);
console.log(myHouse.reBuild(5,9,"round", 1222));
console.log(myHouse.windows);
