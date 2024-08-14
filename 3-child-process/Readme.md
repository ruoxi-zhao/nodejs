Child Processes  8%
Spawning or Executing child processes
Child process configuration

1. spawn & spawnSync Methods [spawn(process.execPath, ['-e', 'process.exit(1)'])]
返回child_process实例，可以进行stdio配置，可以监听事件

2. Process Configuration [spawn(node, [-e, 'process.exit(1)], {cwd: xxx, env: {}})]
env cwd

3. Child STDIO [stdio: pipe, ignore, inherit, process.stdout等stream]
const scp = spawn(node, ['-e', 'process.stdin.pipe(process.stdout)'], {
  stdio: ['pipe', 'inherit', 'inherit'],
});
scp.stdin.write('hello world');
scp.stdin.end();
