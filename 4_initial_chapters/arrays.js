function equalArrays(a, b) {
    if (a === b) return true;
    console.log(a===b);
    console.log(a.length !== b.length);
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true
}

let a = ["1",2,"#"];
let b = ["1",2,"#"];

console.log("a==b = ", a==b);

console.log("equalArrays(a,b) = ", equalArrays(a,b));