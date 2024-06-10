// sum(1, 2)(3)();
// sum(1)(2, 3)();
// sum(1, 2, 3)();

//all of these should return 6

//OR

//when we reach 5 arguments then return the value rather than new function
// sum(1, 2, 3, 4, 5);
// sum(1, 2)(3, 4, 5);
// sum(1)(2, 3, 4, 5);
// sum(1, 2, 3)(4, 5);
// sum(1)(2)(3)(4)(5);
// sum(1, 2, 3, 4)(5);

//all should return 15

function sum(...args) {
  let value = 0;

  return function (...args) {};
}

console.log(sum(1)(2)(3)());
