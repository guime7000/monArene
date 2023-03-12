import { concatN } from "../../round-17/index";

// const arrLength = require('./arrLength');

describe('concatNModule', () => {

    it('concatN("", "", 3) should return ""', () => {
        expect(concatN("", "", 3)).toStrictEqual("");
    });

    it('concatN("a", "bc", 0) should return "a"', () => {
        expect(concatN("a", "bc", 0)).toStrictEqual("a");
    });

    it('concatN("", "bc", 2) should return ""', () => {
        expect(concatN("", "bc", 2)).toStrictEqual("bc");
    });

    it('concatN("hello", "world", 3) should return "hellowor"', () => {
        expect(concatN("hello", "world", 3)).toStrictEqual("hellowor");
    });

    it('concatN("hello", "world", 100) should return "helloworld"', () => {
        expect(concatN("hello", "world", 100)).toStrictEqual("helloworld");
    });

});