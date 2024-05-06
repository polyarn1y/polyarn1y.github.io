'use strict';

let num = parseInt(prompt("Введите число:"))
let str = '';
const remainder = num % 10;
const hundredsRemainder = num % 100;


if (num <= 0) {
    str = "Введите корректное значение";
}

switch (true) {
    case 1:
        str = "На ветке сидит" + num + "ворона";
    case remainder === 1 && hundredsRemainder!== 11:
        str = "На ветке сидит " + num + "ворон";
        break;
    case remainder >= 2 && remainder <= 4 && (hundredsRemainder < 10 || hundredsRemainder >= 20):
        str = "На ветке сидит " + num + " вороны";
        break;
    default:
        str = "На ветке сидит " + num + " ворон";
        break;
}
alert(str);
