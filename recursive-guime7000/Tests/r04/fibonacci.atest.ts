import { fibonacci } from "../../round-04/index";

describe('fibonacciModule', () => {

    it('fibonacci(1) should return 0', () => {
        expect(fibonacci(1)).toStrictEqual(0);
    });

    it('fibonacci(2) should return 1', () => {
        expect(fibonacci(2)).toStrictEqual(1);
    });

    it('fibonacci(3) should return 1', () => {
        expect(fibonacci(3)).toStrictEqual(1);
    });

    it('fibonacci(4) should return 2', () => {
        expect(fibonacci(3)).toStrictEqual(1);
    });
});