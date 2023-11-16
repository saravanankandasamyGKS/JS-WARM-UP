/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num2) || isNaN(num2)) {
		return -1;
		
	}
	const frames = num1 * num2 * 60;
	
	return frames;
	///Your code Ends here
	
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/