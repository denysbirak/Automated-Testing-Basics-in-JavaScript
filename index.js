// Task 1
let str1 = 'ahb acb aeb aeeb adcb axeb';
const re1 = /a.b/g;
console.log(str1.match(re1));

// Task 2
let str2 = '2 + 3 223 2223';
const re2 = /\b2\s*\+\s*3\b/;
console.log(str2.match(re2)[0]);

// Task 3
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

console.log(`Day: ${day}`);
console.log(`Month: ${month}`);
console.log(`Year: ${year}`);