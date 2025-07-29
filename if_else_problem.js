// problem  1
// let number = 201;
// if (number % 2 == 0 ) {
//     console.log(`${number} is an even number`);

// } else if (number % 2 == 1) {
//     console.log(`${number} is an odd number `);

// }
// // problem  2

// function evenOdd(number) {
//     if (number % 2 == 0) {
//         console.log('it is a even number');

//     } else if(number % 2 == 1){
//         console.log('it is a odd number');

//     }
// }
// let result = evenOdd(400);
// console.log(result);

// // positive and negative  number and zero
// let positiveNumber = 80;
// if (positiveNumber > 0) {
//     console.log('it is a positive number');

// } else if(positiveNumber < 0 ){
//     console.log('it is s negative number');

// } else if (positiveNumber == 0 ) {
//     console.log('it is zero number');

// }

// // voter age
// let age = 18;
// if (age>18) {
//     console.log('you are eligible for vote ');

// } else {
//     console.log('you are not eligible for vote');

// }
// let fastNumber = 20;
// let secondNumber =140;
// let thirdNumber = 90;
// if ((fastNumber > secondNumber) && (fastNumber > thirdNumber)) {
//     console.log(`${fastNumber} is largest`);

// } else if ((secondNumber > fastNumber) && (secondNumber > thirdNumber)){
//     console.log('${secondNumber } is largest');

// } else  {
//     console.log('third number is largest');

// }


//


// let number = 55;
// if ((number > 0) && (number % 2 == 0) ) {
//     console.log('it is a positive even number');

// } else if( (number >0) && (number % 2 !== 0 ) ){
//     console.log('it is a positive odd number');

// }
// if ((number < 0) && (number % 2 == 0) ) {
//     console.log('it is a negative even number');

// } else if( (number < 0) && (number % 2 !== 0 ) ){
//     console.log('it is a negative odd number');

// } else if(number == 0) {
//     console.log('it is a neutral number');

// }

// // ৯.  অনলাইন শপিং কার্টের ডিসকাউন্ট: ব্যবহারকারীর মোট কেনাকাটার পরিমাণ ইনপুট নিন। নিম্নলিখিত শর্ত অনুযায়ী ডিসকাউন্ট গণনা করুন:
// // * ৫০০ টাকার নিচে: কোনো ডিসকাউন্ট নেই।
// // * ৫০০-১০০০ টাকা: ৫% ডিসকাউন্ট।
// // * ১০০১-২৫০০ টাকা: ১০% ডিসকাউন্ট।
// // * ২৫০১ টাকার উপরে: ১৫% ডিসকাউন্ট।
// // * (ডিসকাউন্ট সহ চূড়ান্ত মূল্য প্রিন্ট করুন।)

// let bill = 10000;
// if (bill < 500) {
//     console.log(` your total bill is : ${bill} taka`);


// } else if ((bill > 500) && (bill <= 1000)) {
//     let discount1 = (bill * 5) / 100;
//     let finalBill = bill - discount1;
//     console.log(` your total bill is : ${finalBill} taka`);

// } else if ((bill > 1001) && (bill <= 2500)) {
//     let discount2 = (bill * 10) / 100;
//     let finalBill1 = bill - discount2;
//     console.log(` your total bill is : ${finalBill1} taka`);

// } else{
//     let discount3 = (bill * 15) / 100;
//     let finalBil2 = bill - discount3;
//     console.log(` your total bill is : ${finalBil2} taka`);

// }

// let char = 'D';
// let val = char.charCodeAt(0);
// if ((val >= 65) && (val <= 90)) {
//     console.log(`it is a capital latter : ${char} which ascii value is : ${val}`);

// } else if ((val >= 97) && (val <= 122)) {
//     console.log(`it is a small latter : ${val}`);

// }else if ((val >= 48) && (val <= 57)) {
//     console.log(`it is a number latter : ${val}`);

// }
// ত্রিভুজের তিনটি বাহুর দেওয়া থাকলে ত্রিভুজ গঠন করা সম্ভব হবে কিনা তার প্রোগ্রাম
let x = 3;
let y = 4;
let z = 5;
if (x > 0 || y > 0 || z > 0) {
   
    if ((x + y > z) && (y + z > x) && (z + x > y)) {
        if ((x===y)&&(y===z)) {
            console.log('it is possible to form a equilateral ');
            
        } else if ((x===y)||(y===z)||(x===z)) {
            console.log('it is possible to form a Isosceles');
            
        } else if ((x != y) && (y != z)&&(z != x)) {
            console.log('it is possible to form a Scalene');
            
        }
        
    } else {
        console.log('It is not possible to form a triangle with the sides.');
        
    }
}