// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	// Create a map, add char and keep counting up
	let chars = {};
	let maxChar = "";
	let count = 0;

	for (let char of str){
		chars[char] = chars[char] + 1 || 1;
		
		if (chars[char] > count){
			count = chars[char];
			maxChar = char;
		}
	}
	return maxChar
}

module.exports = maxChar;
