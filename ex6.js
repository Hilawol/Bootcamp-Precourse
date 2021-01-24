(function () {
    'use strict';
    const readlineSync = require('readline-sync');
    let number;
    do {
        number = readlineSync.questionInt("Please choose a number larger than 10: ", { limitMessage: null });
    } while (number <= '10')
    console.log("Thank you");
})()