// 1)   Порядок вывода:   1, 3, 6, 4, 2, 5


// console.log('1');

// setTimeout(() => console.log('2'), 1);

// let promiseNew = new Promise((resolve) => {
//    console.log('3');
//    resolve();
// });

// promiseNew.then(() => console.log('4'));

// setTimeout(() => console.log('5'));

// console.log('6');




// 2)   Порядок вывода: 1, 3, 2


// let promiseTree = new Promise((resolve, reject) => {
// resolve("a");

// console.log("1");

// setTimeout(() => {
//    console.log("2");
// }, 0);

// console.log("3");
// });




// 3)  Порядок вывода:  a, b, c


// let promiseTwo = new Promise((resolve, reject) => {
//    resolve("a");
// });

// promiseTwo
// .then((res) => {
//    return res + "b";
// })
// .then((res) => {
//    return res + "с";
// })
// .finally((res) => {
//    return res + "!!!!!!!";
// })
// .catch((res) => {
//    return res + "d";
// })
// .then((res) => {
//    console.log(res);
// });




// 4)   Порядок вывода: 1 123 , 2 123 , 3 321, 4 undefined


// function doSmth() {
//    return Promise.resolve("123");
// }

// doSmth()
// .then(function (a) {
//    console.log("1", a); //
//    return a;
// })
// .then(function (b) {
//    console.log("2", b);
//    return Promise.reject("321");
// })
// .catch(function (err) {
//    console.log("3", err);
// })
// .then(function (c) {
//    console.log("4", c);
// return c;
// });



// 5)   Порядок вывода:  1, 4, 3, 2


// console.log("1");

// setTimeout(function () {
//      console.log("2");
// }, 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");


// 6) Напишите функцию, которая будет проходить через массив целых чисел и
//  выводить индекс каждого элемента с задержкой в 3 секунды.
// Входные данные: [10, 12, 15, 21]


// const arr = [10, 12, 15, 21];

// function getArrayIndex(arr) {
//   let time = 0;

//   for (let i = 0; i < arr.length; i++) {
//     setTimeout(() => console.log(i), time);

//     time += 3000;
//   }
// }

// getArrayIndex(arr);



// 7) Прочитать про Top Level Await (можно ли использовать await вне функции async)
// Можно ли использовать await вне функции async?


// Нет, если мы попробуем использовать await внутри функции, объявленной без async, получим синтаксическую ошибку.
//  Аwait можно использовать только внутри async–функций.
