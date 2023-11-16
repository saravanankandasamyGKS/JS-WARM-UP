/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	if (typeof number !== 'number' || isNaN(number)) {
		return -1; // Return -1 for invalid input
	}
	
	return number % 2 === 0;
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

isEven(12);
isEven(0);
isEven(11);
isEven("11h");
*/