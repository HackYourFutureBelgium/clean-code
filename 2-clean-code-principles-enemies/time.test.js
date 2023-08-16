'use strict';

/**
 * Reverse a string
 *
 * @param {string} [str=''] the string to reversed
 * @returns {string} - the reversed string
 */
const reverseString1 = (str = '') => {
    if (typeof str !== 'string') {
        return;
    }
    return str.split('').reverse().join('');
};

/*
reverseString2 is faster and more optimized comparing to reverseString1
run the test and compare the time for both.

*/
const reverseString2 = (str = '') => {
    if (typeof str !== 'string') {
        return;
    }
    const length = str.length;
    const buffer = new ArrayBuffer(length * 2);
    const view = new Uint16Array(buffer);
    for (let i = 0, j = length - 1; i < length; i++, j--) {
        view[i] = str.charCodeAt(j);
    }
    return String.fromCharCode.apply(null, view);
};

const solutions = [reverseString1, reverseString2];

for (const solution of solutions) {
    console.time(`${solution.name}`);
    describe('reverseString', () => {
        test('should reverse a string', () => {
            const expected = '!dlroW ,olleH';
            const actual = solution('Hello, World!');

            expect(actual).toEqual(expected);
        });

        test('should return empty string when input is empty', () => {
            const expected = '';
            const actual = solution('');

            expect(actual).toEqual(expected);
        });

        test('should return undefined when input is not a string', () => {
            const expected = undefined;
            const actual = solution(123);

            expect(actual).toEqual(expected);
        });
    });

    console.timeEnd(`${solution.name}`);
}
