// Task 1
const car = {
    color: 'black'
}
console.log(car);

// Task 2
car.color = 'green';
console.log(car);

// Task 3
car.power = function() {
    console.log('Engine power: 500 hp')
}
console.log(car);
car.power();

// Task 4
const addAcceptedFruits = (numOfPears, numOfApples) => numOfPears + numOfApples
console.log(addAcceptedFruits(7, 5));

// Task 5
const greetWithNameInTerminal = (name) => {
    if(name === 'Denys') {
        console.log('Hello ' + name);
    } else {
        console.log('There is no such name');
    }
}
greetWithNameInTerminal('Edward');
greetWithNameInTerminal('Denys');

// Task 6
const calculateType = (argument) => {
    console.log('Argument type: ' + typeof(argument))
};
calculateType(123);
calculateType('abcde');
calculateType(true);

// Task 7
function isPrime(num) {
    if(num < 2) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}
console.log(isPrime(4));
console.log(isPrime(13));