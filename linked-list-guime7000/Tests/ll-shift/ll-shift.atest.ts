// import { describe, expect, test } from '@jest/globals';
import { shift } from '../../ll-shift/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('shiftModule', () => {

    it('An empty List should return undefined', () => {
        const output = shift(null)
        expect(output).toStrictEqual(undefined);
    });

    it('A 1 node List should return undefined', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = shift(firstNode);
        expect(output).toStrictEqual(undefined);
    });

    it('A 2 nodes List should return input node', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        firstNode!.next = secondNode;

        const output = shift(firstNode);

        expect(output).toStrictEqual(secondNode);
        expect(firstNode.next).toStrictEqual(null);
        //     expect(secondNode?.data).toStrictEqual("String2");
        //     expect(secondNode?.next).toStrictEqual(output);
    });

    // // it('An 2 nodes List should return last node', () => {
    // //     const firstNode: Link<string> = { data: "String1", next: null };
    // //     const secondNode: Link<string> = { data: "String2", next: null };
    // //     firstNode!.next = secondNode;
    // //     const output = getLast(firstNode);
    // //     expect(output).toStrictEqual(secondNode);
    // // });


    // // it('An empty List should return 0', () => {
    // //     const firstNode: Link<string> = { data: "String1", next: null };
    // //     const secondNode: Link<string> = { data: "String2", next: null };
    // //     const thirdNode: Link<string> = { data: "String3", next: null };

    // //     firstNode!.next = secondNode;
    // //     secondNode!.next = thirdNode;

    // //     const output = getLast(firstNode);
    // //     expect(output).toStrictEqual(thirdNode);
    // // });


});