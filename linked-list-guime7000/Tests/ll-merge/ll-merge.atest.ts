// import { describe, expect, test } from '@jest/globals';
import { merge } from '../../ll-merge/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('mergeMsodule', () => {

    it('An empty List A should return  listB', () => {
        let listB: Link<number> = { data: 0, next: null };
        const output = merge(null, listB)
        expect(output).toStrictEqual(listB);
    });

    it('An empty ListB should return  listA', () => {
        let listA: Link<number> = { data: 0, next: null };
        const output = merge(listA, null)
        expect(output).toStrictEqual(listA);
    });

    it('An empty ListB should return  listA', () => {
        let listA: Link<number> = { data: 0, next: null };
        let listB: Link<number> = { data: 1, next: null };
        const output = merge(listA, listB)
        expect(output).toStrictEqual({ data: 0, next: listB });
    });


});