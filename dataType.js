// 1
const bookTitle = "eighty ninety four";
console.log(typeof bookTitle);

//2
const temperature = 36.5;
console.log(typeof temperature);
//3
const isHoliDay = true;
console.log(typeof isHoliDay);
//4
const myArray = ["Apple", "Banana", "guava"];
console.log(typeof myArray);
//5
let price = '150';
let price1 = parseInt(price);
console.log(typeof price1);

//6
const myObject = {
    Name: "shariful alam",
    age: 24,
    city: "Dhaka",
};
console.log(myObject.city);
//7
const variableOne = null;
console.log(typeof variableOne);
//8
const x = 20;
const y = '20'
console.log(x == y);
console.log(x===y);
//9
let myUndefinedVariable;
console.log(typeof myUndefinedVariable);

//10
const myString = 'Hello';
console.log(parseInt(myString));
//11
const myNumber = 100;
const val = myNumber.toString();
console.log(typeof val);
// !!0 → false, !!any other number → true
const val1 = !!2;
console.log(val1);
//12
const a = 100;
const b = "sharif";
console.log(a+b);
//13

const data = '123';
const data1 = parseInt(data);
const data2 = 456;
console.log(data1+data2);

//14
function variable(x) {
    if (typeof x === 'number') {
        return true;
    } else {
        return false;
    }
}
console.log(variable(20));
//15
let s = 5;
if (typeof s === 'number' && s < 10) {
    console.log('it is true');
    
} else {
    console.log('it is false');
    
}