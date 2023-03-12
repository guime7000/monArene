import { find } from "../../round-12/index";

// const arrLength = require('./arrLength');

describe('findModule', () => {

    it('find in [] with elem === 1 should return undefined', () => {
        expect(find([], (elem) => (elem === 1))).toStrictEqual(undefined);
    });

    it('map of [1] with elem === 1 should return 1', () => {
        expect(find([1], (elem) => (elem === 1))).toStrictEqual(1);
    });

    it('map of [1,2,3] with elem === 2 should return 2', () => {
        expect(find([1, 2, 3], (elem) => (elem === 2))).toStrictEqual(2);
    });

    it('map of [2,3,1,1] with elem === 1 should return 1', () => {
        expect(find([2, 3, 1, 1], (elem) => (elem === 1))).toStrictEqual(1);
    });

    it('map of [1,"2",3,"2",2] with elem === "2" should return "2"', () => {
        expect(find([1, "2", 3, "2", 2], (elem) => (elem === "2"))).toStrictEqual("2");
    });
});