function fetchWithTimeout(url, duration) {
  let fetchPromise = new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal;

    let timerId = null;

    fetch(url, { signal })
      .then((response) => {
        response.json().then((res) => {
          clearTimeout(timerId);
          resolve(res);
        });
      })

      .catch((error) => {
        reject(error);
      })
      .catch((error) => {
        reject(error);
      });
    timerId = setTimeout(() => {
      controller.abort();
    }, duration);
  });
  return fetchPromise;
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 10000)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
