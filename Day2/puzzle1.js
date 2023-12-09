import fs from 'fs';

const lines = fs.readFileSync( '/Users/hackyourfuture/Desktop/Jspuzzle/adventofcode2023/Day2/input.txt', 'utf-8').split('\n');

const noWorkingIds = [];
const newArray = lines.map(element => element.split(' '));

newArray.forEach
    (element => element.forEach
        ((item, k) => {
            if (((item == 'blue' || item == 'blue,' || item == 'blue;') && element[k - 1] > 14) || ((item == 'red' || item == 'red,' || item == 'red;') && element[k - 1] > 12) || ((item == 'green' || item == 'green,' || item == 'green;') && element[k - 1] > 13)) { noWorkingIds.push(element[1].replace(/\D/g, "")); }
        }));

const sumOfNoWorking = noWorkingIds.filter((item, index) => noWorkingIds.indexOf(item) === index).reduce((a, b) => { return +a + +b; }, 0);
const sumIds = newArray.map((item, index) => item[1] = index).reduce((a, b) => { return a + b; }, 0)-sumOfNoWorking
console.log(sumIds);