(function () {

    const readlineSync = require('readline-sync');

    function isPalindrom(str) {
        if (str.length <= 1) {
            return true;
        } else {
            let first = 0,
                last = str.length - 1;
            while (first < last) {
                if (str[first] == str[last]) {
                    first += 1;
                    last -= 1;
                } else return false;
            }
            return true;
        }
    }
    let str = readlineSync.question("Please enter a string to check if it's a palindrome: ");
    if (str.trim() == '') {
        console.log("Invalid input.");
    } else {
        console.log(isPalindrom(str));
    }

})()