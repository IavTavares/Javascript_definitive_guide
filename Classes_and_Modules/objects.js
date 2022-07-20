"use strict";
let x = 1; // Declare a global variable. The block for this let is global.
console.log("x", x);
globalThis.x = 2;
global.x = 3;
console.log("globalThis.x", globalThis.x);
console.log("global.x", global.x);
//delete globalThis.x; // => false: can't delete this property
console.log("delete globalThis.x", delete globalThis.x);
console.log("globalThis.x", globalThis.x);
console.log("x", x);
console.log("delete global.x", delete global.x);
console.log("global.x", global.x);
console.log("x", x);
