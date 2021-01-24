(function () {
    'use strict'
    const readlineSync = require('readline-sync');

    function minMaxArray(n) {
        let arr = [],
            randInt,
            min = Number.MAX_VALUE,
            max = Number.MIN_VALUE;

        for (let x = 0; x < n; x += 1) {
            randInt = Math.floor(Math.random() * 50 + 1);
            if (randInt < min) {
                min = randInt;
            }
            if (randInt > max) {
                max = randInt;
            }
            arr.push(randInt);
        }
        console.log("Array is:" + arr);
        console.log(`Min value is: ${min} \nMax value is: ${max}`);
    }

    let number = readlineSync.questionInt("Please enter a possitve integer: ");
    if (number < 1) {
        console.log("Invalid input.");
    } else {
        minMaxArray(number);
    }

})()


