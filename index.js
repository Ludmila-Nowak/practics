/**
 *?     Используя функцию if...else,
 *?     напишите код, который будет спрашивать:
 *?     "Какое официальное название JavaScript?"
 *?     Если пользователь вводит "ECMAScript",
 *?     то показать через alert: "Верно!"
 *?     в противном случае отобразить:"Не знаете? ECMAScript!"
 */
function askName() {
  const message = prompt("Какое официальное название JavaScript?");
  console.log(message);
  if ("ECMAScript" === message) {
    alert("Верно!");
  } else {
    alert("Не знаете? ECMAScript!");
  }
}
askName();
