'use strict';

let n = prompt("Введите число n:");

function generateTable(rows) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < 6; j++) {
            if ((i + j) % 5 < 3) {
                row += 'dog\t';
            } else {
                row += 'cat\t';
            }
        }
        console.log(row);
    }
}

generateTable(n);
