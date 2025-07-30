// for (let i = 0; i < 5;i +=3){
//     console.log(i);
    
// }
// let i = 0;
// while (i<5) {
//     console.log(i);
//     i++;
// }

// let x = 0;
// while (x<3) {
//     console.log('hello');
//     x++;
// }


// let num1 = -5;
// let num2 = 12;
// let num3 = -8;
// let num4 = 0;
// let num5 = 3.5;

// if (num1 > 0) {
//     console.log('positive number', num1);
// } else if (num1 < 0) {
//     console.log('negative number', num1);
// } else {
//     console.log('neutral number', num1);
// }

// if (num2 > 0) {
//     console.log('positive number', num2);
// } else if (num2 < 0) {
//     console.log('negative number', num2);
// } else {
//     console.log('neutral number', num2);
// }

// if (num3 > 0) {
//     console.log('positive number', num3);
// } else if (num3 < 0) {
//     console.log('negative number', num3);
// } else {
//     console.log('neutral number', num3);
// }

// if (num4 > 0) {
//     console.log('positive number', num4);
// } else if (num4 < 0) {
//     console.log('negative number', num4);
// } else {
//     console.log('neutral number', num4);
// }

// if (num5 > 0) {
//     console.log('positive number', num5);
// } else if (num5 < 0) {
//     console.log('negative number', num5);
// } else {
//     console.log('neutral number', num5);
// }


let arr = [-5, 12, -8, 0, 3.5];
let positive = [];
let negative = [];
let neutral = [];
for (const result of arr) {
    if (result > 0) {
        positive.push(result);
       
        console.log('positive number',result);
        
        
    } else if (result < 0) {
       
        negative.push(result)
        console.log('negative number', result);

        
    } else {
        neutral.push(result);
        console.log('neutral number', result);


    }
    
}
console.log('all positive number',positive);
console.log('all positive number',negative);
console.log('all positive number',neutral);
