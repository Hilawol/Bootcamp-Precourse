(function () {
    'use strict';
    const input = require('readline-sync');
    let userNum = input.question("Please enter a number between 0-9: ");
    let msg;
    switch (userNum) {
        case '0':
            msg = "Zero";
            break;
        case '1':
            msg = "One";
            break;
        case '2':
            msg = "Two";
            break;
        case '3':
            msg = "Three";
            break;
        case '4':
            msg = "Four";
            break;
        case '5':
            msg = "Five";
            break;
        case '6':
            msg = "Six";
            break;
        case '7':
            msg = "Seven";
            break;
        case '8':
            msg = "Eight";
            break;
        case '9':
            msg = "Nine";
            break;
        default:
            msg = "Your number is out of range."

    }
    console.log(msg);

})()