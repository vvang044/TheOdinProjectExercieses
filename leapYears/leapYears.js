var leapYears = function(year) {

	return year % 4 === 0 && (year % 100 !==0 || year % 400 == 0);

/*
if (year % 400 === 0) {
  return true;
};

 else if( year % 100 !== 0){

	return true;
}
*/
}

//console.log(leapYears(year));

module.exports = leapYears



