(function () {
    'use strict'
    const readlinesync = require('readline-sync');

    function factorial(num) {
        if (num == 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }

    let userNum;

    do {
        userNum = Number(readlinesync.questionInt("Please enter a posotive integer greater than 0: "));
        if (userNum > 0) {
            console.log(`Factorial of ${userNum} is: ${factorial(userNum)}`);
        } else {
            console.log("Input valid number, please.")
        }
    } while (userNum <= 0)
})()