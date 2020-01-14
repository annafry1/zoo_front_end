var animalPop = 0;

function run(){
    var tigger = new Tiger("Tigger");
    // tigger.eat("meat");
    // tigger.eat("kibble");
    var pooh = new Bear("Pooh");
    // pooh.eat("fish");
    // pooh.eat("meat");
    var rarity = new Unicorn("Rarity");
    // rarity.eat("marshmallows");
    var gemma = new Giraffe("Gemma");
    // gemma.eat("meat");
    var stinger = new Bee("Stinger");
    // stinger.eat("ice cream");
    // stinger.eat("pollen");
    var zoeBot = new Zookeeper("Zoebot");
    zoeBot.feedAnimals([tigger, stinger, gemma, rarity, pooh], "meat");
    console.log(Animal.getPop());
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food){
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPop + " total animals.");
        for (var i = 0; i < animals.length; i ++){
            animals[i].eat(food);
        }
    }
}

class Animal {
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPop ++;
    }
    static getPop() {
        return animalPop;
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours. ")

    }
    eat(food) {
        console.log(this.name + " eats " + food + ".");
        if (food === this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood + ".");
        }else{
            this.sleep();
        }
    }
}

class Tiger extends Animal{
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish")
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months. ");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud. ");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }
    eat(food){
        console.log(this.name + " eats " + food + ".");
        if (food === this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood + ".");
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food + ".");
        }
    }
}

class Bee extends Animal{
    constructor(name){
        super(name, "pollen");
    }
    eat(food){
        console.log(this.name + " eats " + food + ".");
        if (food === this.favoriteFood){
            console.log("YUM!!! " + this.name + " wants more " + this.favoriteFood + ".");
            this.sleep();
        }else{
            console.log("YUCK!!! " + this.name + " will not eat " + food + ".");
        }
    }
    sleep(){
        console.log(this.name + " never sleeps. ");

    }
}