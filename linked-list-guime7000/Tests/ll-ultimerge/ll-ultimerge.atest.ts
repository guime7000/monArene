// import { describe, expect, test } from '@jest/globals';
import { ultimerge } from '../../ll-ultimerge/index';

// const arrLength = require('./arrLength');

type Link<T> = {
    data: T,
    next: Link<T> | null
}

let firstA: Link<number> = { data: 11, next: null };
let secondA: Link<number> = { data: 12, next: null };
let thirdA: Link<number> = { data: 13, next: null };

firstA.next = secondA;
secondA.next = thirdA;


let firstB: Link<number> = { data: 21, next: null };
let secondB: Link<number> = { data: 22, next: null };
let thirdB: Link<number> = { data: 23, next: null };

firstB.next = secondB;
secondB.next = thirdB;

describe('ultimergeModule', () => {

    it('An empty return  null', () => {
        const output = ultimerge(null, null)
        expect(output).toStrictEqual(null);
    });

    it("An empty listB should return listA's first node", () => {
        const output = ultimerge(firstA, null)
        expect(output).toStrictEqual(firstA);
    });

    it("An empty listA should return listB's first node", () => {
        const output = ultimerge(null, firstB)
        expect(output).toStrictEqual(firstB);
    });

    it("A1 -> A2 and B1 -> B2 shoulkd return {A1.data, A1.next = B1", () => {
        firstA.next = secondA;
        // secondA.next = null;

        firstB.next = secondB;
        // secondB.next = null;

        const output = ultimerge(firstA, firstB)
        if (output) {
            expect(output.data).toStrictEqual(firstA.data);
            expect(output.next).toStrictEqual(firstB);
        }

    });
    // it('A 2 nodes A{data: 0} -> B{data:1} return  B ->', () => {
    //     let firstNode: Link<number> = { data: 0, next: null };
    //     let secondNode: Link<number> = { data: 1, next: null };

    //     firstNode!.next = secondNode;

    //     const output = reverse(firstNode);
    //     expect(output).toStrictEqual(secondNode);
    //     expect(firstNode.data).toStrictEqual(0);
    //     expect(firstNode.next).toStrictEqual(null);
    //     expect(secondNode.data).toStrictEqual(1);
    //     expect(secondNode.next).toStrictEqual(firstNode);
    //     // expect(thirdNode.data).toStrictEqual(2);
    //     // expect(thirdNode.next).toStrictEqual(secondNode);
    // });


    // it('A 3 nodes A{data: 0} -> B{data:1} -> C{data:2} return  C -> B -> A', () => {
    //     let firstNode: Link<number> = { data: 0, next: null };
    //     let secondNode: Link<number> = { data: 1, next: null };
    //     let thirdNode: Link<number> = { data: 2, next: null };

    //     firstNode.next = secondNode;
    //     secondNode.next = thirdNode;


    //     const output = reverse(firstNode);
    //     expect(output?.data).toStrictEqual(thirdNode.data);
    //     expect(output?.next).toStrictEqual(thirdNode.next);

    //     expect(firstNode.data).toStrictEqual(0);
    //     expect(firstNode.next).toStrictEqual(null);
    //     expect(secondNode.data).toStrictEqual(1);
    //     expect(secondNode.next).toStrictEqual(firstNode);
    //     expect(thirdNode.data).toStrictEqual(2);
    //     expect(thirdNode.next).toStrictEqual(secondNode);
    // });

    // // it('An empty ListB should return  listA', () => {
    // //     let listA: Link<number> = { data: 0, next: null };
    // //     const output = merge(listA, null)
    // //     expect(output).toStrictEqual(listA);
    // // });

    // // it('An empty ListB should return  listA', () => {
    // //     let listA: Link<number> = { data: 0, next: null };
    // //     let listB: Link<number> = { data: 1, next: null };
    // //     const output = merge(listA, listB)
    // //     expect(output).toStrictEqual({ data: 0, next: listB });
    // // });


});