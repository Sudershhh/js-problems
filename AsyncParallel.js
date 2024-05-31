// Input:
// executeParallel([asyncTask(3), asyncTask(1), asyncTask(2)], (result) => {
// console.log(result);
// });

// Output:
// // output in the order of execution
// [2, 1, 3]

// Input:
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

function executeParallel(asyncArray, callBack) {
  let results = [];

  asyncArray.forEach((item, index) => {
    item((value) => {
      results.push(value);
      if (results.length >= asyncArray.length) {
        callBack(results);
      }
    });
  });
}

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

executeParallel(taskList, (result) => {
  console.log(result);
});

// Output:
// "results" // [object Array] (6)
// [1,6,7,7,9,9]
