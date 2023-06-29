'use strict';

/*
Space : is related to the size of things.
*/

/**
 *  reverse an array
 * @param {any[]} [arr=[]]- array to reverse
 * @returns {any[]} reversed array
 */

// More Memory-Efficient (Takes More Time)
const reverseArray1 = (arr = []) => {
  const length = arr.length;
  for (let i = 0; i < length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
  return arr;
};

// More Memory-Intensive (Takes Less Time):
const reverseArray2 = (arr = []) => {
  return arr.slice().reverse();
};

const solutions = [reverseArray1, reverseArray2];

for (const solution of solutions) {
  console.time(`${solution.name}`);
  describe('reverseArrayEfficient', () => {
    test('should reverse an array', () => {
      const expected = [5, 4, 3, 2, 1];
      const actual = solution([1, 2, 3, 4, 5]);
      expect(actual).toEqual(expected);
    });

    test('should reverse an array of strings', () => {
      const expected = ['cherry', 'banana', 'apple'];
      const actual = solution(['apple', 'banana', 'cherry']);

      expect(actual).toEqual(expected);
    });

    test('should return an empty array when input is empty', () => {
      const expected = [];
      const actual = solution([]);

      expect(actual).toEqual(expected);
    });

    test('should return the same array when input has a single element', () => {
      const expected = ['single'];
      const actual = solution(['single']);

      expect(actual).toEqual(expected);
    });
  });
  console.timeEnd(`${solution.name}`);
}
