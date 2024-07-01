//Low Priority
function fetchTweets() {
  fetch("https://api.twitter.com/tweets")
    .then((response) => response.json())
    .then((json) => console.log("Tweets:", json));
}

//Low Priority
function fetchLikes() {
  fetch("https://api.twitter.com/likes")
    .then((response) => response.json())
    .then((json) => console.log("Likes:", json));
}

//High Priority
function fetchDirectMessages() {
  fetch("https://api.twitter.com/direct-messages")
    .then((response) => response.json())
    .then((json) => console.log("Direct Messages:", json));
}

console.log("App started");

// Regular updates
setTimeout(fetchTweets, 0); // Macrotask
setTimeout(fetchLikes, 35); // Macrotask

// High-priority update
queueMicrotask(fetchDirectMessages); // Microtask

console.log("App is running");

//OUTPUT:
// App Started
// App is Running
// Direct Messages: {}
// Tweets: {}
// Likes: {}
