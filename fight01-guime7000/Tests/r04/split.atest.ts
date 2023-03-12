// import { describe, expect, test } from '@jest/globals';
import { split } from "../../round-04/index";

// const arrLength = require('./arrLength');

describe('splitmodule', () => {

    it('split of "" returns []', () => {
        expect(split("")).toStrictEqual(['']);
    });

    it('split of "ab" returns ["a","b"]', () => {
        expect(split("ab")).toStrictEqual(["a", "b"]);
    });

    it('split of "abc" returns ["a","b","c"]', () => {
        expect(split("abc")).toStrictEqual(["a", "b", "c"]);
    });
});