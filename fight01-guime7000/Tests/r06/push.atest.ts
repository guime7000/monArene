// import { describe, expect, test } from '@jest/globals';
import { push } from "../../round-06/index";

// const arrLength = require('./arrLength');

describe('pushModule', () => {

    it('pushing 1 to ["a","b"] returns ["a","b",1]', () => {
        let arr = [];
        let item = "";
        push(arr, item)
        expect(arr).toStrictEqual([""]);
    });

    it('pushing 1 to ["a","b"] returns ["a","b",1]', () => {
        let arr = [];
        let item = "a";
        push(arr, item)
        expect(arr).toStrictEqual(["a"]);
    });

    it('pushing 1 to ["a","b"] returns ["a","b",1]', () => {
        let arr = ["a", "b"];
        let item = 1;
        push(arr, item)
        expect(arr).toStrictEqual(["a", "b", 1]);
    });

    it('pushing 1 to ["a","b"] returns ["a","b",1]', () => {
        let arr = ["a", "b", 1];
        let item = [1, 2];
        push(arr, item)
        expect(arr).toStrictEqual(["a", "b", 1, [1, 2]]);
    });
});