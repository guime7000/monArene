import { filter } from "../../round-11/index";
import { strLength } from "../../round-03/index";

// const arrLength = require('./arrLength');

describe('filterModule', () => {

    it('map of [] with elem === 1 should return []', () => {
        expect(filter([], (elem) => (elem === 1))).toStrictEqual([]);
    });

    it('map of [1] with elem === 1 should return [1]', () => {
        expect(filter([1], (elem) => (elem === 1))).toStrictEqual([1]);
    });

    it('map of [1,2,3] with elem === 2 should return [2]', () => {
        expect(filter([1, 2, 3], (elem) => (elem === 2))).toStrictEqual([2]);
    });

    it('map of [1,"2",3,"2",2] with elem === "2" should return ["2","2"]', () => {
        expect(filter([1, "2", 3, "2", 2], (elem) => (elem === "2"))).toStrictEqual(["2", "2"]);
    });
});