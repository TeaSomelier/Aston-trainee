// 1) Какие бывают алгоритмы сортировок ?

// Сортировка пузырьком (Bubble Sort)
// Сортировка вставками (Insertion Sort)
// Сортировка Шелла (Shellsort)
// Сортировка выбором (Selection Sort)
// Быстрая сортировка (Quick Sort)
// Сортировка слиянием (Merge Sort)
// Timsort
// Сортировка кучей (Heap Sort)
// Плавная сортировка (Smoothsort)
// Терпеливая сортировка (Patience sorting)
// Сортировка с помощью бинарного дерева (Tree Sort)
// Карманная сортировка (Bucket Sort)
// Цифровая сортировка (Radix Sort)
// Сортировка подсчетом (Counting Sort)
// Сортировка Хэна (Han's Sort)
// Многопоточная сортировка слиянием (Multithreaded merge sort)
// PSRS-сортировка (PSRS-sorting)

// 3) Создать объект Person несколькими способами, после создать объект Person2,
//  чтобы в нём были доступны методы объекта Person.
//  Добавить метод logInfo чтоб он был доступен всем объектам.

// const person = new Object();
// const person = {};
// const person2 = {};

// const person = {};

// person.logInfo = function() {
//   console.log('Hello!');
// };

// const person2 = Object.assign({}, person);

// console.log(person2)

// 4) Создать класс PersonThree c get и set для поля name и конструктором,
//  сделать класс наследник от класса Person.

// class PersonThree {
//   constructor(name) {
//     this._name = name;
//   };

//   get name() {
//     return this._name;
//   };

//   set name(value) {
//     this._name = value;
//   };

//   sayHi() {
//     console.log("Hello!");
//   };
// };

// class Heir extends PersonThree {
//   constructor(name, age) {
//     super(name);
//     this._age = age;
//   };
// };

// const alex = new Heir("ALex", "28");
// console.log(alex);

// alex.sayHi();

// БОНУС:
// 1) Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let total = 13;

// // //result = [4, 9]

// const firstSum = (arr, total) => {
//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] == total) {
//         sum.push(arr[i]);
//         sum.push(arr[j]);
//         return sum;
//       }
//     }
//   }
//   return null;
// };

// console.log(firstSum(arr, total));

// firstSum(arr,total)

// 2) Какая сложность у вашего алгоритма ?

//  Сложность О(n^2)
