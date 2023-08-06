// import { describe, expect, test } from '@jest/globals';
import { count } from '../../ll-count/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('countMsodule', () => {

    it('An empty List should return 0', () => {
        const output = count(null)
        expect(output).toStrictEqual(0);
    });

    it('An empty List should return 0', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = count(firstNode);
        expect(output).toStrictEqual(1);
    });


    it('An empty List should return 0', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        const thirdNode: Link<string> = { data: "String3", next: null };

        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = count(firstNode);
        expect(output).toStrictEqual(3);
    });

    // it('A1 node List should not be broken', () => {
    //     const firstNode: Link<number> = { data: 1, next: null };
    //     const output = addAfter(firstNode, 153)
    //     expect(output?.data).toStrictEqual(153);
    //     expect(output?.next).toStrictEqual(null);
    //     expect(firstNode?.next).toStrictEqual(output);
    // });

    // it('A 2 node number List', () => {
    //     const firstNode: Link<number> = { data: 1, next: null };
    //     const secondNode: Link<number> = { data: 2, next: null };
    //     firstNode!.next = secondNode;
    //     const output = addAfter(firstNode, 153)
    //     expect(output?.data).toStrictEqual(153);
    //     expect(output?.next).toStrictEqual(secondNode);
    //     expect(firstNode?.next).toStrictEqual(output);
    // });

});