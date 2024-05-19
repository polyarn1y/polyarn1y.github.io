'use strict';

let num;

do {
    num = prompt("Введите число больше 100:");
} while (isNaN(num) || num <= 100);

if (num == null) { 
    alert("Вы отменили выполнение скрипта");
}
