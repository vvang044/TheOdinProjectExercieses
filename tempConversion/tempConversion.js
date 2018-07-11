var ftoc = function(fahrenheit) {
//   return (fahrenheit - 32 ) * 5 / 9; // returns 37.7777777777 we need single digit

 	return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
}

var ctof = function(celsius) {
  
  return Math.round(((celsius * 9 / 5) + 32) * 10) / 10;
}

ftoc(100);
ctof(30);

console.log(ftoc(100));
console.log(ctof(30));

module.exports = {
  ftoc,
  ctof
}
