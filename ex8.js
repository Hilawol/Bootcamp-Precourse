(function () {
    'use strict'
    let boom = "BOOM";
    let result = [];
    for (let x = 1; x <= 100; x += 1) {
        ((x % 7 != 0) && ((x % 10) != 7) && (Math.floor(x / 10) != 7)) ? result.push(x) : result.push(boom);
    }
    console.log(result.join(','));
})()