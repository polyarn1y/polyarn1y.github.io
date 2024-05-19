import { fib } from './lab2.js'; 

/**
 * Возвращает дробную часть числа.
 *
 * @param {number} num - Число для извлечения дробной части
 * @return {string} Дробная часть числа
 */
function getDecimal(num) {
    return (num - Math.floor(num)).toFixed(2);
}

/**
 * Приводит URL к стандартному виду с протоколом https.
 * 
 * @param {string} url - URL для нормализации.
 * @returns {string} Нормализованный URL с протоколом https.
 */
function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    }
    else if (url.startsWith('https://')) {
        return url;
    }
    else {
        return 'https://' + url;
    }
}

/**
 * Проверяет, содержит ли строка спам-сообщения.
 * 
 * @param {string} str - Строка для проверки.
 * @returns {boolean} true, если строка содержит спам-сообщения, иначе false.
 */
function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

/**
 * Усечет строку, если её длина превышает заданную максимальную длину.
 * 
 * @param {string} str - Строка для усечения.
 * @param {number} maxlength - Максимально допустимая длина строки.
 * @returns {string} Усеченная строка с добавленным многоточием при необходимости.
 */
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    }
    return str;
}

/**
 * Преобразует первый символ в верхний регистр
 * 
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с первой заглавной буквой.
 */
function ucFirst(str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

/**
 * Преобразует строку с дефисами в camelCase..
 * 
 * @param {string} str - Исходная строка с дефисами.
 * @returns {string} Строка в camelCase.
 */
function camelize(str) {
    return str
        .split('-')      
        .map((word, index) => index === 0 ? word : ucFirst(word)) 
        .join('');         
}

/**
 * Возвращает массив чисел Фибоначчи до n-го (не включая его).
 * 
 * @param {number} n - Натуральное число n.
 * @returns {BigInt[]} Массив чисел Фибоначчи до n-го.
 */
function fibs(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

console.log(fibs(5)); // [0n, 1n, 1n, 2n, 3n]