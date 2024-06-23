function throttle(func, limit) {
  let lastRan = true;

  return function () {
    let context = this;
    let args = arguments;

    if (lastRan) {
      func.apply(context, args);

      lastRan = false;

      setTimeout(() => {
        lastRan = true;
      }, limit);
    }
  };
}

let button = document.querySelector(".btn");

function clickMe() {
  console.log("CLICKED...");
}

button.addEventListener("click", throttle(clickMe, 1500));
