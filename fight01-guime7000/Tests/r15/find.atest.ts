import { diff } from "../../round-15/index";

// const arrLength = require('./arrLength');

describe('everyModule', () => {

    it('every in [] and [] should return []]', () => {
        expect(diff([], [])).toStrictEqual([]);
    });

    it('every in [1] and [1] should return [1]]', () => {
        expect(diff([1], [1])).toStrictEqual([]);
    });

    it('every in [1,2] and [1] should return [1]]', () => {
        expect(diff([1, 2], [1])).toStrictEqual([2]);
    });

    it('every in [1] and [1,2] should return [1]]', () => {
        expect(diff([1], [1, 2])).toStrictEqual([]);
    });

    it('every in [1,2,3] and [1,4,5] should return [2,3]]', () => {
        expect(diff([1, 2, 3], [1, 4, 5])).toStrictEqual([2, 3]);
    });

    it('every in [1,2,3] and [4,5,6] should return [1,2,3]]', () => {
        expect(diff([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 2, 3]);
    });

});