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

let r = new Range(1,3);
// Create a range object
console.log("r.includes(2) ->",r.includes(2));
// => true: 2 is in the range
console.log("r.toString() -> ",r.toString());
// => "(1...3)"
console.log("[...r] -> ",[...r]);
console.log("r instanceof Range -> ",r instanceof Range); 
// => False: we need a constructor function not a factory function. 