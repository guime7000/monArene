import { shortestPath } from "../../round-06/index";

describe('shortestPathModule', () => {

    // ##### from left to right
    it('shortestPath([0,0], [0, 0], [[1]]) should return 1', () => {
        expect(shortestPath([0, 0], [0, 0], [[1]])).toStrictEqual(1);
    });

    it('shortestPath([0, 0], [1, 0], [[1, 1, 0]]) should return 2', () => {
        expect(shortestPath([0, 0], [1, 0], [[1, 1, 0]])).toStrictEqual(2);
    });

    it('shortestPath([1, 0], [2, 0], [[0, 1, 1, 0]]) should return 2', () => {
        expect(shortestPath([1, 0], [2, 0], [[0, 1, 1, 0]])).toStrictEqual(2);
    });

    it('shortestPath([0, 0], [2, 0], [[1, 1, 1, 0]]) should return 3', () => {
        expect(shortestPath([0, 0], [2, 0], [[1, 1, 1, 0]])).toStrictEqual(3);
    });

    // ##### from right to left
    it('shortestPath([1, 0], [0, 0], [[1, 1, 0]]) should return 2', () => {
        expect(shortestPath([1, 0], [0, 0], [[1, 1, 0]])).toStrictEqual(2);
    });

    it('shortestPath([1, 0], [5, 0], [[0, 1, 1, 1, 1, 1, 0]]) should return 5', () => {
        expect(shortestPath([1, 0], [5, 0], [[0, 1, 1, 1, 1, 1, 0]])).toStrictEqual(5);
    });

    //     // mymatrix = [[0, 1, 1, 1, 1, 1, 0]];
    //     // it('shortestPath([4, 0], [1, 0], mymatrix) should return 4', () => {
    //     //     expect(shortestPath([4, 0], [1, 0], mymatrix)).toStrictEqual(4);
    //     // });

    //     // ###################### Downstairs #####################

    it('shortestPath([0, 0], [0,1], [[1], [1]]) should return 2', () => {
        expect(shortestPath([0, 0], [0, 1], [[1], [1]])).toStrictEqual(2);
    });

    //     // ########################" Upstairs#####################"

    it('shortestPath([0, 1], [0, 0], [[1], [1]]) should return 2', () => {
        expect(shortestPath([0, 1], [0, 0], [[1], [1]])).toStrictEqual(2);
    });

    //     // #####################" Julius example " ##################""
    it('shortestPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 0, 1, 0]]) should return 3', () => {
        expect(shortestPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 0, 1, 0]])).toStrictEqual(3);
    });



    /// PROBLEMATIC !!!!!!!!

    //     // ###################### Downstairs #####################
    it('shortestPath([0, 0], [4, 2], [[1], [1], [1]]) should return 3', () => {
        expect(shortestPath([0, 0], [0, 2], [[1], [1], [1]])).toStrictEqual(3);
    });

    it('shortestPath([2, 1], [1, 0], [[0, 1, 1, 0], [0, 0, 1, 0]]) should return 3', () => {
        expect(shortestPath([2, 1], [1, 0], [[0, 1, 1, 0], [0, 0, 1, 0]])).toStrictEqual(3);
    });
});