// Utility functions private to the module
const sum = (x, y) => x + y;
const square = x => x * x;

// A public function that will be exported
function mean(data) {
    return data.reduce(sum)/data.length;
}
// A public function that we will export
function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
        data.map(x => x - m).map(square).reduce(sum)/(data.length-1)
    );
}

// exporting in the node.js way. 
// module.exports = { mean, stddev };

// exporting in the ES6 way.
// We need to create file package.json in the same directory.
export { mean, stddev };
