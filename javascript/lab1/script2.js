'use strict';

let num = parseInt(prompt("Введите число:"))

if (num === 1) {
    alert("На ветке сидит 1 ворона");
} else if (num >= 2 && num <= 4) {
    alert("На ветке сидит " + num + " вороны");
} else if (num >= 5) {
    alert("На ветке сидит " + num + " ворон");
} else {
    alert("Введите корректное значение");
}

switch (num) {
    case 1:
        alert("На ветке сидит 1 ворона");
        break;
    case 2:
    case 3:
    case 4:
        alert("На ветке сидит " + num + " вороны");
        break;
    case 5:
        alert("На ветке сидит 5 ворон");
        break;
    default:
        alert("Введите корректное значение");
        break;
}
