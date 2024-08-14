// 原型链继承
class First {
  constructor() {
    this.name = 'first';
  }
  eat() {
    console.log('First Eat');
  }
}

class Second extends First {
  constructor() {
    super();
    this.name = 'second';
  }
  drink() {
    console.log('Second Drink');
  }
}

class Third extends Second {
  constructor() {
    super();
    this.name = 'third';
  }
  sleep() {
    console.log('Third Sleep');
  }
}

const third = new Third();
third.eat();
third.drink();
third.sleep();
