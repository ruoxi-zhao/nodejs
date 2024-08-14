const request = require('./req-pro.js');

test('asynchronous error test', async () => {
  // const result = await request('ht‌tp://error.com');
  // expect(result).rejects.toStrictEqual(Error('network error'));
  await expect(request('ht‌tp://error.com')).rejects.toStrictEqual(Error('network error'));
});

test('asychronous success test', async () => {
  const result = await request('https://jsonplaceholder.typicode.com/posts/1');
  expect(result).toStrictEqual(Buffer.from('some data'));
  expect(Buffer.isBuffer(result)).toBeTruthy();
});
