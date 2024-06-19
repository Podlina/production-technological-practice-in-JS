function valInteger (number){
    if (!Number.isInteger(number)) {
        throw new Error ('Это значение не целое число!')
    }
    return number;
}

try {
    let useInput = prompt("Введите целое число: ");
    let number = parseInt(useInput);

    if (isNaN(number)){
        throw new Error ('Это не целое число!')
    }

    valInteger(number);
    console.log('Это число не целое ', number);
}
catch (error){
     console.error('Ошибка:', error.message);
}
