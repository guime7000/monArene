// import { describe, expect, test } from '@jest/globals';
import { reverseString } from "../../round-05/index";

// const arrLength = require('./arrLength');

describe('reverseStringModule', () => {

    it('reverse of "" returns ""', () => {
        expect(reverseString("")).toStrictEqual("");
    });

    it('reverse of "a" returns "a"', () => {
        expect(reverseString("a")).toStrictEqual("a");
    });

    it('reverse of "abc" returns "abc"', () => {
        expect(reverseString("abc")).toStrictEqual("cba");
    });

});