function JSONtoHTML(json) {
  //If element is an Array
  let documentFragment = document.createDocumentFragment();
  if (Array.isArray(json)) {
    //iterate through the array
    for (let object of json) {
      //Create an element
      let element = document.createElement(object.type);

      //iterate through props

      if (object.props) {
        for (let prop in object.props) {
          element.setAttribute(prop, object.props[prop]);
        }
      }

      //Iterate through children
      if (Array.isArray(object.children)) {
        for (let child of object.children) {
          element.append(JSONtoHTML(child));
        }
      } else {
        element.innerText = object.children;
      }

      documentFragment.appendChild(element);
    }
  }
  //If Element is Object
  else {
    return JSONtoHTML([json]);
  }
  return documentFragment;
}

const JSON = [
  {
    type: "div",
    props: { id: "hello", class: "foo" },
    children: [
      { type: "h1", children: "HELLO" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar" }, children: "World" },
        ],
      },
    ],
  },
  {
    type: "section",
    props: { id: "hello-2", class: "foo-2" },
    children: [
      { type: "h1", children: "HELLO-2" },
      {
        type: "p",
        children: [
          { type: "span", props: { class: "bar-2" }, children: "World" },
        ],
      },
    ],
  },
];

let html = JSONtoHTML(JSON);
console.log(html);
