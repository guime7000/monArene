// import { describe, expect, test } from '@jest/globals';
import { unshift } from '../../ll-unshift/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('unshiftmodule', () => {

    it('A 1 node number List', () => {
        const firstNode: Link<number> = { data: 1, next: null };
        const output = unshift(firstNode, 0)
        expect(output?.data).toBe(0);
        expect(output?.next).toStrictEqual(firstNode);
    });

    it('A 2 node number List', () => {
        const firstNode: Link<number> = { data: 1, next: null };
        const secondNode: Link<number> = { data: 2, next: null };
        firstNode!.next = secondNode;
        const output = unshift(firstNode, 0)
        expect(output?.data).toBe(0);
        expect(output?.next).toStrictEqual(firstNode);
    });

    it('A 2 node string List', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        firstNode!.next = secondNode;
        const output = unshift(firstNode, "String0")
        expect(output?.data).toStrictEqual("String0");
        expect(output?.next).toStrictEqual(firstNode);
    });





});