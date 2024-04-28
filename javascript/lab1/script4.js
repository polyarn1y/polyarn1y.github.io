'use strict';

let n = prompt("Введите число n (условие: n > 1):");

if (n > 1) {
    console.log("Простые числа от 2 до " + n + ":");
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
} else {
    console.log("Пожалуйста введите число, большее чем 1.");
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}