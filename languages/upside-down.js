// @ts-nocheck
// This file generates an upside down version of an (ascii) langauge on the spot.
// Loads in approx. 30ms
// Change `lang` constant to change which language is being converted.

const timestamp = Date.now();

const lang = "en-GB"; // !! Change me to change the langauge being translated !!
const langExports = require("./" + lang);

const flipped = {
  a: "\u0250",
  b: "q",
  c: "\u0254",
  d: "p",
  e: "\u01DD",
  f: "\u025F",
  g: "\u0183",
  h: "\u0265",
  i: "\u1D09",
  j: "\u027E",
  k: "\u029E",
  m: "\u026F",
  n: "u",
  r: "\u0279",
  t: "\u0287",
	u: "n",
  v: "\u028C",
  w: "\u028D",
  y: "\u028E",
  p: "d",
  A: "\u2200",
	B: "q",
  C: "\u0186",
  E: "\u018E",
  F: "\u2132",
  G: "\u05E4",
  H: "H",
  I: "I",
  J: "\u017F",
  L: "\u02E5",
  M: "W",
  N: "N",
  P: "\u0500",
  T: "\u2534",
  U: "\u2229",
  V: "\u039B",
  Y: "\u2144",
  1: "\u0196",
  2: "\u1105",
  3: "\u0190",
  4: "\u3123",
  5: "\u03DB",
  6: "9",
  7: "\u3125",
  8: "8",
  9: "6",
  0: "0",
  ".": "\u02D9",
  ",": "'",
  "'": ",",
  '"': ",,",
  "?": "\u00BF",
  "!": "\u00A1",
  "[": "]",
  "]": "[",
  "(": ")",
  ")": "(",
  "{": "}",
  "}": "{",
  "<": ">",
  ">": "<",
  "&": "\u214B",
  _: "\u203E",
  "\u2234": "\u2235",
  "\u2045": "\u2046"
};

module.exports = convertObject(langExports);
module.exports.__TIME = Date.now() - timestamp;


/**
 * Converts a function to returning upside down text
 * @param {Function} func The previous function
 * @returns {string} Upside down String
 */
function convertFunc(func) {
  return (...args) => convertString(func(...args));
}

/**
 * Converts a string to upside down
 * @param {string} str A string to convert to base64
 * @returns {string} Upside down String
 */
function convertString(str) {
  let arr = str.split("");
  arr.forEach((letter, index) => {
    arr[index] =
      flipped[letter] ?? flipped[letter.toLowerCase()] ?? flipped[letter.toUpperCase()] ?? letter;
  });
  return arr.reverse().join("");
}

/**
 * Converts an object containing strings and functions into returning upside down
 * @param {object} obj An object to convert to upside down
 */
function convertObject(obj) {
  let returnValue = {};
  Object.entries(obj)
    .map(([key, value]) => {
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
    })
    .forEach(([key, value]) => {
      // Back to object again
      returnValue[key] = value;
    });

  return returnValue;
}
