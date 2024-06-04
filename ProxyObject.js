// Get different value of Object property in JavaScript

let obj = {
  i: 0,
};

//   console.log(obj.i); // 1
//   console.log(obj.i); // 2
//   console.log(obj.i); // 3

let handler = {
  get: (target, property) => {
    if (property === "i") {
      target[property] = target[property] + 1;
    }
    return target[property];
  },
};

let proxyObject = new Proxy(obj, handler);

console.log(proxyObject.i);
console.log(proxyObject.i);
console.log(proxyObject.i);
console.log(proxyObject.i);
