/*  parcourir la chaîne,
    constituée de mots séparés par des espaces,
    convertir la première lettre de chaque mot en majuscule
*/

const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE


// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters works in the case of a phrase
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that capitalizeFirstLetters works in the case of a word
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that capitalizeFirstLetters works in the case of a void string
assert.strictEqual(capitalizeFirstLetters(''), '');