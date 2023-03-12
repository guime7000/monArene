import { recursivePower } from "../../round-03/index";

describe('recursivePowerModule', () => {

    it('recursivePower(0,0) should return 1', () => {
        expect(recursivePower(0, 0)).toStrictEqual(1);
    });

    it('recursivePower(0,1) should return 0', () => {
        expect(recursivePower(0, 1)).toStrictEqual(0);
    });

    it('recursivePower(5,0) should return 1', () => {
        expect(recursivePower(5, 0)).toStrictEqual(1);
    });

    it('recursivePower(2,3) should return 8', () => {
        expect(recursivePower(2, 3)).toStrictEqual(8);
    });

});