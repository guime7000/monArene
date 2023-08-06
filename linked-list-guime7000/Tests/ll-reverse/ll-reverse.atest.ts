// import { describe, expect, test } from '@jest/globals';
import { reverse } from '../../ll-reverse/index';

// const arrLength = require('./arrLength');


type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('reverseModule', () => {

    it('An empty return  null', () => {
        const output = reverse(null)
        expect(output).toStrictEqual(null);
    });

    it('A 2 nodes A{data: 0} -> B{data:1} return  B ->', () => {
        let firstNode: Link<number> = { data: 0, next: null };
        let secondNode: Link<number> = { data: 1, next: null };

        firstNode!.next = secondNode;

        const output = reverse(firstNode);
        expect(output).toStrictEqual(secondNode);
        expect(firstNode.data).toStrictEqual(0);
        expect(firstNode.next).toStrictEqual(null);
        expect(secondNode.data).toStrictEqual(1);
        expect(secondNode.next).toStrictEqual(firstNode);
        // expect(thirdNode.data).toStrictEqual(2);
        // expect(thirdNode.next).toStrictEqual(secondNode);
    });


    it('A 3 nodes A{data: 0} -> B{data:1} -> C{data:2} return  C -> B -> A', () => {
        let firstNode: Link<number> = { data: 0, next: null };
        let secondNode: Link<number> = { data: 1, next: null };
        let thirdNode: Link<number> = { data: 2, next: null };

        firstNode.next = secondNode;
        secondNode.next = thirdNode;


        const output = reverse(firstNode);
        expect(output?.data).toStrictEqual(thirdNode.data);
        expect(output?.next).toStrictEqual(thirdNode.next);

        expect(firstNode.data).toStrictEqual(0);
        expect(firstNode.next).toStrictEqual(null);
        expect(secondNode.data).toStrictEqual(1);
        expect(secondNode.next).toStrictEqual(firstNode);
        expect(thirdNode.data).toStrictEqual(2);
        expect(thirdNode.next).toStrictEqual(secondNode);
    });

    // it('An empty ListB should return  listA', () => {
    //     let listA: Link<number> = { data: 0, next: null };
    //     const output = merge(listA, null)
    //     expect(output).toStrictEqual(listA);
    // });

    // it('An empty ListB should return  listA', () => {
    //     let listA: Link<number> = { data: 0, next: null };
    //     let listB: Link<number> = { data: 1, next: null };
    //     const output = merge(listA, listB)
    //     expect(output).toStrictEqual({ data: 0, next: listB });
    // });


});