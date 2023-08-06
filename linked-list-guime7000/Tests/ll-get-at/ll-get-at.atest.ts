import { getAt } from '../../ll-get-at/index';

type Link<T> = {
    data: T,
    next: Link<T> | null
}

describe('getAtModule', () => {

    it('An empty List should return undefined', () => {
        const output = getAt(null, 0)
        expect(output).toStrictEqual(undefined);
    });

    it('A 1 node List should return undefined if input index > list.length', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const output = getAt(firstNode, 2)
        expect(output).toStrictEqual(undefined);
    });

    it('A 2 node List should return secondNode if index = 1', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const secondNode: Link<number> = { data: 1, next: null };

        firstNode!.next = secondNode;

        const output = getAt(firstNode, 1)
        expect(output).toStrictEqual(secondNode);
    });

    it('A 2 node List should return undefined if index > list.length', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const secondNode: Link<number> = { data: 1, next: null };

        firstNode!.next = secondNode;

        const output = getAt(firstNode, 3)
        expect(output).toStrictEqual(undefined);
    });

    it('A 3 node List should return undefined if index > list.length', () => {
        const firstNode: Link<number> = { data: 0, next: null };
        const secondNode: Link<number> = { data: 1, next: null };
        const thirdNode: Link<number> = { data: 2, next: null };


        firstNode!.next = secondNode;
        secondNode!.next = thirdNode;

        const output = getAt(firstNode, 3)

        expect(output).toStrictEqual(undefined);
    });

});