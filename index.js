class Animal {
    constructor(animalName) {
        this.animalName = animalName;
    }

    move() {
        console.log(`${this.animalName} is moving`);
    }
}

class Cat extends Animal {
    constructor(animalName) {
        super(animalName);
    }
}

const luna = new Cat('luna');
luna.move();
