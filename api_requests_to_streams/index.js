const axios = require("axios").default;
const { Readable } = require("stream");

const BASE_URL = "https://jsonplaceholder.typicode.com/";

class StreamFromApiCalls extends Readable {
  constructor(skip = 1) {
    super({ objectMode: true }); // encoding: 'UTF-8' => Converts buffer to string
    this.skip = skip;
  }

  _read() {
    const self = this;
    axios
      .get(BASE_URL + `posts/${this.skip}`)
      .then((res) => {
        self.push(res.data);
        if(self.skip == 100) self.push(null);
        self.skip += 1;
      })
      .catch((err) => {
        self.emit("error", err);
        self.push(null);
      });
  }
}

async function main() {
  const stream = new StreamFromApiCalls(98);
  stream.on("data", (data) => {
    console.log(data);
  });
  stream.on("error", (err) => {
    console.log("error recieved");
    console.log(err.response);
    console.log("error recieved");
  });
}

main();
