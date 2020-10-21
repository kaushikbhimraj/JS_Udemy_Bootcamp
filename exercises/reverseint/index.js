// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	// Convert integer to string. 
	let str = String(n);

	// Simply reverse string and convert back to integer. 
	let prt = str.length - 1;
	let newStr = '';

	while (prt >= 0){
		if (str.charAt(prt) != "-"){
			newStr = newStr + str.charAt(prt);
		}
		prt--;
	}

	// Need to handle negative integers. After reversing string, 
	// check if original integer is less than 0 and add a '-' sign in front.
	if (n < 0) newStr = "-" + newStr
	return Number(newStr);
}

module.exports = reverseInt;