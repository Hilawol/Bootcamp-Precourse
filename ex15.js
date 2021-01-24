(function () {
    'use strict';

    /*  function joinArray(arr1, arr2) {
          let returnValue = "";
          if (arr1.length > 0) {
              returnValue = arr1.join(",");
          }
          if (arr2.length > 0) {
              if (returnValue.length > 0) {
                  returnValue += ",";
              }
              returnValue += arr2.join(",");
          }
          returnValue.length > 0 ? returnValue = returnValue.split(",") : returnValue = [];
          return returnValue;
      }*/
    function joinArray(firstArr, secondArr) {
        return [...firstArr, ...secondArr];

    };

    /* let arr1 = ["Hello"],
         arr2 = ["AppleSeeds", "Bootcamp"];
         */

    let arr1 = [2, 4, 5],
        arr2 = [6, 8, 9];
    console.log(joinArray([], [])); //[]
    console.log(joinArray(arr1, arr2)); // [“Hello”, “AppleSeeds”, “Bootcamp”]
    console.log(joinArray(arr1, [])); // ["Hello"]
    console.log(joinArray([], arr2)); // ["AppleSeeds", "Bootcamp"]
    console.log(joinArray(["first", "second", "third"], ["forth", "fifth"]));
})()
