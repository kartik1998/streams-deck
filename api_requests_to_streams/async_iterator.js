const axios = require("axios").default;
const BASE_URL = "https://jsonplaceholder.typicode.com/";

async function* generate() {
  for (let skip = 1; skip <= 100; skip++) {
    try {
      const res = await axios.get(BASE_URL + `posts/${skip}`);
      yield res.data;
    } catch (err) {
      console.log(err);
    }
  }
}

async function consume() {
  const iterator = generate();
  for await (const chunk of iterator) {
    console.log(chunk);
  }
}

consume();
