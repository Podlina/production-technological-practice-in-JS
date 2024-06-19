function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 1 completed');
            resolve('Result 1');
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 2 completed');
            resolve('Result 2');
        }, 2000);
    });
}

function asyncOperation3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Operation 3 completed');
            resolve('Result 3');
        }, 1500);
    });
}

function runSequentially(operations) {
    let promise = Promise.resolve();

    operations.forEach(operation => {
        promise = promise.then(operation);
    });

    return promise;
}

const operations = [asyncOperation1, asyncOperation2, asyncOperation3];

runSequentially(operations).then(() => {
    console.log('All operations completed');
}).catch((error) => {
    console.error('An error occurred:', error);
});
