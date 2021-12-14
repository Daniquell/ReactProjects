const path=require('path');

console.log(path.resolve('..'))
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,'app','dada','adda'))
console.log(path.parse(__filename))