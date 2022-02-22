## Streams Deck [Node JS]

- Node JS Streams: [youtube playlist](https://www.youtube.com/playlist?list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f)
- Docs: [link](https://nodejs.org/api/stream.html)

### Index

- [Streams Introduction (Buffer vs Stream)](https://github.com/kartik1998/streams-deck/tree/master/buffer_vs_stream)

  - [reference](https://www.youtube.com/watch?v=qU8PmZOOnac&list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f&index=1)
  - `--trace_gc` (view garbage collection logs)
  - We have two types of garbage collection - (Scavenge and Mark Sweep)
  - Mark sweep is a bigger deal because it "halts" your node process to collect garbage
  - Scavenge is a lighter version of mark sweep i.e it cleans much lesser amount of garbage and hence is quicker. So we basically want more scavenge as compared to Mark sweep
  - If you run `node --trace_gc buffer_vs_stream/buffer.js` & `node --trace_gc buffer_vs_stream/stream.js` (and open multiple tabs on localhost:3000 in your browser) you'll notice that **mark sweeps** in the stream.js process are very less as compared to buffer.js process (which is what we prefer because we want less mark sweeps). You'll also notice that while buffer.js spikes up the memory (when you open multiple tabs on localhost:3000) and then the memory instantly drops down (because the file was loaded into buffer and now has been served to client) this is not the case for stream.js because it sends the file buffers as a `stream`.

- [Readable Streams, constructing a stream from an array | inheriting Readable](https://github.com/kartik1998/streams-deck/tree/master/readable_streams)
  - [reference](https://www.youtube.com/watch?v=_pqv06ySvuk&list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f&index=2)
