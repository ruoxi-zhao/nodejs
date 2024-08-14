class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    console.log(require.main===module);
    return Math.PI * this.radius ** 2;
  }
}

module.exports = Circle;
