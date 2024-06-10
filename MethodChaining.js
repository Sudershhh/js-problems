// Explain method chaining in JavaScript by implementing a calculator that performs the basic actions like add, subtract, divide, and multiply.

// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total);
// //20

class Calculator {
  constructor() {
    this.value = 0;
  }

  add(input) {
    this.value += input;
    return this;
  }

  subtract(input) {
    this.value -= input;
    return this;
  }

  divide(input) {
    this.value /= input;
    return this;
  }

  multiply(input) {
    this.value *= input;
    return this;
  }
}

const calculator = new Calculator();
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.value);
//20
