import { every } from "../../round-14/index";

// const arrLength = require('./arrLength');

describe('everyModule', () => {

    it('every in [] with elem === 1 should return false', () => {
        expect(every([], (elem) => (elem === 1))).toStrictEqual(false);
    });

    it('every of [1,2,3] with elem === 3 should return false', () => {
        expect(every([1, 2, 3], (elem) => (elem === 3))).toStrictEqual(false);
    });

    it('map of [1,1,1] with elem === 1 should return true', () => {
        expect(every([1, 1, 1], (elem) => (elem === 1))).toStrictEqual(true);
    });

    // it('map of [1,2,3] with elem === 5 should return false', () => {
    //     expect(some([1, 2, 3], (elem) => (elem === 5))).toStrictEqual(false);
    // });

    // it('map of [1,"2",3,"2",2] with elem === "2" should return "2"', () => {
    //     expect(find([1, "2", 3, "2", 2], (elem) => (elem === "2"))).toStrictEqual("2");
    // });
});