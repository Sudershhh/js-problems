window.sampleLocalStorage = {
  getItem(key) {
    let item = JSON.parse(window.localStorage.getItem(key));

    if (item) {
      let currentTime = Date.now();
      if (currentTime >= item.expiryTime) {
        window.localStorage.removeItem(key);
        return null;
      }
      return item.value;
    }

    return null;
  },
  setItem(key, value, expiryTime) {
    let item = {
      value,
    };

    if (expiryTime) {
      item.expiryTime = Date.now() + expiryTime;
    }

    window.localStorage.setItem(key, JSON.stringify(item));
  },
};

// Input:
sampleLocalStorage.setItem("Apple", "Iphone", 1000);

setTimeout(() => {
  console.log(sampleLocalStorage.getItem("Apple"));
}, 1500);

// Output:
// null
