class Wasp {
    constructor(type, health) {
        this.type = type;
        this.health = health;
    }

    waspHit() {
        if (this.type === "queen") {
            this.health -= 7;
        } else if (this.type === "worker") {
            this.health -= 10;
        } else {
            this.health -= 12;
        }
        return this.health;
    };

    get html() {
        return (
            `<div>${this.health}</div>`
        );
    }
}
const wasps = [];

const queen = new Wasp("queen", 80);
wasps.push(queen);

for (let i = 0; i < 5; i++) {
    wasps.push(new Wasp("worker", 68));
}

for (let i = 0; i < 8; i++) {
    wasps.push(new Wasp("drone", 60));
}

console.log(wasps);



wasps.forEach(wasp => {
    let content = `<div class="wasp">${wasp.html}</div>`;
    document.querySelector(".container").innerHTML = content;
    // add the html for a wasp to the page using it's data
})

document.getElementById("hit").addEventListener("click", function() {
    // console.log('hit');
    const randomNumber = Math.ceil(Math.random() * 14);
    // console.log(randomNumber);
    let currentWasp = document.getElementById(String(randomNumber));    
    displayWasps();
});