/**************************************************************************************
Write a function `wordSandwich(outerWord, innerWord)` that takes in two strings and
returns a string representing a word sandwich. See the examples below.

Examples:

wordSandwich('bread', 'cheese');  // => 'BREADcheeseBREAD'
wordSandwich('BREAD', 'CHEESE');  // => 'BREADcheeseBREAD'
wordSandwich('HeLLo', 'worLD');   // => 'HELLOworldHELLO'

Difficulty: Easy
*************************************************************************************/

function wordSandwich(outerWord, innerWord) {
  var upper = outerWord.toUpperCase();
  var lower = innerWord.toLowerCase();
  var newStr = upper + lower + upper;
  return newStr;
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = wordSandwich;
