const readline = require('readline');

// Clams Casino - I'm God

function checkValidity(word, maxLength) {
    // Provides basic validity checking for a given word
    let valid = true;

    const hasNumber = /\d/;
    if (hasNumber.test(word) === true) {
        // If word contains a number: invalid
        console.log('Your word cannot contain numbers');
        valid = false;
    }

    if (word.length > maxLength) {
        // If word exceeds maxLength: invalid
        console.log(`Your word is too long. Max length allowed: ${maxLength} letters.`);
        valid = false;
    }

    return valid;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wordSize = 7;
const letterPoints = {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10
};

rl.question('Enter a word to scorecheck ', (rawInput) => {
    console.time('Time Spent');
    
    let userInput = rawInput.toLowerCase();
    if (checkValidity(userInput, wordSize) == true) {
        // console.log(`Your word, "${userInput}" is valid`);
    }
    else {
        console.log(`"${userInput}" is not a valid word`);
    }

    rl.close();

    letterArray = userInput.split('');
    let points = 0;

    letterArray.forEach(letter => {
        points += letterPoints[letter];
    });

    console.log(`${userInput} earns ${points} points`);
    console.timeEnd('Time Spent');
});

