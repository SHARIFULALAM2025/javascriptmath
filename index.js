// //how to add two number
// let x = 30;
// let y = 40;
// let z = x + y;
// console.log(z);

// function addition(x ,y) {
//      z = x + y;
//      return z;
// };
// console.log(addition(20, 30));
// //how to add three number

// function Addition(x,y,z) {
//      return x + y + z;
// };
// console.log(Addition(12,12,12));

// //triangle  area
// function triangleArea(width, height) {
//      return width * height;
     
// };
// console.log(triangleArea(12.12,24,24));
// function pori(width, height) {
//      return 2 * width * height;
     
// }
// console.log(pori(6, 6));

// //how to add log value
// function Adman(x) {
//      return Math.log(x);
// }
// console.log(Adman(1).toFixed(4));
// //how to find degree value

// const degree = 30;
// const rad = degree * Math.PI / 180;
// function val(x) {
//      return Math.sin(x)
// }

// console.log(val(rad));


// function Degree(deg) {
//      const rox = deg * Math.PI / 180;
//      return Math.sin(rox)
     
// };
// console.log(Degree(30));


// const x1 = 30;
// const y11 = x1 * Math.PI / 180;
// const z1= Math.sin(y11)
// console.log(z1);

// // triangle area
// const base = 50;
// const height = 100;
// const area = 1 / 2 * base * height;
// console.log(area);

// function Area(base,height) {
//      return 1 / 2 * base * height;
// };
// console.log(Area(50,100));
// // somobahu triangle area

// const a = 100;
// const area1 = Math.sqrt (3 )/ 4 * a * a;
// console.log(area1);


// function Area2(x) {
//      return Math.sqrt(3) / 4 * x * x;

// };
// console.log(Area2(100));
// // somodibahu triangle area


// const a1 = 20;
// const b1 = 400;
// const c1 = 60;
// const s = (a1 + b1 + c1) / 2;
// const areas = Math.sqrt(s - a1) * (s - b1) * (s - c1);
// console.log(areas);


// //positive number

// function positiveOrNegative(x) {
//      const data = x > 0;
//      const data1 = x < 0;
//      return `it is positive number ${data} or it a negative  number ${data1} `
// }
// console.log(positiveOrNegative(0));


// const totalBallance = 100000;
// function Hotel(roomCost,foodBill,wifiBill,) {
//      const totalBill = roomCost + foodBill + wifiBill;
//      const totalBillDiscount = totalBill - (totalBill * 5) / 100;
//      return totalBillDiscount;
// }
// const finalHotelBill = Hotel(5000, 9000, 500);
// const myBallance = totalBallance - finalHotelBill;
// if (totalBallance >= finalHotelBill ) {
//      console.log(`your current ballance is:${myBallance}`);
     
// } else {
//      console.log(`your total bill is :${finalHotelBill}taka .your current ballance is :${totalBallance}`);
     
// }

// //positive negative  number find

// const pos = 300;
// if (pos > 0) {
//      console.log('it is a positive number');
     
// } else {
//      console.log('it is a negative number');
// }
// //second method

// function positiveNegative(num) {
//      if (
//           num >0
//      ) {
//           console.log('via it is a positive number');
          
//      } else {
//           console.log('it is a negative number');
          
//      }
// }
// const result = positiveNegative(-1000);
// console.log(result);

// function Zero(num) {
//      if (num > 0 ) {
//           console.log('it is a positive number');
          
//      } else if(num < 0) {
//           console.log('it is a negative number ');
          
//      } else {
//           console.log('it is a neutral number');
          
//      }
// }
// const data = Zero(0);
// console.log(data);

// for (let index = 0; index < 100; index++) {
//      const element = index + 1;
//      console.log(element);
     
     
// }
// let x = 2;
// if (x % 2 === 0) {
//      console.log('it is a even number');

// } else {
//      console.log('it is odd number');
     
// }
// var PositiveNegative = 50;
// console.log(PositiveNegative);
// var number = 100;
// var myFun = function(number){
//     if (number > 0) {
//         console.log('it is a positive number');

//     } else if (number < 0) {
//         console.log("it is a negative number");

//     } else {
//         console.log('it is a neutral number');

//     }

// }
// console.log(myFun(100));


// function Positive(x) {
//     if (x > 0) {
//         console.log('it is a positive number');

//     } else if (x < 0) {
//         console.log("it is a negative number");

//     } else {
//         console.log('it is a neutral number');

//     }
// }
// var val = Positive(100);
// console.log(val);





// var x = 6;
// var y = x % 2 == 0;


// console.log(y);

// function even(x) {
//     if (x % 1 == 0) {
//         console.log(`${x} is a  prime number `);
        
//     } else if (x % 1 !== 0) {
//         console.log(`${x} is a  0dd number `);

//     }
// }
// var digit = even(4);
// console.log(digit);


let x = 10;
if (x > 5) {
    if (x<15) {
        console.log('x is between 5 and 15');
        
    } else {
        console.log('x is greter than or equal to 15 ');
        
    }
} else {
console.log('x is 5 or less');

}