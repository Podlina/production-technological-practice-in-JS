'use stric';

function factorial(num) {
    if (num <0) return undefined;
    let factor = 1
    for (let i = 1; i<=num; i++){
        factor*=i;
    }
    return factor;
}

var num = 5;
console.log(`Факториал числа ${num} равен ${factorial(num)}`);