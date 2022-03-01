const async = require("async");
const axios = require("axios").default;
const { PassThrough } = require("stream");
const BASE_URL = "https://jsonplaceholder.typicode.com/";

// need to ensure it's correctness
// since queue elements resolution is unsorted be careful if you use this 

async function main() {
  const stream = new PassThrough({ objectMode: true });
  populateStream(stream);
  for await (const chunk of stream) {
    console.log(chunk);
  }
}

function populateStream(stream) {
  async function worker(skip, cb) {
    const res = await axios.get(BASE_URL + `posts/${skip}`);
    stream.push(res.data);
    // stream.push(null); // just push null to break the stream
    return cb();
  }
  const queue = async.queue(worker, 50);
  for (let i = 1; i < 101; i++) {
    queue.push(i);
  }
}

main();
