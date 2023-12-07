import fs from 'fs';
const lines = fs.readFileSync( '/Users/hackyourfuture/Desktop/Jspuzzle/puzzle2023/Day4/input.txt', 'utf-8').split('\n');
//Remove card number section
const newArray=lines.map(element=>element.split(': ')[1].split('| '))
//make first and second sections as array
const newArrayDetailed=newArray.map(x=>x.map(y=>y.split(' ').filter(r => r !== '')))
const points=[]
//Finding winning numbers
newArrayDetailed.forEach(item => {
    item.forEach((element,index)=>{if(index===0)
        points.push(element.filter(x=>item[1].includes(x)).length)})
});
//Get points and adding points
const sumOfPoints=points.map(item=>{if(item>0){return (2 ** (item-1))}else if(item===0){return item}}).reduce((a,b)=>a+b)
console.log(sumOfPoints);