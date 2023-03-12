import { itoji } from "../../round-03/index";

describe('itobinModule', () => {

    it('itobin(0) should return -0', () => {
        expect(itoji(0)).toStrictEqual("👍");
    });

    it('itobin(-0) should return -0', () => {
        expect(itoji(-0)).toStrictEqual("-👍");
    });

    it('itobin(0) should return "0"', () => {
        expect(itoji(111)).toStrictEqual("🐕😊✨");
    });

    // it('itobin(+0) should return "0"', () => {
    //     expect(itohex(+0)).toStrictEqual("0");
    // });



});
