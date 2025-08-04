// //1
// const myArray = [2, 4, 5, 7];
// console.log(myArray[0]);
// console.log(myArray[myArray.length -1]);

// //2
// const fruits = ["apple", "banana", "star fruits", "orange",];
// console.log(fruits);

// fruits.push("pineapple");
// console.log(fruits);

// //3
// const fruits = ["mango", "banana", "apple", "watermelon"];
// fruits.pop();
// console.log(fruits);
// //4
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(number.length);
// //5
// const forLoop = [12, 24, 34, 45, 5, 66, 76, 100];

// for (let index = 0; index < forLoop .length; index++) {
//     const element = forLoop[index];
//     console.log(element);
    
// }
// //6
// const myArray = [23, 45, 56, 78, 12, 21, 32];
// myArray[2] = 100;
// console.log(myArray);

// //7
// const myArray = [100,200,300,400,4000];

// myArray.unshift(1000000);
// console.log(myArray);
// //8
// const array = [2, 3, 4, 5, 6, 7];
// array.shift();
// console.log(array);
// //9
// const fruits = ["apple", "mango", "orange", 'pineapple'];
// const hasBanana=fruits.includes("banana")
// console.log(hasBanana);
// //10
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const number_1=numbers.indexOf(5);
// console.log(number_1);
// //11
// const array_1 = [1, 2, 3, 4];
// const array_2 = [5, 6, 7, 8, 9];
// const new_array = array_1.concat(array_2);
// console.log(new_array);
// //12
// const splice_1 = [1, 2, 3, 4, 5, 6, 7];
// splice_1.splice(0, 3);
// console.log(splice_1);
// //13
// const Name = ["shariful", 'ariful', 'zakibul', 'torikul', 'monirul'];
// const newName = Name.slice(1, 4);
// console.log(newName);
// //14
// const arr = [12, 13, 14, 15, 16, 17, 18]
// const arr_2 = arr.map(x => x * 2);
// console.log(arr_2);
// //15
// const everyNumber = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
// for (const element of everyNumber) {
//     console.log(element);
    
// }
// //16
// const marks = [50, 40, 45, 37, 20];
// const result = marks.filter(x => x % 2 == 0);
// console.log(result);

// const average = [23, 33, 35, 37, 3, 9];
// const totalAvg = average.reduce((pre, currentIndex,) => {
//    return pre + currentIndex;
// }, 0);
// console.log(totalAvg);

// const array =[1, 2, 3, 4, 5, 6, 7, 10];
// for (let index = 0; index <= 10; index++) {
//    if (!array.includes(index)) {
//     console.log(index);
    
//    }
    
// };





// const array = [6, 4, 3, 9, 7, 4, 6, 7, 2];
// const result = array.sort((a, b) => a - b);
// console.log(result);

// const array = ['asia', 'europe', "africa", 'north america', 'south america', 'antarctica'];
// const result = array.filter(item => typeof item === 'string').sort((a, b) => a.length - b.length);
// console.log(result);


// const array = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1];
// const newArray = [...new Set(array)];
// console.log(newArray);

// const array = ["apple", "banana", "orange", "pineapple", "orange"];
// const newArray = [...new Set(array)];
// console.log(newArray);








const array = [1, 2, 3, 4, 5, 40, 7];
const array_1 = array.findIndex(x => x === 6);
console.log(array_1);

const Name = ["shariful", "kamal", "torikul", "jisan"];
const myName = Name.findIndex(x => x === 'shariful');
console.log(myName);

const data = {
    Name: "shariful",
    id: '232-0058-203',
    department: 'cse',
    address: ["Barisal", 'najirpur', 'pirojpur'],
};
const val = data.address.findIndex(x => x === "najirpur");
console.log(val);
