// @ts-nocheck
// This file generates a base64 version of a langauge on the spot.
// Loads in approx. 20ms
// Change `lang` constant to change which language is being converted.

const timestamp = Date.now();

const lang = "en-GB"; // !! Change me to change the langauge being translated !!
const langExports = require("./" + lang);

module.exports = convertObject(langExports);
module.exports.__TIME = Date.now() - timestamp;

// console.log(module.exports.__TIME);

/**
 * Converts a function to returning base64
 * @param {Function} func The previous function
 * @returns {string} Base64 String
 */
function convertFunc(func) {
	return (...args) => convertString(func(...args));
}

/**
 * Converts a string to base64
 * @param {string} str A string to convert to base64
 * @returns {string} Base64 String
 */
function convertString(str) {
	return String(Buffer.from(String(str)).toString("base64"));
}

/**
 * Converts an object containing strings and functions into returning base64
 * @param {object} obj An object to convert to base64
 */
function convertObject(obj) {
	let returnValue = {};
	Object.entries(obj).map(([key, value]) => {
		// Convert the contents
		let mapValue;
		switch (typeof value) {
			case "string":
				mapValue = [key, convertString(value)];
				break;
			case "function":
				mapValue = [key, convertFunc(value)];
				break;
			case "object":
				mapValue = [key, convertObject(value)];
				break;
			default:
				mapValue = [key, value];
				break;
		}
		return mapValue;
	}).forEach(([key, value]) => {
		// Back to object again
		returnValue[key] = value;
	});

	return returnValue;
}