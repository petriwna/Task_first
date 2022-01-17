const {} = require('../src/task2');

describe('isOd', () => {
    test('is Odd number', () => {
        expect((3).isOdd()).toBe(true);
    });
    test('isOdd', () => {
        expect((8).isOdd()).toBe(false);
    });
});