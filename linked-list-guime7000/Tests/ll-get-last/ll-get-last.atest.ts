// import { describe, expect, test } from '@jest/globals';
import { getLast } from '../../ll-get-last/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('getLastMsodule', () => {

    it('An empty List should return 0', () => {
        const output = getLast(null)
        expect(output).toStrictEqual(null);
    });

    it('An 1 node List should return input node', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = getLast(firstNode);
        expect(output).toStrictEqual(firstNode);
    });

    it('An 2 nodes List should return last node', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        firstNode!.next = secondNode;
        const output = getLast(firstNode);
        expect(output).toStrictEqual(secondNode);
    });


    it('An empty List should return 0', () => {
        const firstNode: Link<string> = { data: "String1", next: null };
        const secondNode: Link<string> = { data: "String2", next: null };
        const thirdNode: Link<string> = { data: "String3", next: null };

        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = getLast(firstNode);
        expect(output).toStrictEqual(thirdNode);
    });


});