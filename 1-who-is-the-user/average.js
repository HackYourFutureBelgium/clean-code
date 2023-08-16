'use strict';

/*
This code is working fine, it is a nice code for machine, but is it
a readable for humans? how can we modify it to make it more towards
humans?

*/
const average1 = (arr) => {
    let s = 0;
    for (let n of arr) {
        s += n;
    }
    return s / arr.length;
};

console.log(average1([1, 2, 3, 4, 5, 6, 7]));

/**
 *  Calculate the average of all numbers in an array.
 * @param {number[]} arr - array of numbers
 * @returns  the average of all numbers in arr
 */
const average2 = (arr) => {
    let sumOfNumbers = 0;
    const arrLength = arr.length;

    for (const num of arr) {
        sumOfNumbers += num;
    }

    return sumOfNumbers / arrLength;
};

console.log(average2([1, 2, 3, 4, 5, 6, 7]));

/*
Which function is more readable for us humans average1 or average2? why?
*/
