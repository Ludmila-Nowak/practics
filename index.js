/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */
// function askName() {
//   const message = prompt("Какое официальное название JavaScript?");
//   console.log(message);
//   if ("ECMAScript" === message) {
//     alert("Верно!");
//   } else {
//     alert("Не знаете? ECMAScript!");
//   }
// }
// askName();

// task-2

/**
//  *?      Напишите программу, которая получит от пользователя
//  *?      число (количество минут) и выведет в консоль
//  *?      строку в формате часов и минут
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10
//  */
// const time1 = prompt("Введіть число");

// function clock(arg1) {
//   const hours = String(Math.floor(arg1 / 60)).padStart(2, "0");
//   const minute = String(arg1 % 60).padStart(2, "0");
//   console.log(`${hours} : ${minute}`);

// }
// clock(time1);

/**
 *? При загрузке страницы пользователю предлагается
 *? в prompt ввести число. Ввод добавляется к значению
 *? переменной total.
 *? Операция ввода числа продолжается до тех пор,
 *? пока пользователь не нажмет кнопку Cancel в prompt.
 *? После того как пользователь прекратил ввод нажав на
 *? кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
 
 *! Делать проверку,что пользователь ввел именно число,
 *! а не произвольный набор символов, не нужно.
 */

// let number = prompt("Введіть число");
// let total = 0;
// do {
//   if (number !== null) {
//     total += Number(number);
//     number = prompt("Введіть ще одне число");
//   }
// } while (number !== null);
// console.log(total);

/**
 *? Напиши скрипт для об'єкта user,
 *? послідовно:
 *? 1 додати поле mood зі значенням 'happy'
 *? 2 замінить hobby на 'skydiving'
 *? 3 замінить значення premium на false
 *? 4 виводить вміст об'єкта users у форматі
 *? ключ: значення використовуючи Object.keys() і for...of
 */

const user = {
  name: "John",
  age: 20,
  hobby: "tennis",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

// const keys = Object.keys(user);
// console.log(keys);
for (const key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}
