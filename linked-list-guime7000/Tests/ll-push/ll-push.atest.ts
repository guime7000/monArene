// import { describe, expect, test } from '@jest/globals';
import { push } from '../../ll-push/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('getLastMsodule', () => {

    it('An empty List should return 0', () => {
        const output = push(null, 123)
        expect(output).toStrictEqual({ data: 123, next: null });
    });

    it('A 1 node List should return input node', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = push(firstNode, 157);
        expect(output).toStrictEqual({ data: 157, next: null });
        expect(firstNode).toStrictEqual({ data: 0, next: output });
    });

    it('A 2 nodes List should return input node', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        firstNode!.next = secondNode;

        const output = push(firstNode, "LastNode");

        expect(output).toStrictEqual({ data: "LastNode", next: null });
        expect(firstNode).toStrictEqual(firstNode);
        expect(secondNode?.data).toStrictEqual("String2");
        expect(secondNode?.next).toStrictEqual(output);
    });
    // it('An 2 nodes List should return last node', () => {
    //     const firstNode: Link<string> = { data: "String1", next: null };
    //     const secondNode: Link<string> = { data: "String2", next: null };
    //     firstNode!.next = secondNode;
    //     const output = getLast(firstNode);
    //     expect(output).toStrictEqual(secondNode);
    // });


    // it('An empty List should return 0', () => {
    //     const firstNode: Link<string> = { data: "String1", next: null };
    //     const secondNode: Link<string> = { data: "String2", next: null };
    //     const thirdNode: Link<string> = { data: "String3", next: null };

    //     firstNode!.next = secondNode;
    //     secondNode!.next = thirdNode;

    //     const output = getLast(firstNode);
    //     expect(output).toStrictEqual(thirdNode);
    // });


});