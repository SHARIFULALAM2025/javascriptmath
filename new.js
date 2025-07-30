const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14, -12, -2, -5, -3, -1, 2.2, 3.3, 4.4, 5, 6, 0, 100, -100, 100.100, "shariful", "alam"];
const stringValue = [];
const floatNumber = [];
const integerNumber = [];
const evenNumber = [];
const oddNumber = [];
const positiveNumber = [];
const negativeNumber = [];
for (const element of array) {
    if (typeof element === 'string') {
        stringValue.push(element);
    } else if (typeof element === 'number') {
        if (element > 0) {
            positiveNumber.push(element)
        } else if(element <0){
            negativeNumber.push(element);
        }
        if (element % 1 !== 0) {
            floatNumber.push(element);
        } else if (element % 2 ===0 ) {
            evenNumber.push(element);
            integerNumber.push(element);
            
        } else if (element % 2 !==0) {
            oddNumber.push(element);
            integerNumber.push(element);
        }
 
    }
}
console.log('all  stringValue   number', stringValue  );
console.log('all  floatNumber   number', floatNumber );
console.log('all  integerNumber number', integerNumber );
console.log('all  evenNumber   number',  evenNumber);
console.log('all  oddNumber     number', oddNumber );
console.log('all positiveNumber number', positiveNumber  );
console.log('all negativeNumber  number', negativeNumber  );
