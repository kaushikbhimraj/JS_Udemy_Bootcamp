// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

	// Create a map of characters as keys and count as values. 
	// Make sure to count the spaces in the strings as well. 
	let word = {};
	stringA = stringA.toLowerCase();
	stringB = stringB.toLowerCase();

	for (var i = 0; i < stringA.length; i++){

		if (check(stringA.charAt(i))){

			if (!word[stringA.charAt(i)]){
				word[stringA.charAt(i)] = 1;
			}
			else{
				var temp = word[stringA.charAt(i)];
				word[stringA.charAt(i)] = temp + 1;
			}
		}
	}

	// Check if values from the second string exist in the first.
	for (var i = 0; i < stringB.length; i++){
		var letter = stringB.charAt(i);

		if (check(letter)){
			if (!word[letter] || word[letter] === 0){
				console.log(word[letter]);
				return false;	
			} 
		
			var temp = word[letter];
			word[letter] = temp - 1;
		}
	}
	return true;
}

// Helper function to check if character is not a special character and not a space. 
function check(value){
	if (value != " " && value.toLowerCase() === value.toUpperCase()) return false;
	return true;
}
module.exports = anagrams;