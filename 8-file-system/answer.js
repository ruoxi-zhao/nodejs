const path = require('path');

// file paths
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, 'out'));
console.log(path.resolve(__filename));
console.log(path.parse(__filename));

// reading & writing files
const fs = require('fs').promises;
async function run() {
  const data = await fs.readFile(__dirname+'/in.txt');
  fs.writeFile(__dirname+'/out.txt', data.toString().toUpperCase());
}

run().catch(error => {
  console.error('caught an error', error);
});

// reading directories
async function run2() {
  const files = await fs.readdir(__dirname);
  console.log(files);
}
run2().catch(error => {
  console.error(error);
});

// file metadata
async function run3() {
  const stats = await fs.stat(__dirname+'/out.txt');
  console.log(stats);
  console.log(stats.isDirectory());
}
run3().catch(error => {
  console.error(error);
});

// watching
const {watch} = require('fs');
watch('.', (evtname, filename) => {
  console.log(evtname, filename);
});
