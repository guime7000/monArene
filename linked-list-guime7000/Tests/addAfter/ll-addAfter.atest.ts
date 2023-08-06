// import { describe, expect, test } from '@jest/globals';
import { addAfter } from '../../ll-add-after/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('addAftermodule', () => {

    it('An empty List should return newNode', () => {
        const output = addAfter(null, 153)
        expect(output?.data).toStrictEqual(153);
        expect(output?.next).toStrictEqual(null);
    });

    it('A1 node List should not be broken', () => {
        const firstNode: Link<number> = { data: 1, next: null };
        const output = addAfter(firstNode, 153)
        expect(output?.data).toStrictEqual(153);
        expect(output?.next).toStrictEqual(null);
        expect(firstNode?.next).toStrictEqual(output);
    });

    it('A 2 node number List', () => {
        const firstNode: Link<number> = { data: 1, next: null };
        const secondNode: Link<number> = { data: 2, next: null };
        firstNode!.next = secondNode;
        const output = addAfter(firstNode, 153)
        expect(output?.data).toStrictEqual(153);
        expect(output?.next).toStrictEqual(secondNode);
        expect(firstNode?.next).toStrictEqual(output);
    });

    // it('A 2 node string List', () => {
    //     const firstNode: Link<string> = { data: "String1", next: null };
    //     const secondNode: Link<string> = { data: "String2", next: null };
    //     firstNode!.next = secondNode;
    //     const output = unshift(firstNode, "String0")
    //     expect(output?.data).toStrictEqual("String0");
    //     expect(output?.next).toStrictEqual(firstNode);
    // });





});