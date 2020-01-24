
var animalPop = 0;
var allAnimals = [];

$(document).ready(function () {
    run();
    console.log(allAnimals);
});

function run(){
    //createAnimal();
    var tigger = new Tiger("Tigger");
    listAnimals(tigger);
    var pooh = new Bear("Pooh");
    listAnimals(pooh);
    var rarity = new Unicorn("Rarity");
    listAnimals(rarity);
    var gemma = new Giraffe("Gemma");
    listAnimals(gemma);
    var stinger = new Bee("Stinger");
    listAnimals(stinger);
}

function createAnimal(){
    //$("#actions").html("");
    var name = $("#name").val();
    var animal = "";
    if (name === ""){
        alert("Please enter a name. ");
    }else{
        switch ($("#species").val()){
            case "Tiger":
                animal = new Tiger(name);
                break;
            case "Bear":
                animal = new Bear(name);
                break;
            case "Unicorn":
                animal = new Unicorn(name);
                break;
            case "Giraffe":
                animal = new Giraffe(name);
                break;
            default:
                animal = new Bee(name);
        }
    }

    listAnimals(animal);
    console.log(allAnimals);
    console.log(animal);

}

function feedAnimals(){
    $("#actions").html("");
    var food = $("#food").val();
    for (var i = 0; i < allAnimals.length; i ++){
        allAnimals[i].eat(food);
    }
    console.log(food);
}

function listAnimals(animal){
    allAnimals.push(animal);
    $("#list").append("<div>" + animal.name + " is a " + animal.constructor.name + " whose favorite food is " + animal.favoriteFood + ". </div>");
}

function deleteAnimal() {
    
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