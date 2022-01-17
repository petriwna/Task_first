const {getDays} = require('../src/task1');

describe('getDays', () => {
    test('get number of days in a month', () => {
        expect(getDays(2021, 4)).toBe(30);
    });
    test('get number of days in a month', () => {
        expect(getDays(2021, 'April')).toBe(30);
    });
});