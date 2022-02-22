const { Readable } = require("stream");

const advices = [
  "No ice for drinks? Use frozen vegetables.",
  "If you feel alone, watcha horror movie before going to be. You won't feel alone anymore.",
  "Wake up early",
  "If you can't blind them with brilliance, baffle them with nonsense",
  "Always borrow money from a pessimist, they won't expect it back",
];

class StreamFromArray extends Readable {
  constructor(array) {
    super({ objectMode: true }); //encoding: 'UTF-8' => Converts buffer to string
    // super(); if you don't want the chunk to be a buffer like <10 20 40 ....>
    this.array = array;
    this.index = 0;
  }

  _read() {
    if (this.index <= this.array.length) {
      const chunk = {
        data: this.array[this.index],
        index: this.index,
      };
      this.push(chunk); // pushing a chunk in the stream pipeline
      this.index += 1;
    } else this.push(null); // pushing null into a stream pipeline means that the stream has ended
  }
}

const adviceStream = new StreamFromArray(advices);

adviceStream.on("data", (chunk) => console.log(chunk));

adviceStream.on("end", () => console.log("done!"));
