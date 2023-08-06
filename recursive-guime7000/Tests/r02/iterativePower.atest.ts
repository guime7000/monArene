import { iterativePower } from "../../round-02/index";

describe('iterativePowerModule', () => {

    it('iterativePower(0,0) should return 1', () => {
        expect(iterativePower(0, 0)).toStrictEqual(1);
    });

    it('iterativePower(0,1) should return 0', () => {
        expect(iterativePower(0, 1)).toStrictEqual(0);
    });

    it('iterativePower(5,0) should return 1', () => {
        expect(iterativePower(5, 0)).toStrictEqual(1);
    });

    it('iterativePower(2,3) should return 8', () => {
        expect(iterativePower(2, 3)).toStrictEqual(8);
    });

    // it('iterativePower() should return 3', () => {
    //     expect(iterativePower(3)).toStrictEqual(6);
    // });
});