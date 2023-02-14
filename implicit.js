//implicit boolean conversion to number
//if boolean is used, true is 1, false is 0
let result;

result = '7' - true;
console.log(result); // 6

result = 7 + true;
console.log(result); // 8

result = 7 + false;
console.log(result); // 7

//implicit conversion to number
// numeric string used with - , / , * results number type



result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

result = '4' / 2;
console.log(result); // 2

//implicit converion to string.js
// numeric string used with + gives string type


result = '8' + 2; 
console.log(result) // "82"

result = '8' + true; 
console.log(result); // "8true"

result = '8' + undefined; 
console.log(result); // "8undefined"

result = '8' + null; 
console.log(result); // "8null"

//non-numeric string results to NaN.js
// non-numeric string used with - , / , * results to NaN

result = 'hello' - 'world';
console.log(result); // NaN

result = '4' - 'hello';
console.log(result); // NaN

//null Conversion to Number.js
// null is 0 when used with number

result = 4 + null;
console.log(result);  // 4

result = 4 - null;
console.log(result);  // 4

//undefined used with number, boolean or null.js
// Arithmetic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN
