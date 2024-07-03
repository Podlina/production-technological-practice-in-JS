function access (){
    if (true){
        let xLet = 'let x';
        var xVar = 'var x';
        const xConst = 'const x';
        console.log('Попытка вызова из блока функции ');
        console.log(xLet);
        console.log(xVar);
        console.log(xConst);
    }
    console.log('Попытка вызова из функции, вне блока ');
    console.log(xVar);
    console.log(xConst);
    console.log(xLet);

}

access();

console.log('Попытка вызова вне функции');
console.log(xVar);
console.log(xConst);
console.log(xLet);