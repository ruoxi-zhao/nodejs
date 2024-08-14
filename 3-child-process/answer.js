// spawn
const { spawn } = require("child_process");
const path = require("path");

const scp = spawn(process.execPath, ['-e', 'console.log("child process output.");console.error("error output.");process.exit(1);']);
scp.stdout.pipe(process.stdout);
scp.stderr.pipe(process.stderr);
scp.on('close', (code) => {
  console.log('close event with code', code);
});

// env cwd
spawn(process.execPath, ['-e', 'console.log(process.env);console.log(process.cwd())'], {
  env: {CUSTOM_ENV: 'custom_env'},
  cwd: path.parse(process.cwd()).root,
  stdio: ['inherit', 'inherit', 'ignore'],
});

// child STDIO
const scp2 = spawn(process.execPath, ['-e', 'console.error("error output");process.stdin.pipe(process.stdout)'], {
  stdio: ['pipe', 'inherit', 'inherit'],
});
scp2.stdin.write('input data\n');
scp2.stdin.end();
