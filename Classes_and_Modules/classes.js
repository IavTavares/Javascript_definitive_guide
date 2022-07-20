function range(from, to) {
    let r = Object.create(range.methods);
    r.from = from;
    r.to = to;
    // Finally return the new object
    return r;
}

range.methods = {
    includes(x) { return this.from <= x && x <= this.to; },
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    // Return a string representation of the range
    toString() { return "(" + this.from + "..." + this.to + ")"; }
};

let r = range(1,3);
// Create a range object
console.log("r.includes(2) ->",r.includes(2));
// => true: 2 is in the range
console.log("r.toString() -> ",r.toString());
// => "(1...3)"
console.log("[...r] -> ",[...r]);
console.log("r instanceof range -> ",r instanceof range); 
// => False: we need a constructor function not a factory function. 
console.log("r isPrototypeOf range.methods -> ",range.methods.isPrototypeOf(r));