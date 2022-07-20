"use strict";
// in strict mode, we need to use let initialise a variable.
// x = {p1:10, p2:20}; // would return an error
let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));// {size:3, Na, na, Batman!}
let unique = [];
for(let word of wordSet) {
unique.push(word);
}
unique
let o = { x: 1, y: 2, z: 3 };
console.log("o = ",o);
let a = [], i = 0;
for(a[i++] in o) /* empty */;
console.log("a = ",a);
console.log(o.toString());
let l = {a:0,b:1,c:3};
o= Object.assign(o,l);
console.log("o = ",o);