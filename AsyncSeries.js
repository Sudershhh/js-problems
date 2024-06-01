// Implement a function that takes a list of async functions as input and executes them in a series that is one at a time. The next task is executed only when the previous task is completed.

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

function callback(array) {
  array.forEach((item) => console.log(item));
}

async function executeSeries(promisesArray, callback) {
  let output = [];

  for (let i = 0; i < promisesArray.length; i++) {
    let promiseResult = await promisesArray[i];
    output.push(promiseResult);

    if (output.length >= promisesArray.length) {
      callback(output);
    }
  }
}

executeSeries(promises, callback);
