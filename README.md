## Streams Deck [Node JS]

- Node JS Streams: [youtube playlist](https://www.youtube.com/playlist?list=PLrwNNiB6YOA18XANsFe0CnizlhYKjJT0f)
- Docs: [link](https://nodejs.org/api/stream.html)

#### Index

- [Streams Introduction (Buffer vs Stream)](https://github.com/kartik1998/streams-deck/tree/master/buffer_vs_stream)
  - `--trace_gc` (view garbage collection logs)
  - We have two types of garbage collection - (Scavenge and Mark Sweep)
  - Mark sweep is a bigger deal because it "halts" your node process to collect garbage
  - Scavenge is a lighter version of mark sweep i.e it cleans much lesser amount of garbage and hence is quicker So we basically want more scavenge as compared to Mark sweep
