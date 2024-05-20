'use strict'

let num = parseInt(prompt("Введите кол-во ворон"))
let lastOne = num%10
let lastTwo = num%100
    if (num => 0) {
        if (lastOne === 0 || lastOne >= 5 || (lastTwo>=11 && lastTwo<=14)) alert(`${num} ворон`)
        else if (lastOne===1) alert(`${num} ворона`)
        else alert(`${num} вороны`)
    }
    else alert(`Вы отменили выполнение`)
    
