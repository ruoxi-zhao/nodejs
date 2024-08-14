File System  8%
Input/output
Watching

1. File Paths [__dirname __filename path.join(__dirname, 'out') path.resolve() path.parse()]

2. Reading and Writing [fs.readFile() fs.readFileSync() fs.readFilePro()]
const {readFile} = require('fs').promises;

3. File Streams [fs.createReadStream() fs.createWriteStream()]

4. Reading Directories [fs.readdirPro()]

5. File Metadata [fs.statPro()]
const fs = require('fs').promises;
await fs.stat(__filename);

6. Watching [fs.watch('.', (eventname, filename) => {})]
