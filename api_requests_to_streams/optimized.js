const async = require("async");
const axios = require("axios").default;
const { PassThrough } = require("stream");
const BASE_URL = "https://jsonplaceholder.typicode.com/";

// need to ensure it's correctness

function main() {
  const stream = new PassThrough({ objectMode: true });
  populateStream(stream);
  stream.on("data", (data) => {
    console.log(data);
  });
  stream.on("end", () => {
    console.log("end");
  });
}

function populateStream(stream) {
  async function worker(skip, cb) {
    const res = await axios.get(BASE_URL + `posts/${skip}`);
    stream.push(res.data);
    return cb();
  }
  const queue = async.queue(worker, 50);
  for (let i = 1; i < 101; i++) {
    queue.push(i);
  }
}

main();
