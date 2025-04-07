// Person class
function Person(name, age) {
    this.name = name; // Initialize name property
    this.age = age;   // Initialize age property
}

// Add greet method to Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee class that inherits from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor to initialize name and age
    this.jobTitle = jobTitle;      // Initialize jobTitle property
}

// Inherit from Person's prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Set the constructor property to Employee

// Add jobGreet method to Employee's prototype
Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;