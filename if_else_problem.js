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
// let x = 3;
// let y = 4;
// let z = 5;
// if (x > 0 || y > 0 || z > 0) {

//     if ((x + y > z) && (y + z > x) && (z + x > y)) {
//         if ((x===y)&&(y===z)) {
//             console.log('it is possible to form a equilateral ');

//         } else if ((x===y)||(y===z)||(x===z)) {
//             console.log('it is possible to form a Isosceles');

//         } else if ((x != y) && (y != z)&&(z != x)) {
//             console.log('it is possible to form a Scalene');

//         }

//     } else {
//         console.log('It is not possible to form a triangle with the sides.');

//     }
// }
// শিক্ষার্থীর গ্রেড নির্ণয়

// let gradPoint = -92;
// if ((gradPoint > 0) && (gradPoint < 33)) {
//     console.log('your grad point is : F');

// } else if((gradPoint>=34)&&(gradPoint<=59)){
//     console.log('your grad point is: D');

// } else if ((gradPoint>=60)&&(gradPoint<=69)) {
//     console.log('your grad point is : C');

// } else if ((gradPoint>=70) && (gradPoint<=79)) {
//     console.log('your grad point is : B');

// } else if ((gradPoint>=80) && (gradPoint<=89)) {
//     console.log('your grad point is :A');

// } else if ((gradPoint>=90) && (gradPoint<=100)) {
//     console.log("your grad point is :A+");

// } else {
//     console.log('your grad point is invalid');

// }

//দিনের নাম প্রিন্ট করুন (সপ্তাহান্তিক চেক):
// let day = 1;
// if ((day >= 1) && (day <= 7)) {
//     if (day==1) {
//         console.log('saturday');
        
//     } else if(day==2){
//         console.log("sunday");
        
//     } else if (day == 3) {
//         console.log('monday');
        
//     } else if (day == 4) {
//         console.log('tuesday');
        
//     } else if (day == 5) {
//         console.log('wednesday');
        
//     } else if (day == 6) {
//         console.log('thursday');
        
//     } else if (day == 7) {
//         console.log('friday');
        
//     }
// } else {
//     console.log("you day is invalid");
    
// }

let char = '9'; // যেকোনো একক অক্ষর এখানে ইনপুট দিন

if (char.length === 1) { // 1. ইনপুট একটি একক অক্ষর কিনা যাচাই
    let val = char.charCodeAt(0); // অক্ষরের ASCII মান

    // 2. এটি একটি বড় হাতের অক্ষর (A-Z) কিনা যাচাই
    if (val >= 65 && val <= 90) {
        // যদি বড় হাতের অক্ষর হয়, তাহলে দেখুন এটি স্বরবর্ণ (A, E, I, O, U) কিনা
        if (val === 'A'.charCodeAt(0) ||
            val === 'E'.charCodeAt(0) ||
            val === 'I'.charCodeAt(0) ||
            val === 'O'.charCodeAt(0) ||
            val === 'U'.charCodeAt(0)) {
            console.log(`It is a capital vowel character: ${char}`);
        } else {
            console.log(`It is a capital consonant character: ${char}`);
        }
    }
    // 3. এটি একটি ছোট হাতের অক্ষর (a-z) কিনা যাচাই
    else if (val >= 97 && val <= 122) {
        // যদি ছোট হাতের অক্ষর হয়, তাহলে দেখুন এটি স্বরবর্ণ (a, e, i, o, u) কিনা
        if (val === 'a'.charCodeAt(0) ||
            val === 'e'.charCodeAt(0) ||
            val === 'i'.charCodeAt(0) ||
            val === 'o'.charCodeAt(0) ||
            val === 'u'.charCodeAt(0)) {
            console.log(`It is a small vowel character: ${char}`);
        } else {
            console.log(`It is a small consonant character: ${char}`);
        }
    }
    // 4. এটি একটি সংখ্যা (0-9) কিনা যাচাই
    else if (val >= 48 && val <= 57) {
        console.log(`It is a number digit: ${char}`);
    }
    // 5. উপরের কোনোটিই না হলে, এটি একটি বিশেষ অক্ষর
    else {
        console.log(`It is a special character: ${char}`);
    }
} else { // 6. যদি ইনপুট একাধিক অক্ষর বা ফাঁকা হয়
    console.log('Please type only one character.');
}

