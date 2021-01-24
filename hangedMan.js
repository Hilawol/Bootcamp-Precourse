(function () {
    'use strict';
    const figlet = require('figlet'),
        chalk = require('chalk'),
        readlineSync = require('readline-sync'),
        randomWords = require('random-words'),
        ATTEMPS = 10,
        HANGMAN =
            `
            
                 +-------+
                 |       |
                 |       @
                 |      /|\\
                 |      / \\ 
                _|_ `;


    console.log(chalk.green(figlet.textSync(`Hang  Man`, { font: 'Doom', width: 100 })));

    let HangMan = function () {

        this.word = randomWords(1).join(" "); // Returns a random word as string.
        this.wordGuessed = false;
        let gueesedLetters = new Map();

        //Maps the letters in the word with a boolean value, wether they were guessed or not. Initially they are set to False.
        for (let c of this.word) {
            if (!gueesedLetters.get(c)) { //the letter is not in the map
                gueesedLetters.set(c, false);
            }
        }

        // Returns the word. Letters that were not guessed yet will be represented as '*'
        this.getMaskedWord = function () {
            if (!this.wordGuessed) {
                let word = "";
                for (let x of this.word) {
                    gueesedLetters.get(x) ? word += x : word += '*';
                }
                return word;
            } else return this.word;
        };

        /* Checks if the letter c is in the word.
         If it is, it will change the boolean value to "true" and returns "true".
          If it's not it returns "flase".
          If it is in word but already guessed it will return "undefined". */
        this.guess = function (c) {

            if (gueesedLetters.get(c) === false) {
                gueesedLetters.set(c, true);
                this.wasGuessed();
                return true;
            } else if (gueesedLetters.get(c) === true) {
                console.log("you already guessed that letter!");
                return undefined;
            }
            return false;
        };

        this.wasGuessed = function () {
            for (let x of gueesedLetters) {
                if (!x[1]) { //Letter x was not guessed yet
                    return false;
                }
            }
            this.wordGuessed = true;
            return true;
        };
    };

    let game = new HangMan();

    console.log("\nWord is: " + game.word); //Uncomment for testing purpese

    let g,
        count = 0;

    while ((count < ATTEMPS) && (!game.wordGuessed)) {

        console.log(chalk.yellow(`The word is: ${game.getMaskedWord()} `) + `(${ATTEMPS - count} attemps left)`);
        let validInput = false;
        do {
            g = (readlineSync.question("\nPlease enter a guess: ")).toLowerCase();

            if (/[a-z]/.test(g)) { //  Uses regex expression to check the input is valid.
                validInput = true;
            } else {
                console.log(chalk.red("You entered invalid input."));
            }
        } while (!validInput)

        // Guesses the user input. If guess() returns false it means the letter is not in the word. 
        if (game.guess(g) === false) {
            count++;
        }

        if ((g == game.word) || game.wordGuessed) { // If the word was guessed. 
            game.wordGuessed = true;
            console.log(chalk.cyan(figlet.textSync('Good Job !', { font: 'Doom', width: 100 })));
            console.log(chalk.cyan("You guessed right! The word is: " + game.word + ". GOOD BYE!\n"));

        }
    }

    if (count == ATTEMPS) { // User did not guessed the word, no more attemps are available. 
        console.log(chalk.red("You have no more attemps! The word is: " + game.word + HANGMAN));
        console.log(chalk.red(figlet.textSync('GAME OVER !', { font: 'Doom', width: 100 })));
    }
})()
