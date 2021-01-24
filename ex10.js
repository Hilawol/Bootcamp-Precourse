(function () {

    const readlineSync = require('readline-sync');
    function replaceSpace(str, ch) {
        return (str.split(" ")).join(ch);
    }
    let userinput = readlineSync.question("Please enter a string: ");
    console.log(replaceSpace(userinput, '*'));
})()