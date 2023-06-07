// 1) Написать ответ - почему массивы в JS являются "неправильными" и
//  совмещают в себе несколько структур данных? Какие ?

// В JS , массив, как структура данных, является "неправильным", потому что может хранить любые типы данных и не имеет фиксированной длины (динамическая длина).
//  А так же совмещает в себе несколько других структтур данных: стек и очередь.

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

// function logger() {
//     console.log(`I output only external context: ${this.item}`);
//   }

//   const obj = {
//       item: "some value"
//   };

// через bind

// function logger() {
//   console.log(`I output only external context: ${this.item}`);
// }

// const obj = {
//   item: "some value",
// };

// const obj2 = logger.bind(obj)();

// console.log(obj2);

// через apply

// function logger() {
//   console.log(`I output only external context: ${this.item}`);
// }

// const obj = {
//   item: "some value",
// };

// logger.apply(obj, []);

// console.log(logger());

// через call

// function logger() {
//   console.log(`I output only external context: ${this.item}`);
// }

// const obj = {
//   item: "some value",
// };

// logger.call(obj);

// console.log(logger());

//  Бонус: Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

// function bind(func, context) {
//   return function (...args) {
//     return func.apply(context, args);
//   };
// };

// const a = function () {
//   return this;
// };

// const b = bind(a, {
//   foo: "var",
// });

// const c = bind(b, null);

// const d = bind(c, {
//   g: "1",
// });

// console.log(c());

// Funtion.proptotype.bind = funtion(context);
// const func = this;

// return function (...args) {
//   return func.apply(context, args);
// };
