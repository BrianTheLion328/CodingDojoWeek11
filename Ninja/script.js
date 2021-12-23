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

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
            this.wisdom = wisdom;
    }
    speakWisdom() {
        this.drinkSake()
        const message = "If your parents didn't have kids, you probably won't either."
        console.log(message)
    }
}

const senseiBrian = new Sensei("Master Brian")

console.log("Sensei Brian's info: ", senseiBrian)
senseiBrian.speakWisdom()
