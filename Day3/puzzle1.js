import fs from 'fs';

const lines = fs.readFileSync('/Users/hackyourfuture/Desktop/Jspuzzle/puzzle2023/Day3/input.txt', 'utf-8').split('\n');
const newArray = lines.map(item => item.split(' '));
const numbers = [];
//const x= newArray.map(x=>x.map(y=>y.split(' ')))
newArray.forEach(a => a.forEach((b,i )=> {  return numbers.push(b.match(/\d+/g)) }));
//console.log(x[0][0]);
console.log(numbers[0]);
console.log(newArray);
console.log(newArray[0]);
console.log(newArray[1]);//