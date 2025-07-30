let z = 4.5;
if (z %1===0) {
    console.log('it is a purno number');
    
} else if(z%1 !==0) {
    console.log('it is not purno number');
    
}
let a = '2';
let b = '2'
let c = '22'
let val = a + b;
let don = val === c;
console.log(don);


var x = 5;
y = 1;
var obj = {
    x: 10,
}
with (obj) {
    alert(y)
 }