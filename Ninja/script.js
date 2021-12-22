class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`Ninja's name is: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}.`)
    }
    drinkSake() {
        this.health += 10
    }
}

const brian = new Ninja("Brian", 90)

console.log("Ninja Brian: ", brian)

brian.drinkSake()

console.log("Brian after sake:", brian)
