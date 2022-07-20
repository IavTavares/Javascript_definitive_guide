
// importing node.js way
// const stats = require('./stats.js');
// const { mean, stddev } = require('./stats.js');


// importing ES6 way
import * as stats from "./stats.js";
//import {mean, stddev} from "./stats.js";
// And here is how we might use the module
console.log('stats.mean([1, 3, 5, 7, 9]) -> ',stats.mean([1, 3, 5, 7, 9]));
// => 5
console.log("stddev([1, 3, 5, 7, 9]) -> ",stats.stddev([1, 3, 5, 7, 9])) // => Math.sqrt(10)