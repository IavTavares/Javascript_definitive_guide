function Range(from, to) {
    this.from = from;
    this.to = to;
    // No need to return anything.
}

Range.prototype = {
    constructor: Range, // <- this line could have been commented out.
    // It's not necessary to explicitly state the constructor.
    
    includes: function(x) { return this.from <= x && x <= this.to; },
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.

    
    [Symbol.iterator]: function*() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.

    toString: function() { return "(" + this.from + "..." + this.to + ")";}
    // Return a string representation of the range 
};

let r = new Range(1,3);
// Create a range object
console.log("r.includes(2) ->",r.includes(2));
// => true: 2 is in the range
console.log("r.toString() -> ",r.toString());
// => "(1...3)"
console.log("[...r] -> ",[...r]);
console.log("r instanceof range -> ",r instanceof Range); 
// => True: we now have constructor function, not a factory function. 