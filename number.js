const arr = [23, 56, 19.69, 100, 42, 89, 11.37, 0,-100,'s'];
const integer = [];
const even = [];
const odd = [];
const float1 = [];
const string1 = [];
for (const result of arr) {
  
   if (typeof result === 'string') {
       string1.push(result);
   } else if (typeof result === 'number') {
       if (result % 1 !== 0) {
           float1.push(result);
       } else if (result % 2 === 0) {
           even.push(result);
           integer.push(result)
       } else if (result % 2 !== 0) {
           odd.push(result);
           integer.push(result);
       } 
    
   }
    
}
console.log('all float number', string1);
console.log('all integer number',integer);
console.log('all even number',even);
console.log('all odd number', odd);
console.log('all float number', float1);

