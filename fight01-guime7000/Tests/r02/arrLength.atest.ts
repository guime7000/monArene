// import { describe, expect, test } from '@jest/globals';
import { arrLength } from "../../round-02/index";

// const arrLength = require('./arrLength');

describe('arrLengthmodule', () => {

    it('length of [] eq 0', () => {
        expect(arrLength([])).toBe(0);
    });

    it('length of [1] eq 1', () => {
        expect(arrLength([1])).toBe(1);
    });

    it('length of [1,3,5,7] eq 1', () => {
        expect(arrLength([1, 3, 5, 7])).toBe(4);
    });
});