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
}


function Span(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }
}

// Ensure that the Span prototype inherits from the Range prototype
Span.prototype = Object.create(Range.prototype);
// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span;
// By defining its own toString() method, Span overrides the
// toString() method that it would otherwise inherit from Range.
Span.prototype.toString = function() {
return `(${this.from}, ..., ${this.to - this.from+1})`;
}

// The span constructor and toString are a special case, and we can only really get 
// away with this kind of subclassing because we know the implementation details of 
// the superclass.
// A robust subclassing mechanism needs to allow classes to invoke the methods and con‐
// structor of their superclass, but prior to ES6, JavaScript did not have a simple 
// way to do these things.


let s = new Span(1,3);
// Create a range object
console.log("s.includes(2) ->",s.includes(2));
// => true: 2 is in the range
console.log("s.toString() -> ",s.toString());
// => "(1...3)"
console.log("[...s] -> ",[...s]);
console.log("s instanceof Range -> ",s instanceof Range);
console.log("s instanceof Span -> ",s instanceof Span); 
// => True: we now have constructor function, not a factory function.