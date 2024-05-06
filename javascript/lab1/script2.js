'use strict';

let num = parseInt(prompt("Введите число:"))
let str = '';

if (num <= 0) {
    str = "Введите корректное значение";
}

if (num % 10 === 1 && num % 100 != 11) {
    str = "На ветке сидит " + num + " ворон";
}

switch (num) {
    case 1:
        str = "На ветке сидит " + num + " ворона";
        break;
    case 2:
    case 3:
    case 4:
        str = "На ветке сидит " + num + " вороны";
        break;
    case 5:
        str = "На ветке сидит " + num + " ворон";
        break;
    default:
        str = "На ветке сидит " + num + " вороны";
        break;
}

alert(str);
