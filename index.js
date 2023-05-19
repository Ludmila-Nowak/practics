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
 *?      Напишите программу, которая получит от пользователя
 *?      число (количество минут) и выведет в консоль
 *?      строку в формате часов и минут
 *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 *?      70 === 01:10
 */
const time1 = prompt("Введіть число");

function clock(arg1) {
  const hours = String(Math.floor(arg1 / 60)).padStart(2, "0");
  const minute = String(arg1 % 60).padStart(2, "0");
  console.log(`${hours} : ${minute}`);
  
}
clock(time1);