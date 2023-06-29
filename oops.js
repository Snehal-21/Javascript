// class Animal{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   getInfo(){
//     console.log(
//       `the name of the animal is ${this.name} and age is ${this.age}`
//     )
//   }
// }

// const x = new Animal('test', 25);

// x.getInfo();


class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  makeSound() {
    // super.makeSound(); // Call the parent class method
    console.log("The dog barks");
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Breed: ${this.breed}`);
  }
}

const myDog = new Dog("Buddy", "Labrador Retriever");
myDog.makeSound(); // Calls both the parent and subclass methods
myDog.displayInfo(); // Accesses subclass property and method
