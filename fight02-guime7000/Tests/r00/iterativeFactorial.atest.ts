import { iterativeFactorial } from "../../round-00/index";

// const arrLength = require('./arrLength');

describe('iterativeFactorialModule', () => {

    it('iterativeFactorial(0) should return 1', () => {
        expect(iterativeFactorial(0)).toStrictEqual(1);
    });

    it('iterativeFactorial(1) should return 1', () => {
        expect(iterativeFactorial(1)).toStrictEqual(1);
    });

    it('iterativeFactorial() should return 2', () => {
        expect(iterativeFactorial(2)).toStrictEqual(2);
    });

    it('iterativeFactorial() should return 3', () => {
        expect(iterativeFactorial(3)).toStrictEqual(6);
    });
});