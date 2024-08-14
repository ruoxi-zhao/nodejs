class CustomError extends Error {
  constructor(varname='') {
    super(varname + ' is custom');
    this.code = 'ERR_CUSTOM_CODE';
  }
  get name() {
    return `CustomError[${this.code}]`;
  }
}

try {
  throw new CustomError('test');
} catch(error) {
  if (error.code === 'ERR_CUSTOM_CODE') {
    console.log(error.name);
  }
}
