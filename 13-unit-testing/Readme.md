Unit Testing  6%
Using assertions
Testing synchronous code
Testing asynchronous code

1. sychronous code [expect(() => {xxx}).toThrow() expect().toStrictEqual() expect().toBeTruthy()]
test('xxx', async () => {
  expect(() => {}).toThrow();
});

2. asynchronous code [await expect(xxx).rejects.toStrictEqual()]

jest --coverage
