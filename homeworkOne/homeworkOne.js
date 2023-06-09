// Задание 1 – Создать объект counter всеми возможными способами



// const counter1 = {};  - литеральный

// const counter2 = new Object(); - через ключевое слово new (через функцию конструктор)

// const counter3 = Object.create(null); - с помощью встроенных методов (без прототипа)

// const counter4 = Object.assign({}, {}); - с помощью встроенных методов



// Задание 2 – Скопировать объект counter всеми возможными способами


// 1) - использование библиотеки lodash
// const counter1 = lodash.clone({});

// 1) - использование библиотеки lodash
// const counter1 = lodash.cloneDeep({});

// 2) - использование методов JSON
// const counter2 = JSON.parse(JSON.stringify({}));

// 3) - создание своей собственной функции для глубокого копирования;

// const deepClone = (obj) => {
//   if (obj === null) return null;

//   let clone = Object.assign({}, obj);

//   Object.keys(clone).forEach(
//     (key) =>
//       (clone[key] =
//         typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
//   );

//   return Array.isArray(obj) && obj.length
//     ? (clone.length = obj.length) && Array.from(clone)
//     : Array.isArray(obj)
//     ? Array.from(obj)
//     : clone;
// };

// const a = {
//   foo: "bar",
//   obj: {
//     a: 1,
//     b: 2,
//   },
// };

// const b = deepClone(a);

//4) Реализация паттерна проектирования прототип для классов, экземпляры которых нужно копировать.

// class laptop {
//   constructor(size, color, price, operatingSystem) {
//     this.size = size;
//     this.color = color;
//     this.price = price;
//     this.operatingSystem = operatingSystem;
//   }
//   produce() {
//     return new laptop(this.size, this.color, this.price, this.operatingSystem);
//   }
// }

// const prototypeLaptop = new laptop("big", "black", 5000, true);

// const laptop1 = prototypeLaptop.produce();
// const laptop2 = prototypeLaptop.produce();
// const laptop3 = prototypeLaptop.produce();

// laptop3.color = "white";
// laptop3.operatingSystem = false;
// laptop3.price = 4000;

// console.log(laptop3);

// 5) Использование Object.assign()

// const user1 = {
//     name: 'Albina',
//     sex: 'female',
//     age: 22
// };

// const copyOfUser1 = Object.assign({}, user1);

//6)  - с помощью оператора spread
// const counter5 = { ...obj }; 



// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;


// 1) Объявляемая функция
// function makeCounter () {
//     return ('Hello!');
// };

// 2) Функциональное выражение

// const makeCounter = function () {
//     return ('Hello!');
// };

// 3) Стрелочная функция

// const makeCounter = () => ('Hello!');

// 4) Именованное функциональное выражение

// const f = function makeCounter () {
//     return ('Hello!');
// };

// Бонус
// Задание 1 –
// Написать функцию глубокого сравнения двух объектов:

// const obj1 = {
//   here: {
//     is: "on",
//     other: "3",
//   },
//   object: 'Z',
// };

// const obj2 = {
//   here: {
//     is: "on",
//     other: "2",
//   },
//   object: 'Z',
// };



// function deepEqual(obj1, obj2) {
//   const props1 = Object.getOwnPropertyNames(obj1);
//   const props2 = Object.getOwnPropertyNames(obj2);

//   if (props1.length !== props2.length) {
//     return false;
//   }

//   for (let i = 0; i < props1.length; i += 1) {
//     const prop = props1[i];
//     const bothAreObjects =
//       typeof obj1[prop] === "object" && typeof obj2[prop] === "object";

//     if (
//       (!bothAreObjects && obj1[prop] !== obj2[prop]) ||
//       (bothAreObjects && !deepEqual(obj1[prop], obj2[prop]))
//     ) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(deepEqual(obj1, obj2));

// Бонус Задание 2 –
// Развернуть строку в обратном направлении при помощи методов массивов:

//  function reverseStr(str){
//    return  str.split('').reverse().join('');
// }
// console.log(reverseStr('hello'));
