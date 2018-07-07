var sumAll = function(min, max) {
  
	if (min < 0 || max < 0) return "ERROR";
  if (typeof min !== "number" || typeof max !== "number") return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
return sum;
}

module.exports = sumAll
