Buffer and Streams  11%

Node.js Buffer API’s
Incremental Processing
Transforming Data
Connecting Streams

1. Allocating Buffers [Buffer.alloc(10)]

2. Converting Strings to Buffers [Buffer.from('some data', 'utf8')]

3. Converting Buffers to Strings [buffer.toString('hex')]
const {StringDecoder } = require('string_decoder');
const decoder = new StringDecoder();
decoder.write(buffer.toString());

4. JSON Serialization and Deserialization Buffers [JSON.stringify() JSON.parse()]

5. Readable stream [fs.createReadStream(绝对路径); objectMode: true]

6. Writable stream [fs.createWriteStream()]

7. End-of-Stream [finished]
const {finished} = require('stream');

8. Transforming Data [new Transform({})]
const {Transform} = require('stream');
const transform = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});

9. Connecting Streams [pipeline()]
const {pipeline} = require('stream');
pipeline(
  fs.createReadStream('input.txt'),
  transform,
  fs.createWriteStream('output.txt'),
  (err) => {
    if (err) {
      console.error('An error occurred.', err);
      process.exitCode = 1;
    } else {
      console.log('Pipeline succeeded.');
    }
  }
);
