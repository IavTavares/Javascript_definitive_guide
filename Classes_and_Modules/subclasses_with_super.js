class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }

    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }
        // A generator function that makes instances of the class iterable.
        // Note that it only works for numeric ranges.
        *[Symbol.iterator]() {
        for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }
}


class Span extends Range{
    constructor(from, span) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        super(from, from+span);
        this.from = from;
        this.span = span;
    }

    toString(){
        return `(${this.from}, ..., ${this.to - this.from+1})`;
    }
}

let s = new Span(1,3);
// Create a range object
console.log("s.includes(2) ->",s.includes(2));
// => true: 2 is in the range
console.log("s.span ->",s.span);
console.log("s.toString() -> ",s.toString());
// => "(1...3)"
console.log("[...s] -> ",[...s]);
console.log("s instanceof Range -> ",s instanceof Range);
console.log("s instanceof Span -> ",s instanceof Span); 
// => True: we now have constructor function, not a factory function.