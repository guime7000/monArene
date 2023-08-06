import { deleteAt } from '../../ll-delete-at/index';

type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('getAtModule', () => {

    it('An empty List should return undefined', () => {
        const output = deleteAt(null, 0)
        expect(output).toStrictEqual(undefined);
    });

    it('A 1 node List should return undefined if input index > list.length', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = deleteAt(firstNode, 2)
        expect(output).toStrictEqual(undefined);
    });

    it('A 1 node List should return the unique list Node if index = 0', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = deleteAt(firstNode, 0);
        expect(output).toStrictEqual(firstNode);

    });

    it('A 2 node List should return undefined if index > list.length or index < 0', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const secondNode: Link<number> = { data: 1, next: null };

        firstNode!.next = secondNode;

        const output = deleteAt(firstNode, 3);
        expect(output).toStrictEqual(undefined);

        const output2 = deleteAt(firstNode, -5);
        expect(output2).toStrictEqual(undefined);
    });

    it('A 3 node List should return undefined if index > list.length', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const secondNode: Link<number> = { data: 1, next: null };
        const thirdNode: Link<number> = { data: 2, next: null };


        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = deleteAt(firstNode, 3);

        expect(output).toStrictEqual(undefined);
    });

    it('A 3 node List should return secondNode if index = 1', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const secondNode: Link<number> = { data: 1, next: null };
        const thirdNode: Link<number> = { data: 2, next: null };


        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = deleteAt(firstNode, 1);

        expect(output).toStrictEqual(secondNode);
    });


});