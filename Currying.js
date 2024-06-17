// sum(1, 2)(3)();
// sum(1)(2, 3)();
// sum(1, 2, 3)();

//all of these should return 6

function sum(initialSum = 0, ...args) {
  return function (...argumentsArray) {
    initialSum = args.reduce(
      (acc, currentValue) => acc + currentValue,
      initialSum
    );
    if (argumentsArray.length == 0) {
      return initialSum;
    } else {
      return sum(initialSum, ...argumentsArray);
    }
  };
}

console.log(sum(1, 2)(3)());
console.log(sum(1)(2, 3)());
console.log(sum(1, 2, 3)());
