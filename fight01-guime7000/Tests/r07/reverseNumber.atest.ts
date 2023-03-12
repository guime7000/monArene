// import { describe, expect, test } from '@jest/globals';
import { reverseNumbers } from "../../round-07/index";

// const arrLength = require('./arrLength');

describe('reverseNumberModule', () => {

    it('reversing [] should return []', () => {
        expect(reverseNumbers([])).toStrictEqual([]);
    });

    it('reversing [1] should return [1]', () => {
        expect(reverseNumbers([1])).toStrictEqual([1]);
    });

    it('reversing [1,2] should return [2,1]', () => {
        expect(reverseNumbers([1, 2])).toStrictEqual([2, 1]);
    });

    it('reversing [1,2,100] should return [100,2,1]', () => {
        expect(reverseNumbers([1, 2])).toStrictEqual([2, 1]);
    });
});