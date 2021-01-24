(function () {
    'use strict'
    const readlinesync = require('readline-sync');

    // Return true if n is prime, false if it's not. Assumes x>2
    function isPrime(n) {
        for (let x = 3; x <= Math.sqrt(n); x += 2) {      //will not check even numbers greater then 2 as they are not prime.
            if (n % x == 0) {
                return false;
            }
        }
        return true;
    }

    function printPrimes(n) {
        let primes = [1, 2];
        if (n == 1) {
            console.log('1');
            return;
        } else if (n == 2) {
            console.log('1,2');
        } else {
            for (let x = 3; x <= n; x += 2) {
                if (isPrime(x)) {
                    primes.push(x);
                }
            }
            console.log(primes.join(","));
        }
    }

    let number = readlinesync.questionInt("Please enter a possitive number.\nThe Program will print all the prime numbers from 1 until the number you entered:");
    if (number <= 0) {
        console.log("Invalid input.");
    } else {
        printPrimes(number);
    }

})()