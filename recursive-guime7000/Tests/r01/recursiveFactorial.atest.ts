import { recursiveFactorial } from "../../round-01/index";

// const arrLength = require('./arrLength');

describe('recursiveFactorialModule', () => {

    it('recursiveFactorial(0) should return 1', () => {
        expect(recursiveFactorial(0)).toStrictEqual(1);
    });

    it('recursiveFactorial(1) should return 1', () => {
        expect(recursiveFactorial(1)).toStrictEqual(1);
    });

    it('recursiveFactorial() should return 2', () => {
        expect(recursiveFactorial(2)).toStrictEqual(2);
    });

    it('recursiveFactorial() should return 3', () => {
        expect(recursiveFactorial(3)).toStrictEqual(6);
    });
});