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
  - Streams have two modes binary mode and object mode. To get human readable data (object mode) you need to set the encoding as UTF-8

- [Writable Streams, Back pressuring](https://github.com/kartik1998/streams-deck/tree/master/writeable_streams_backpressuring)

  - [reference](https://www.youtube.com/watch?v=FS2OWxS5P_E&list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f&index=3)

- [Pipe, Duplex and Transform streams](https://github.com/kartik1998/streams-deck/tree/master/pipe_duplex_transform_streams)

  - [reference](https://www.youtube.com/watch?v=rQXaDH__Suk&list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f&index=4)
  - `pipe` method basically allows us to pipe data from any readable stream to any writable stream
  - `pipe` method automatically handles back pressuring for us
  - `pipe` ensure that you use pipe with error handling in http requests though, because if the client breaks the connection then your stream does not have `res` object to pipe to hence won't be closed (causing a memory leak). Try to use **pipeline** in such cases.
  - `Duplex` stream implements both a readable stream and a writable stream
  - `Transform` streams are essential to node. Example nodejs comes with zlib package which compresses data from readable streams and pipes it into a writable stream. `crypto` node module can encrypt / decrypt data from readable stream and pipe it to write stream via `Transform` streams

- [Http streaming](https://github.com/kartik1998/streams-deck/tree/master/http_streaming)

  - [reference](https://www.youtube.com/watch?v=CiGnubZC5cs&list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f&index=5)

- [Stream Conf](https://www.youtube.com/watch?v=aTEDCotcn20)

  - async/await, promises do **NOT** work well with **streams**
  - Don't change the behaviour of internal node streams. That may cause everything to break because most of node functionality relies on streams

- [Converting Api reponses with skip to stream](https://github.com/kartik1998/streams-deck/tree/master/api_requests_to_streams)
  - async.queue broke with this approach. If you want concurrency I would recommend using Promise batching
  - async iterator implementation
