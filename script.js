// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
const startTimeAll = Date.now();
const allPromises = apiUrls.map(fetchData);
Promise.all(allPromises)
  .then(() => {
    const endTimeAll = Date.now();
    const timeTakenAll = endTimeAll - startTimeAll;
    document.getElementById("output-all").textContent = timeTakenAll + " ms";
  })
  .catch((error) => {
    console.error("Promise.all() failed:", error);
  });

// Measure the time taken for Promise.any
const startTimeAny = Date.now();
const anyPromises = apiUrls.map(fetchData);
Promise.any(anyPromises)
  .then(() => {
    const endTimeAny = Date.now();
    const timeTakenAny = endTimeAny - startTimeAny;
    document.getElementById("output-any").textContent = timeTakenAny + " ms";
  })
  .catch((error) => {
    console.error("Promise.any() failed:", error);
  });
