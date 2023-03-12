import { itobin } from "../../round-03/index";

describe('itobinModule', () => {

    it('itobin(-0) should return -0', () => {
        expect(itobin(-0)).toStrictEqual("-0");
    });

    it('itobin(0) should return "0"', () => {
        expect(itobin(0)).toStrictEqual("0");
    });

    it('itobin(+0) should return "0"', () => {
        expect(itobin(+0)).toStrictEqual("0");
    });

    it('itobin(23) should return "10111"', () => {
        expect(itobin(23)).toStrictEqual("10111");
    });

    it('itobin(-23) should return "-10111"', () => {
        expect(itobin(-23)).toStrictEqual("-10111");
    });

    // it('itobin(-1234521) should return "-11234521"', () => {
    //     expect(itobin(-1234521)).toStrictEqual("-1234521");
    // });

    // it('itobin(+1234521) should return "11234521"', () => {
    //     expect(itobin(+1234521)).toStrictEqual("1234521");
    // });

});
