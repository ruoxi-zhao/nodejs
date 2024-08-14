Error Handling  8%
Common patterns
Handling errors in various scenarios

1. Throwing [throw new Error('custom error')]

2. Custom Errors [class CustomError extends Error {constuctor(){super()}, get name() {}}]

3. Try/Catch [try {} catch(error) {error.code}]

4. Rejections [promise.then().catch(error => {})]

5. Async Try/Catch [await方法需要使用try/catch捕捉异常]