(function () {

    'use strict';
    const readlineSync = require('readline-sync');
    const chalk = require('chalk');

    let questions = ["Q1: When you store your towels in the closet, to how many different categories do you divide them?",
        "Q2: How long is your morning routine?",
        "Q3: After a breakup with your boyfriend, what will make you feel better? ",
        "Q4: Can you read an analog clock? ",
        "Q5: What do you think about pets dressed as humans?"];

    let answers = [
        ["Two: Shower, Beach/pool.",
            "Towels? Categories? What?!",
            "Around five: Kitchen, Shower, Hand, Guests, Pool/Beach",
            "Hands, Shower, Guests, Pets, Kitchen, Pool, Beach, Gym, Yoga…"],
        ["Very very long.", "At least an hour", "10 Minutes max.", "35 Minutes"],
        ["Writing a very long letter telling him how I feel.",
            "Cry it out with my BFF.",
            "Eat a whole ice- ream jar.",
            "I Make Jam."],
        ["Are you serious?!",
            "Sure!",
            "Yes but I still get confused if there are no numbers.",
            "I can nowadays, but it really took me a while to get it!"],
        ["I just got a LOUIS VUITTON sweater for my puppy.",
            "I think it’s the cutest thing.",
            "I just don’t get it.",
            "It is especially annoying! "]];

    let results = ["You might just be Rachel's soul mate.", "You found the balance between Rachel and Monica. We should be friends.", "Is it you Monica??"];


    //This adds to each answer an index for calculating the score. 
    answers.forEach(function (answer, index) {
        answers[index] = answer.map(function (value, x) {
            return [x + 1, answer[x]];
        })
    });

    //Maps the the questions and aswers together
    let quiz = questions.map(function (value, index) {
        return [value, answers[index]];
    });

    //Function gets an array and retrun a new array with items randomized
    function randomizeArray(arr) {

        let randomIndex, temp, currentQ, randArray = [];
        while (arr.length > 1) {
            randomIndex = Math.floor(Math.random() * (arr.length));
            temp = arr[arr.length - 1];     // holds the value of the last index of the array
            currentQ = arr[randomIndex];    // holds the randomed question
            arr[randomIndex] = temp;        //swap the last item with the randomed item
            arr.pop();
            randArray.push(currentQ);
        }
        randArray.push(arr[0]);
        return randArray;
    }

    console.log(chalk.black.bgCyanBright("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *"));
    console.log(chalk.black.bgCyanBright("              Are you more like Monica Or Rachel From Friends?             " +
        "\n-----------------------Take This Quiz To Find Out!-------------------------"));
    console.log(chalk.black.bgCyanBright("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\n"));

    let index, score = 0, randArray;
    for (let x = 0; x < quiz.length; x += 1) {
        console.log(chalk.black.bgBlue(quiz[x][0]));        //Prints the question
        randArray = randomizeArray(quiz[x][1]);
        let noIndexArray = randArray.map(function (value, index) {
            return [randArray[index][1]];
        });
        index = readlineSync.keyInSelect(noIndexArray, null, { cancel: false });        //prints the answers in randomize order
        console.log("\n");
        score += randArray[index][0];
    }

    console.log(chalk.black.bgCyanBright("\n* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *"));
    console.log(chalk.black.bgCyanBright("                             Your Quiz Results                             "));
    console.log(chalk.black.bgCyanBright("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *"));

    if (score <= 10) {
        console.log(chalk.black.bgCyanBright(results[0]));
    } else if (score <= 15) {
        console.log(chalk.black.bgCyanBright(results[1]));
    } else {
        console.log(chalk.black.bgCyanBright(results[2]));
    }
})()