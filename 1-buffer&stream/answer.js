// Buffer allocate
console.log(Buffer.alloc(4));
console.log(Buffer.allocUnsafe(4));

// convert
const buffer = Buffer.from('hello world');
console.log(buffer);
console.log(buffer.length);
console.log('to string', buffer.toString());

const { StringDecoder } = require('string_decoder');
const frag = Buffer.from('9180', 'hex');
const decoder = new StringDecoder();
console.log(frag.toString('hex'), frag.toString());
console.log(decoder.write(frag));

const buffer1 = Buffer.from([0x68, 0x65, 0x6c]); // 'hel'
const buffer2 = Buffer.from([0x6c, 0x6f]); // 'lo'
console.log(buffer1.toString(), buffer2.toString());
const str1 = decoder.write(buffer1);
const str2 = decoder.write(buffer2);
console.log(str1 + str2); 

// JSON
const buffer3 = Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
console.log(buffer3.toJSON());
const bufferJSON = JSON.stringify(buffer3);
console.log(bufferJSON);
console.log(JSON.parse(bufferJSON));
console.log(buffer3.toString());

// Readable stream
const fs = require('fs');
// 默认每次读取16kb的数据
const rs = fs.createReadStream(__dirname +'/Readme.md');
rs.on('data', chunk => {
  console.group('readable stream');
  console.log(chunk.toString());
  console.groupEnd();
});
rs.on('error', error => {
  console.error(error.message);
});
rs.on('end', () => {
  console.log('read finished!');
});

// Writable stream
const ws = fs.createWriteStream(__dirname+'/out');
ws.on('finish', () => console.log('write finished!'));
ws.write('Hello\n');
ws.write('World\n');
ws.end();

// Transform stream & connecting stream
const { createGzip } = require('zlib');
const transform = createGzip();
transform.on('data', chunk => {
  console.log('transform stream-------', chunk.toString('base64'));
});
transform.write('ruo xi\n');
transform.end();

const { Transform, pipeline } = require('stream');
const transform2 = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});
const rs2 = fs.createReadStream(__dirname+'/in');
const ws2 = fs.createWriteStream(__dirname+'/out-pipeline');
pipeline(rs2, transform2, ws2, err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('pipeline finished!');
  }
});
