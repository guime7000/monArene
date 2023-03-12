import { findPath } from "../../round-05/index";

describe('findPathModule', () => {

    // ##### from left to right
    it('findPath([0,0], [0, 0], [[1]]) should return 1', () => {
        expect(findPath([0, 0], [0, 0], [[1]])).toStrictEqual(1);
    });

    it('findPath([0, 0], [1, 0], [[1, 1, 0]]) should return 2', () => {
        expect(findPath([0, 0], [1, 0], [[1, 1, 0]])).toStrictEqual(2);
    });

    it('findPath([1, 0], [2, 0], [[0, 1, 1, 0]]) should return 2', () => {
        expect(findPath([1, 0], [2, 0], [[0, 1, 1, 0]])).toStrictEqual(2);
    });

    it('findPath([0, 0], [2, 0], [[1, 1, 1, 0]]) should return 3', () => {
        expect(findPath([0, 0], [2, 0], [[1, 1, 1, 0]])).toStrictEqual(3);
    });

    // ##### from right to left
    it('findPath([1, 0], [0, 0], [[1, 1, 0]]) should return 2', () => {
        expect(findPath([1, 0], [0, 0], [[1, 1, 0]])).toStrictEqual(2);
    });

    it('findPath([1, 0], [5, 0], [[0, 1, 1, 1, 1, 1, 0]]) should return 5', () => {
        expect(findPath([1, 0], [5, 0], [[0, 1, 1, 1, 1, 1, 0]])).toStrictEqual(5);
    });

    //     // mymatrix = [[0, 1, 1, 1, 1, 1, 0]];
    //     // it('findPath([4, 0], [1, 0], mymatrix) should return 4', () => {
    //     //     expect(findPath([4, 0], [1, 0], mymatrix)).toStrictEqual(4);
    //     // });

    //     // ###################### Downstairs #####################

    it('findPath([0, 0], [0,1], [[1], [1]]) should return 2', () => {
        expect(findPath([0, 0], [0, 1], [[1], [1]])).toStrictEqual(2);
    });

    //     // ########################" Upstairs#####################"

    it('findPath([0, 1], [0, 0], [[1], [1]]) should return 2', () => {
        expect(findPath([0, 1], [0, 0], [[1], [1]])).toStrictEqual(2);
    });

    //     // #####################" Julius example " ##################""
    it('findPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 0, 1, 0]]) should return 3', () => {
        expect(findPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 0, 1, 0]])).toStrictEqual(3);
    });



    /// PROBLEMATIC !!!!!!!!

    //     // ###################### Downstairs #####################
    it('findPath([0, 0], [4, 2], [[1], [1], [1]]) should return 3', () => {
        expect(findPath([0, 0], [0, 2], [[1], [1], [1]])).toStrictEqual(3);
    });

    it('findPath([2, 1], [1, 0], [[0, 1, 1, 0], [0, 0, 1, 0]]) should return 3', () => {
        expect(findPath([2, 1], [1, 0], [[0, 1, 1, 0], [0, 0, 1, 0]])).toStrictEqual(3);
    });
});