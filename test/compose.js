const { pipe } = require('../util/compose');

function strSplit(str) {
    return str.split('');
}
function arrRe(arr) {
    return arr.reverse();
}

console.log(pipe(strSplit, arrRe)('abcde'));

