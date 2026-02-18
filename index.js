const drink = 2;

switch (choice) {
  case 1:
    console.log("Кава");
    break;
  case 2:
    console.log("Чай");
    break;
  case 3:
    console.log("Сік");
    break;
  default:
    console.log("Невірний вибір");
}

const day = prompt("Введіть день тижня");
switch (day.toLowerCase()) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "пʼятниця":
    alert("Це робочий день");
    break;

  case "субота":
  case "неділя":
    alert("Це вихідний");
    break;

  default:
    alert("Невірно введений день тижня");
}

const month = 3;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Літо");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Осінь");
    break;

  default:
    console.log("Невірний номер місяця");
}

let color = prompt("Введіть колір світлофора:");

switch (color.toLowerCase()) {
  case "червоний":
    alert("стоп");
    break;

  case "зелений":
    alert("йти");
    break;

  case "жовтий":
    alert("чекати");
    break;

  default:
    alert("Невідомий колір");
}

const a = Number(prompt("Введіть перше число:"));
const b = Number(prompt("Введіть друге число:"));
const operator = prompt("Введіть оператор (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = a + b;
    alert("Результат: " + result);
    break;

  case "-":
    result = a - b;
    alert("Результат: " + result);
    break;

  case "*":
    result = a * b;
    alert("Результат: " + result);
    break;

  case "/":
    if (b === 0) {
      alert("Помилка: ділення на нуль!");
    } else {
      result = a / b;
      alert("Результат: " + result);
    }
    break;

  default:
    alert("Невідомий оператор");
}