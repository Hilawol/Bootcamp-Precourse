(function () {
    'use strict'
    const readlineSync = require('readline-sync');

    function longestWord(str) {
        let arr = str.split(" "),
            maxWord = "";
        for (let x = 0; x < arr.length; x += 1) {
            if ((arr[x]).length > maxWord.length) {
                maxWord = arr[x];
            }
        }
        return maxWord;
    }

    let str = readlineSync.question("Please enter a string: ");
    if (str.trim() == '') {
        console.log("Invalid input.");
    } else {
        console.log(longestWord(str));
    }
})()