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

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// // const keys = Object.keys(user);
// // console.log(keys);
// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }
//

// task2-lesson2
/* Напишіть функцію, яка приймає об'єкт і рахує загальну суму зарплат працівників. */
//
// const someObj = {
//   worker1: 360,
//   worker2: 750,
//   worker3: 240,
// };

// function sallary(obj) {
// const arr = Object.values(obj);
// let sum = 0;
// for(const item of arr){
//   sum += item;
// }
// return sum;
// }
// const sumSallary = sallary(someObj);
// console.log(sumSallary);
//

/**
 *? Напишіть ф-цію calcTotalPrice(someStones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція вважає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(someStones, stonesName) {
//   // console.log(someStones);
//   // console.log(stonesName);
//   for (const stone of someStones) {
//     // console.log(stone);
//     if (stonesName === stone.name) {
//       return stone.price * stone.quantity;
//     }
//   }
// }
// const sum = calcTotalPrice(stones, "Сапфир");
// console.log(sum);

// task 4

// напиши код який із массиву arr видаляє елемент foo.
// розвертає цей массив
// і повертає рядок js is the best
// вхідний массив не має змінюватись (мутуватися)

// const arr = ["best", "the", "foo", "is", "js"];
// const arr1 = arr.slice(0, arr.length);
// console.log(arr1);
// const index = arr1.indexOf("foo");
// arr1.splice(index, 1);
// arr1.reverse();
// console.log(arr1.join(" "));

/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
// const concerts = {
//   Київ: new Date('2020-04-01'),
//   Умань: new Date('2023-07-02'),
//   Вінниця: new Date('2020-04-21'),
//   Одеса: new Date('2023-07-15'),
//   Хмельницький: new Date('2020-04-18'),
//   Харків: new Date('2023-07-10'),
// };
// function sortConcerts(obj) {
//   const keys = Object.keys(obj);
//   return keys
//     .filter(key => obj[key] > new Date())
//     .sort((a, b) => obj[a] - obj[b]);
// }
// console.log(sortConcerts(concerts));
// console.log(new Date('2020-04-18'));

//Task 2
/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const calcTags = (arr) => {
//   const totalTags = arr.flatMap((tweet) => tweet.tags);
//   console.log(totalTags);
//   const allTags = totalTags.reduce((acc, tag) => {
//     console.log(acc);
//     return {
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
//   }, {});
//   return allTags;
// };
// console.log(calcTags(tweets));

//task3
/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */
class Client {
  #login;
  #email;
  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const user1 = new Client("User1", "fgsdf@jf");
user1.login = "login2";
console.log(user1.login);
