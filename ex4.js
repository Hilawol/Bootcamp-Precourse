(function () {

    'use strict'
    const input = require('readline-sync');
    let index,
        restaurantTypes = ['Mediterranean', 'Mexican', 'Italian', 'Asian'];

    let Restaurant = function (name, type, kosher, address, phone) {
        this.name = name;
        this.type = type;
        this.kosher = kosher;
        this.address = address;
        this.phone = phone;

        Restaurant.prototype.toString = function () {
            return "\n" + (String(this.name)).toUpperCase() + " (" + this.type + ") \nAddress: " + this.address + "\nPhone: " + this.phone + "\n";
        };
    };

    let onzo = new Restaurant('onzo', 'Mediterranean', 0, "3 Rabi Khanina, Tel-Aviv", "03-6486060"),
        bocca = new Restaurant('Bocca Bocca', "Italian", 1, "HaCarmel 40, Tel-Aviv", "052-3913233"),
        nihi = new Restaurant("Nihi Hachi", "Asian", 0, "228 Ben-Yehuda, Tel-Aviv", "03-6249228", "03-6249228"),
        blueSky = new Restaurant("Blue Sky By Meir Adoni", "Mediterranean", 1, "10th Eliezer Peri st.", "03-5201830"),
        rustico = new Restaurant("Rustico", "Italian", 0, "15 Shderot Rotschild, Tel-Aviv", "03-5100039"),
        kansai = new Restaurant("Kansai", "Asian", 1, "94 Igal Alon, Tel-Aviv", "053-8007728"),
        mamaKuka = new Restaurant("Mama Kuka", "Mediterranean", 2, "30 Ruslan, Yafo, Tel Aviv", "053-9443772"),
        littleNapoli = new Restaurant("Little Napoli", "Italian", 2, "Sderot Israel Guri 34, Tel Aviv", "053-9379085"),
        oshiOshi = new Restaurant("Oshi Oshi", "Asian", 2, "Nemal Tel Aviv St 20-22, Tel Aviv", "053-9443816"),
        mezcal = new Restaurant("Mezcal", "Mexican", 0, "Chayim Vital St 2, Tel Aviv", "03-518-7925"),

        restArray = [onzo, bocca, nihi, blueSky, rustico, kansai, mamaKuka, littleNapoli, oshiOshi, mezcal];

    function recommendRestaurant(kosher, type) {

        for (let x = 0; x < restArray.length; x += 1) {
            if ((restArray[x].kosher == kosher) && (restArray[x].type == type)) {
                return restArray[x];
            }
        }
    }
    console.log(`
Welcome!
Looking for a great restaurant in Tel-Aviv?
Answear just a few questions and we will recommend the best restaurant for you!
` );

    let userRequest = {
        guests: 1,
        kosher: 0, // 0 - Not Kosher, 1 - Regular Kosher, 2 - Kosher Lemehadrin
        type: ""
    }

    try {

        let number = input.question("How many pepole are you going with? ");

        if ((number.trim() !== '') && !(isNaN(number)) && (number > 0)) {
            console.log(Number.isInteger(Number(number)));
            restaurantTypes.guests += number;
            if (input.keyInYNStrict('Do you want a Kosher restaurant?')) {
                userRequest.kosher = 1;
                if (input.keyInYNStrict('Should it be a Kashrut Lemehadrin?')) {
                    console.log("Should  it be kashrut lemehadrin?");
                    userRequest.kosher = 2;
                }
            }
            console.log("Please choose type of food: ");
            index = input.keyInSelect(restaurantTypes, null, { cancel: false });
            userRequest.type = restaurantTypes[index];

        } else {
            console.log("You entered an invalid input.");
            throw "Stop execution";
        }
        let recommendation = recommendRestaurant(userRequest.kosher, userRequest.type);
        if (recommendation) {
            console.log("\nWe found this great restaurant for you: \n" + recommendation.toString());
        } else {
            console.log("We could not find a restaurant to match your request.");
        }
    }
    catch (err) {
        console.log(err);
    }
})()