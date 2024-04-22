// Task 1
try {
    console.log(a);
    let a = 3;
} catch {
    console.log('let must be declared before use');
}

// Task 2
try {
    let divisor = 0;

    if(divisor === 0){
        throw new Error('cannot be divided by zero');
    }
   
    let result = 1 / divisor;
} catch (error) {
    console.error(error.message);
}