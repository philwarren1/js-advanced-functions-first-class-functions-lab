const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);}
// 1) should return a new array containing the first two drivers from the passed -in array
    
const returnLastTwoDrivers = function(drivers) {
	return drivers.slice(-2);}
// 2) should return an array of the last two drivers

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
// 3) has the `returnFirstTwoDrivers` function to as its first element
// 4) has the `returnLastTwoDrivers` function to as its last element
// 5) allows us to invoke either function from the array

const createFareMultiplier = function(multiplier){
	    return function(value)
        {return value * multiplier;};
};
// 6) returns a function
// 7) should multiply a given value using the created multiplier
const fareDoubler = createFareMultiplier(2);
// 8) is a function
// 9) doubles fares
const fareTripler = createFareMultiplier(3);
// 10) is a function
// 11) triples fares
const selectDifferentDrivers = function(drivers, different){
	return different(drivers);
// 12) returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
// 13) returns the last two drivers when passed returnLastTwoDrivers() as the second argument
}