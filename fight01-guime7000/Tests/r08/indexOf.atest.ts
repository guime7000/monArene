import { indexOf } from "../../round-08/index";

// const arrLength = require('./arrLength');

describe('reverseNumberModule', () => {

    it('indexOf "" in [] should return -1', () => {
        expect(indexOf([], "")).toStrictEqual(-1);
    });

    it('indexOf "a" in ["a"] should return 0', () => {
        expect(indexOf(["a"], "a")).toStrictEqual(0);
    });

    it('indexOf "abc" in ["a", "abc"] should return 0', () => {
        expect(indexOf(["a", "abc"], "abc")).toStrictEqual(1);
    });

    it('indexOf 1 in ["a", "abc", "a", 1] should return 3', () => {
        expect(indexOf(["a", "abc", "a", 1], 1)).toStrictEqual(3);
    });

    it('indexOf "a" in ["a", "a", "a", 1] should return 0', () => {
        expect(indexOf(["a", "a", "a", 1], "a")).toStrictEqual(0);
    });

    it('indexOf ["a",2] in ["a", ["a",2]] should return 1', () => {
        expect(indexOf(["a", ["a", 2]], ["a", 2])).toStrictEqual(-1);
    });

});