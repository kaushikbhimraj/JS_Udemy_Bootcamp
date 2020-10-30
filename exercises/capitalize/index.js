// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var out = str.charAt(0).toUpperCase(); 

	for (var i = 1; i < str.length; i++){
		var temp = "";

		if (str.charAt(i-1) === " "){
			temp = str.charAt(i).toUpperCase();	
		}
		else{
			temp = str.charAt(i);
		}
		out = out + temp;
	}
	return out;
}

module.exports = capitalize;
