import fs from 'fs';

const lines = fs.readFileSync( '/Users/hackyourfuture/Desktop/Jspuzzle/puzzle2023/Day1/input.txt', 'utf-8').split('\n');

//extract numbers from strings
const numberForm =lines.map(item => item.replace(/\D/g, ""));
//Get a new array from with first and last integers
const numbersTwoDigit = [];
numberForm.forEach(element => {
    if (element.length > 1) {
        numbersTwoDigit.push(element.slice(0, 1).concat(element.slice(-1)));
    } else {
        numbersTwoDigit.push(element.slice(0, 1).concat(element.slice(0, 1)));
    }

});
//Adding all the numbers
const sum = numbersTwoDigit.reduce((accumulator, currentValue) => {
    return +accumulator + +currentValue;
}, 0);
console.log(sum);