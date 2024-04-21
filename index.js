// Task 1
const movies = ['Memento', 'Skyfall', 'Shutter Island', 'The Intouchables', 'Source Code', 'Interstellar', 'The Truman Show', 'Forrest Gump', 'The Matrix', 'Tenet'];

for(let movie of movies){
    console.log(movie);
}

// Task 2
const carManufacturers = ['Suzuki', 'Tesla', 'Mercedes', 'Volkswagen', 'BMW', 'Kia', 'Jeep', 'Nissan', 'Chevrolet', 'Hyundai'];
const strCarManufacturers = carManufacturers.join(',');
console.log(strCarManufacturers);

const carManufacturers2 = strCarManufacturers.split(',');
console.log(carManufacturers2);

// Task3
const friends = ['Artem', 'Igor', 'Max', 'Vlad', 'Kostya'];
const friendsGreetings = friends.map(friend => 'Hello ' + friend);
console.log(friendsGreetings);

// Task 4
const numbers = [0, 5, 10, 15, 20, 25, 30, 35, 40, 50];
const numbersToBooleansArray = numbers.map(number => Boolean(number));
console.log(numbersToBooleansArray);

// Task 5
const array = [1,6,7,8,3,4,5,6];
array.sort((a, b) => b - a);
console.log(array);

// Task 6
const array2 = [1,6,7,8,3,4,5,6];
const filteredArray = array2.filter(e => e > 3);
console.log(filteredArray);

// Task 7
const findIndexByValue = (arr, num) => arr.indexOf(num);
const array3 = [0, 3, 11, 2, 12, 28, 31, 33, 70, 8];
console.log(findIndexByValue(array3, 28));

// Task 8
let a = 0;

while(a < 10){
    console.log(a++);
}

// Task 9
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

let primeNum = 2;
while(primeNum < 100){
    if(isPrime(primeNum)){
        console.log(primeNum);
    }
    primeNum++;
}

// Task 10
let oddNum = 1;
while(oddNum < 100){
    console.log(oddNum);
    oddNum += 2;
}