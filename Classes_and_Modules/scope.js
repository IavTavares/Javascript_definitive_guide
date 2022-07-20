function counter() {
    let n = 0;
    return {
    count: function() { return ++n; }, // ++n or n++ make a difference.
    reset: function() { n = 0; }
    };
}

let c = counter(), d = counter();
console.log("c.count()",c.count());
console.log("d.count()",d.count());
console.log("c.reset()",c.reset());
console.log("c.count()",c.count());
console.log("d.count()",d.count());