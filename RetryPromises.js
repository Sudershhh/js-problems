async function getData() {
  const randomNumber = Math.ceil(Math.random() * 3);
  console.log("Random Number Generated :", randomNumber);
  if (randomNumber !== 1) {
    throw new Error("Failed - Unable to generate the right number.");
  }
  return randomNumber;
}

async function retry(asyncFn, retries, delay, errorMessage) {
  for (let i = 0; i < retries; i++) {
    try {
      console.log("Trying to execute the function.");
      const output = await asyncFn();
      console.log("Successful Response : ", output);
      return output;
    } catch (err) {
      console.log(`Attempt ${i + 1} failed.`);
      if (i < retries - 1) {
        console.log("Retrying...");
        await new Promise((resolve) => setTimeout(resolve, delay + delay));
      } else {
        console.log(errorMessage);
        return Promise.reject(errorMessage);
      }
    }
  }
}

retry(getData, 3, 200, "Failed")
  .then((result) => console.log("Final Result:", result))
  .catch((err) => console.log("Final Error:", err));

//SAMPLE OUTPUT
// Trying to execute the function.
// Random Number Generated : 3
// Attempt 1 failed.
// Retrying...
// Trying to execute the function.
// Random Number Generated : 3
// Attempt 2 failed.
// Retrying...
// Trying to execute the function.
// Random Number Generated : 1
// Successful Response: 1
// Final Result: 1
