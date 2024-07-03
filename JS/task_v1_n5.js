function sayHi (){
    console.log('Hello Vitebsk!');
}

 const intervalID = setInterval(sayHi, 1000);
 setTimeout(() => { clearInterval(intervalID); console.log('stop'); }, 5000);