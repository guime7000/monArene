// import { describe, expect, test } from '@jest/globals';
import { strLength } from "../../round-03/index";

// const arrLength = require('./arrLength');

describe('strLengthmodule', () => {

    it('length of [] eq 0', () => {
        expect(strLength("")).toBe(0);
    });

    it('length of [1] eq 1', () => {
        expect(strLength("1")).toBe(1);
    });

    it('length of [1,3,5,7] eq 1', () => {
        expect(strLength("1234")).toBe(4);
    });
});