import { map } from "../../round-10/index";
import { strLength } from "../../round-03/index";

// const arrLength = require('./arrLength');

describe('mapModule', () => {

    it('map of [] times 2 should return []', () => {
        expect(map([], (elem) => (elem * 2))).toStrictEqual([]);
    });

    it('map of [1] times 2 should return [2]', () => {
        expect(map([1], (elem) => (elem * 2))).toStrictEqual([2]);
    });

    it('map of [1,2,3] times 2 should return [2,4,6]', () => {
        expect(map([1, 2, 3], (elem) => (elem * 2))).toStrictEqual([2, 4, 6]);
    });
    // it('map of [1, 2, 3] times 2 should return [2, 4, 6]', () => {
    //     expect(map([1, 2, 3], (elem) => (elem * 2))).toStrictEqual([2, 4, 6]);
    // });

});