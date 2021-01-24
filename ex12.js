(function () {
    'use strict'
    const readlineSync = require('readline-sync');

    function capitalizeVouels(str) {
        let vouels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'U', 'u']);
        let arr = Array.from(str);
        for (let index = 0; index < arr.length; index += 1) {
            if (vouels.has(arr[index])) {
                arr[index] = arr[index].toUpperCase();
            }
        }
        return arr.join('');
    }

    let str = readlineSync.question("Please enter a string: ");
    if (str.trim() == '') {
        console.log("Invalid input.");
    } else {
        console.log(capitalizeVouels(str));
    }
})()