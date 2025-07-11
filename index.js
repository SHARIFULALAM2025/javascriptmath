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


const totalBallance = 100000;
function Hotel(roomCost,foodBill,wifiBill,) {
     const totalBill = roomCost + foodBill + wifiBill;
     const totalBillDiscount = totalBill - (totalBill * 5) / 100;
     return totalBillDiscount;
}
const finalHotelBill = Hotel(5000, 9000, 500);
const myBallance = totalBallance - finalHotelBill;
if (totalBallance >= finalHotelBill ) {
     console.log(`your current ballance is:${myBallance}`);
     
} else {
     console.log(`your total bill is :${finalHotelBill}taka .your current ballance is :${totalBallance}`);
     
}


