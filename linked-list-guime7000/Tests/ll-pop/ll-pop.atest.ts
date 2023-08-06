// import { describe, expect, test } from '@jest/globals';
import { pop } from '../../ll-pop/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('popModule', () => {

    it('An empty List should return undefined', () => {
        const output = pop(null)
        expect(output).toStrictEqual(undefined);
    });

    it('A 1 node List should return firstNode', () => {
        const firstNode: Link<string> = { data: "String1", next: null };

        const output = pop(firstNode);

        expect(output).toStrictEqual(firstNode);
    });

    it('Popping a 2 Nodes list should return second node', () => {
        const secondNode: Link<string> = { data: "String2", next: null };
        const firstNode: Link<string> = { data: "String1", next: secondNode };
        // const thirdNode: Link<string> = { data: "String3", next: null };

        // firstNode!.next = secondNode;
        // secondNode!.next = thirdNode;

        const output = pop(firstNode);
        expect(output).toStrictEqual(secondNode);
        expect(firstNode.next).toStrictEqual(null);
    });

    // it('Inserting "Inserted" at index 1 should return { data: "Inserted", next: secondNode }', () => {
    //     const firstNode: Link<string> = { data: "String1", next: null };
    //     const secondNode: Link<string> = { data: "String2", next: null };
    //     const thirdNode: Link<string> = { data: "String3", next: null };

    //     firstNode!.next = secondNode;
    //     secondNode!.next = thirdNode;

    //     const output = insertAt(firstNode, 1, "Inserted");
    //     expect(output).toStrictEqual({ data: "Inserted", next: secondNode });
    //     expect(firstNode.next).toStrictEqual(output);
    // });


});