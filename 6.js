/* Create a function that takes an array and returns the first element. */

function getFirstElement(arr) {
	///Your code Starts here 
	
	if (arr.length > 0) {
		return arr[0];
	} else {
		// Return a message or value indicating that the array is empty
		return "Array is empty";
	}
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);
*/