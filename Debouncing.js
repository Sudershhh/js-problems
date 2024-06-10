const onChange = (e) => {
  console.log(e.target.value);
};

function debounce(callBack, delay, option = { leading: true, trailing: true }) {
  let timerId;

  return function () {
    let context = this;
    let args = arguments;

    timerId && clearTimeout(timerId);

    if (option.leading && option.trailing) {
      callBack.apply(context, args);
    }

    if (option.leading && option.trailing !== true) {
      callBack.apply(context, args);
    }

    if (option.trailing) {
      timerId = setTimeout(() => {
        callBack.apply(context, args);
      }, delay);
    }
  };
}

const debouncedSearch = debounce(onChange, 1000);

const input = document.getElementById("search"); //Input Element
input.addEventListener("keyup", debouncedSearch);
