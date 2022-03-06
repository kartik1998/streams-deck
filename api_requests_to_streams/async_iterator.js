const axios = require("axios").default;
const BASE_URL = "https://jsonplaceholder.typicode.com/";

async function* generate() {
  const promises = [];
  for (let skip = 1; skip <= 100; skip++) {
    promises.push(axios.get(BASE_URL + `posts/${skip}`));
  }
  const res = await Promise.all(promises);
  for (const d of res) {
    yield d.data;
  }
}

async function consume() {
  const iterator = generate();
  for await (const chunk of iterator) {
    console.log(chunk);
  }
}

consume();
