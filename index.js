let num = 123;
let str = 'abcde';
let bool = true;

// Task 1. Addition
console.log('Addition:');
console.log(str + bool);
console.log(str + num);
console.log(num + bool);

// Task 2. Multiplication
console.log('\nMultiplication:');
console.log(str * bool);
console.log(str * num);
console.log(num * bool);

// Task 3. Division
console.log('\nDivision:');
console.log(str / bool);
console.log(str / num);
console.log(num / bool);

// Task 4. Explicit Conversion
console.log('\nExplicit Conversion:');

console.log('\nTo Number:');
console.log(Number(str));
console.log(Number(bool));

console.log('\nTo String:');
console.log(String(num));
console.log(String(bool));

console.log('\nTo Boolean:');
console.log(Boolean(num));
console.log(Boolean(str));