// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let ptr = str.length - 1;
	let newStr = "";

	// Since string are immutable, create a new string and a pointer. 
	// Concatenate each character starting from the end into the new string. 
	while (ptr >= 0){
		newStr = newStr + str.charAt(ptr);
		ptr--;
	}
	return newStr;
}

module.exports = reverse;
