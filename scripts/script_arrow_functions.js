function sayHelloToPerson(name) {
  console.log("hello, " + name);
}

const sayHello2 = () => {
  console.log("hello 2");
};

const sayHelloToPerson2 = (name) => {
  console.log("hello, " + name);
};
// в функціях оголошених function можно достучатись до псевдомасиву arguments.
// Цей масив повертає і зберігає дані про аргументи, які ми передає в цю функцію
function summ(a, b) {
  console.log(arguments);
  //   console.log(a + b);
  return a + b;
}

const summ2 = (a, b) => {
  console.log(a + b);
};

const summ3 = (a, b) => {
  return a + b;
};

const summ4 = (a, b) => a + b;
