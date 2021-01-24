(function () {
    'use strict';

    function makes10(num1, num2) {
        ((num1 + num2) === 10) ? console.log("makes 10") : console.log("nope");
    }

    const input = require('readline-sync');
    let count = 0, userInput, userInputNum, numbers = new Array(2);


    do {

        userInput = input.question("Please enter a number: ");
        userInputNum = Number(userInput);

        if (!isNaN(userInput) && !userInput == ' ') { // Check that user didn't press enter only, and that input is a number.
            numbers[count] = userInputNum;
            count += 1;
        } else {
            console.log("You entered invalid input.");
        }

    } while (count < 2)

    if (count === 2) {
        makes10(numbers[0], numbers[1]);
    }


    /*  Another optional solutoin. This solution will not give more chances for the user to enter valid input.
        Solution code: 
    
    let num1 = Number(input.question("Please enter a number: "));

    if (isNaN(num1)) {
        console.log("Invalid input");
    }
    else {
        let num2 = Number(input.question("Please enter a second number:));
        if (isNaN(num2)) {
            console.log("Invalid input");
        }
        else {
            makes10(num1, num2);
        }
    }*/

})()