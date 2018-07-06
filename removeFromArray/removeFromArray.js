var removeFromArray = function(...args) {
let array = arg[0];
return array.filter(val => !args.includes(val));
}

module.exports = removeFromArray
