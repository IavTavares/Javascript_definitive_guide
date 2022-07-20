let a = { b: null };
// the ?. operator always checks the LHS for null or undefined => returns undefined
console.log("(a.b)?.c",(a.b)?.c);
console.log("a.b?.c",a.b?.c);
console.log("a.b?.c.d",a.b?.c.d);
console.log("a?.b",a?.b);
console.log("\nchanging a.b to empty object: a.b no longer returns null")
// changing a.b to empty object: a.b no longer returns null
a = { b: {} };
console.log("(a.b)?.c",(a.b)?.c);
console.log("a.b?.c",a.b?.c);
console.log("a?.b",a?.b);
//console.log("a.b?.c.d",a.b?.c.d); // this evaluates to an error
console.log("a?.b",(a.b?.c)?.d);
let unitialised_var;
let index = 0;
try {
    unitialised_var[index++]; //gives type error
} catch(e) {
    console.log("index ",index)
}
console.log("unitialised_var?.[index++] ",unitialised_var?.[index++]);
console.log("index ",index);
console.log("index ",index)
// console.log("unitialised_var[index++] ",unitialised_var[index++]); // gives type error

// in operator expects a left-side operand that is a string, symbol, or value that 
// can be converted to a string. It evaluates to true if the left-side value is the 
// name of a property of the right-side object.

let point = {x: 1, y: 1}; // Define an object
console.log("\"x\" in point","x" in point); // => true: object has property named "x"
console.log("\"z\" in point","z" in point); // => false: object has no "z" property.
console.log("\"toString\" in point","toString" in point); // => true: object inherits toString method

let data = [7,8,9];// array with elements (indices) 0, 1, and 2
console.log("\"0\" in data","0" in data); // true: array has an element "0"
console.log("1 in data",1 in data); // true: numbers are converted to strings =>  "1" in data
console.log("3 in data",3 in data); // false: no element 3 => "3" in data 



