const every = require('../src/task3');

describe('every', () => {
    test('every test', () => {
        expect(every([8, 2, 4], function (num){
            return num%2===0;
        })).toBe(true);
    });
    test('every test', () => {
        expect(every([3, 9, 11], function (num){
            return num%2===0;
        })).toBe(false);
    });
});