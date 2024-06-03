'use strict';

let num;

while (true) {
    num = prompt("Введите число больше 100:");
    if (num === null) {
        alert("Вы отменили выполнение скрипта");
        break;
    } else if (!isNaN(num) && num > 100) {
        alert(`Вы ввели число: ${num}`);
        break;
    }
}
