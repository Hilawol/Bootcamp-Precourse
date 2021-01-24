(function () {
    'use strict';

    function reverseArray(arr) {
        let first = 0,
            last = arr.length - 1,
            temp;
        while (first < last) {
            temp = arr[first];
            arr[first] = arr[last];
            arr[last] = temp;
            first += 1;
            last -= 1;
        }
    }

    let arr = [1, 2, 3, 4, 5],
        arr2 = [4, 3],
        arr3 = [];

    reverseArray(arr);
    reverseArray(arr2);
    reverseArray(arr3);

    console.log(arr); //[ 5, 4, 3, 2, 1 ]
    console.log(arr2); //[3,4]
    console.log(arr3); //[]

})()