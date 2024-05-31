// Given an object which can have a function as a value at a nested level,
//create a function that will accept arguments as input and pass it through all the
// functions in the input object and return the computed value.

let input = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

function pipe(object) {
  let outputObject = {};

  return function (...inputArguments) {
    for (let key in object) {
      if (typeof object[key] == "function") {
        outputObject[key] = object[key](...inputArguments);
      } else {
        outputObject[key] = pipe(object[key])(...inputArguments);
      }
    }
    return outputObject;
  };
}

console.log(pipe(input)(1, 2, 3));
