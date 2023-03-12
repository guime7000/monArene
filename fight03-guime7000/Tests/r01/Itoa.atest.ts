import { itoa } from "../../round-01/index";

describe('itoaModule', () => {

    it('itoa(-0) should return -0', () => {
        expect(itoa(-0)).toStrictEqual("-0");
    });

    it('itoa(0) should return "0"', () => {
        expect(itoa(0)).toStrictEqual("0");
    });

    it('itoa(+0) should return "0"', () => {
        expect(itoa(+0)).toStrictEqual("0");
    });

    it('itoa(21) should return "21"', () => {
        expect(itoa(21)).toStrictEqual("21");
    });

    it('itoa(-21) should return "-21"', () => {
        expect(itoa(-21)).toStrictEqual("-21");
    });

    it('itoa(-1234521) should return "-11234521"', () => {
        expect(itoa(-1234521)).toStrictEqual("-1234521");
    });

    it('itoa(+1234521) should return "11234521"', () => {
        expect(itoa(+1234521)).toStrictEqual("1234521");
    });
});
