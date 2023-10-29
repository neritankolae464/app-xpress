/* 
Filename: SophisticatedCode.js
Description: This code demonstrates a sophisticated and elaborate use of JavaScript.
*/

// Define a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create some person objects
const person1 = new Person("John", 25);
const person2 = new Person("Jane", 30);

// Define a class for a BankAccount
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  getAccountInfo() {
    console.log(`Account owner: ${this.owner}`);
    console.log(`Account balance: ${this.balance}`);
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
}

// Create a bank account for person1
const bankAccount1 = new BankAccount(person1, 1000);

// Perform some transactions
bankAccount1.getAccountInfo();
bankAccount1.deposit(500);
bankAccount1.withdraw(2000);
bankAccount1.withdraw(700);
bankAccount1.getAccountInfo();

// Define an asynchronous function for fetching data
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the fetchData function
fetchData();

// Create a Promise that resolves after a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Define an async function that performs a series of tasks with delays
async function performTasks() {
  console.log('Task 1');
  await delay(1000);

  console.log('Task 2');
  await delay(2000);

  console.log('Task 3');
  await delay(3000);

  console.log('All tasks completed!');
}

// Call the performTasks function
performTasks();

// Another example of a complex function
function complexFunction() {
  let result = 0;
  for (let i = 0; i < 1000; i++) {
    result += i;
  }
  return result;
}

console.log('Complex function result:', complexFunction());

// ... continue with more sophisticated and complex code ...