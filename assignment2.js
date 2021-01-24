(function () {
    'use strict'
    const readlineSync = require('readline-sync');
    const chalk = require('chalk');
    const DIAMOND = chalk.red.bold('\u{2666}'),
        SPADE = '\u{2660}',
        HEART = chalk.red.bold('\u{2665}'),
        CLUB = '\u{2663}',
        SWORD = '\u{2694}',
        BOT = '\u{1F916}',
        TROPHY = '\u{1F3C6}',
        ANONYM1 = '\u{1F436}',
        ANONYM2 = '\u{1F98A}',
        BROKE = '\u{1F911}',
        WINNER = '\u{1F947}',
        SUIT = [DIAMOND, SPADE, HEART, CLUB];

    let Player = function (name) {
        this.name = name,
            this.myBet = 0;
        if (!this.balance) {
            this.balance = 50;
        }
        this.isBot = false;
        this.welcome = function () {
            console.log(chalk.blue(`Welcome ${this.name}! Your starting balance is:₪${this.balance}`));
        };
        this.win = function () {
            this.balance += this.myBet;
        };
        this.loose = function () {
            this.balance -= this.myBet;
        };
        this.bet = function () {
            if (!this.isBot) {
                let amount = readlineSync.questionInt(this.name + ", place your bet for the next round: ₪1 - ₪" + this.balance + ":");
                if (amount > 0 && amount <= this.balance) {
                    this.myBet = amount;
                } else throw "Player entered invalid bet. Good Bye!";
            } else {    // Playing against a bot - randomize bet. 
                this.myBet = Math.floor(Math.random() * this.balance + 1);
                console.log(this.name + " bet is: ₪" + this.myBet);
            }
        };
    };

    function drawCard() {
        let card = {
            cardValue: Math.floor(Math.random() * 12 + 1),
            suit: SUIT[Math.floor(Math.random() * 4)],
            toString: function () {
                return this.cardValue + " " + this.suit;
            }
        };
        return card;
    }

    function play(player1, player2) {
        player1.bet();
        player2.bet();

        console.log(`\n   ${player1.name}(₪${player1.balance})      VS.     ${player2.name}(₪${player2.balance})`);
        console.log('-----------------------------------------');

        let card1 = drawCard(),
            card2 = drawCard();

        console.log(`   ${player1.name}:${card1.toString()}               ${player2.name}:${card2.toString()}`);

        if (card1.cardValue > card2.cardValue) { // Player1 won
            console.log(`\n${TROPHY} ${player1.name} won this round ${TROPHY}\n`);
            player1.win(player2.myBet);
            player2.loose();

            if (player2.balance == 0) {
                throw `${player2.name}, you are broke! ${BROKE}\n${player1.name} your balance is:₪${player1.balance} ${WINNER}\n --- GAME OVER! ---\n`;
            }

        } else if (card2.cardValue > card1.cardValue) { //Plyaer2 won
            console.log(`\n${TROPHY} ${player2.name} won this round! ${TROPHY}\n`);
            player2.win(player1.myBet);
            player1.loose();

            if (player1.balance == 0) {
                throw `${player1.name}, you are broke! ${BROKE} \n${player2.name} your balance is:₪${player2.balance} ${WINNER}\n --- GAME OVER! ---\n`;
            }
        } else { // It's a tie
            console.log("It's a tie!")
        }
    }

    function welcomePlayers() {
        console.log(chalk.green(`\n${SWORD} -------- Wellcome to War game -------- ${SWORD}`));

        let playersOpt = ["Play against the computer", "Play with a friend"],
            player1,
            player2;

        let name1 = readlineSync.question("\nPlease enter your name:");

        if (name1.trim() == '') {   //If user did not enter a name it will be assigned an image.
            name1 = ANONYM1;
        }
        player1 = new Player(name1);
        player1.welcome();

        console.log("\nWho would you like to play with:");
        let num = readlineSync.keyInSelect(playersOpt, null, { cancel: false });


        if (num == '0') {   //Play against computer
            player2 = new Player(BOT);
            player2.isBot = true;
            console.log("You will play against a Bot:" + player2.name);
        } else {    //Play with a friend

            let name2 = readlineSync.question("\nPlease enter player2 name:");
            if (name2.trim() == '') {   //If user did not enter a name it will be assigned an image.
                name2 = ANONYM2;
            }
            player2 = new Player(name2);
            player2.welcome();
        }

        let players = [player1, player2];
        console.log("\nLets play!\n");
        return players;
    }

    let players = welcomePlayers();

    try {
        do {
            play(...players);
        } while (readlineSync.keyInYNStrict("Do you want to play another round?"))
        console.log(chalk.green(`\nPlayers ending balance:   `) + `${players[0].name}(₪${players[0].balance}) , ${players[1].name}(₪${players[1].balance})` + chalk.green(` GOOD BYE!\n`));
    }
    catch (err) {
        console.log(chalk.red(err));
    }
})()