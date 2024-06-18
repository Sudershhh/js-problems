let input = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

function deepFlatten(parentKey = "", object) {
  let outputObject = {};
  let pk;

  for (const key in object) {
    if (parentKey) {
      pk = `${parentKey}.${key}`;
    } else {
      pk = key;
    }
    if (typeof object[key] !== "object") {
      outputObject[pk] = object[key];
    } else {
      outputObject = { ...outputObject, ...deepFlatten(pk, object[key]) };
    }
  }

  return outputObject;
}

let outputObject = deepFlatten("", input);
console.log(outputObject);

// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }
