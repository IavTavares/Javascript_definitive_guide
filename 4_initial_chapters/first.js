console.log("Hello World!\n"); // this line has a breakpoint
    
let million = 1//_000_000;
console.log(million);
console.log(million<Infinity);
console.log(Number.isNaN(Number.NaN));
console.log((2n ** 13107n) - 1n); // BigInt number
let timestamp = Date.now();
console.log("timestamp = ",timestamp);
let now = new Date();
let iso = now.toISOString();
console.log("Date ISO String = ",now.toISOString());
console.log("Date UTC String = ",now.toUTCString());
let string_1 = "String_1";
let string_2 = "String_2";
console.log(string_1+" "+string_2);
console.log(string_1.split("_"));
let name = "Bill";
let greeting = `Hello ${name}.`;
console.log(greeting);
let s_1 = Symbol("sym_x");
let s_2 = Symbol("sym_x");
console.log(s_1.toString());
console.log(s_2.toString());
console.log(Symbol('foo') === Symbol('foo'));
global.globalThis = global
console.log(globalThis.toString());
let a = ["0","1","2"];
let b = Array.from(a);
console.log("b = ",b);
console.log("a.length = ",a.length);
console.log("1 + {}", 1 + {});
console.log("{}", {});