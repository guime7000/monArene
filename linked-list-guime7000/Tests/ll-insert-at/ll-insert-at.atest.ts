// import { describe, expect, test } from '@jest/globals';
import { insertAt } from '../../ll-insert-at/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('shiftModule', () => {

    it('An empty List and index = 0 should return Node with data value', () => {
        const output = insertAt(null, 0, 123)
        expect(output).toStrictEqual({ data: 123, next: null });
    });


    // it('A 2 nodes List should return input node', () => {
    //     const firstNode: Link<string> = { data: "String1", next: null };
    //     const secondNode: Link<string> = { data: "String2", next: null };
    //     firstNode!.next = secondNode;

    //     const output = shift(firstNode);

    //     expect(output).toStrictEqual(secondNode);
    //     expect(firstNode.next).toStrictEqual(null);
    // });

    // // it('An 2 nodes List should return last node', () => {
    // //     const firstNode: Link<string> = { data: "String1", next: null };
    // //     const secondNode: Link<string> = { data: "String2", next: null };
    // //     firstNode!.next = secondNode;
    // //     const output = getLast(firstNode);
    // //     expect(output).toStrictEqual(secondNode);
    // // });
    it('Inserting "Inserted" at index 0 should return { data: "Inserted", next: firstNode }', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        const thirdNode: Link<string> = { data: "String3", next: null };

        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = insertAt(firstNode, 0, "Inserted");
        expect(output).toStrictEqual({ data: "Inserted", next: firstNode });
        expect(firstNode.next).toStrictEqual(secondNode);
    });

    it('Inserting "Inserted" at index 1 should return { data: "Inserted", next: secondNode }', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        const thirdNode: Link<string> = { data: "String3", next: null };

        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = insertAt(firstNode, 1, "Inserted");
        expect(output).toStrictEqual({ data: "Inserted", next: secondNode });
        expect(firstNode.next).toStrictEqual(output);
    });


});