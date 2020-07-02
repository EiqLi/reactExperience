/* eslint-disable no-useless-constructor */
// 父类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log("hello");
  }
}

// 子类 美国人
class American extends Person {
  constructor(name, age) {
    // 为什么一定在constructor中调用super
    // 如果一个子类通过extends关键字继承了父类 那么在子类的constructor的构造函数中必须优先调用super（）
    // super（）是什么
    // super（）是一个函数 而且他是父类的构造器 子类中的super就是父类构造器的引用
    // 为什么调用了super（） a1的实例都成undefined了
    super(name, age);
  }
}

const a1 = new American("jack", 13);
console.log(a1);
a1.sayHello();
// 子类 中国人
class Chinese extends Person {
  // 在子类中 this只能放在super（）之后使用
  constructor(name, age, idNumber) {
    super(name, age)
    this.idNumber = idNumber
  }
}
const c1 = new Chinese("zhangsan", 18, '370283199611264539');
console.log(c1);
c1.sayHello();
