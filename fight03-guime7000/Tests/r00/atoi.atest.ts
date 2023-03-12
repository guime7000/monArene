import { atoi } from "../../round-00/index";

describe('atoiModule', () => {

    // // ##############" Shrink" ####################""

    // it('shrinkString("007") should return 7', () => {
    //     expect(shrinkString("007")).toStrictEqual("7");
    // });

    // it('shrinkString("+007") should return 7', () => {
    //     expect(shrinkString("+007")).toStrictEqual("7");
    // });

    // it('shrinkString("-00070") should return 7', () => {
    //     expect(shrinkString("-0007010")).toStrictEqual("7010");
    // });


    // ###############"" parsing string ###########

    it('atoi("a1234") should return NAN', () => {
        expect(atoi("a1234")).toStrictEqual(NaN);
    });

    it('atoi("") should return NAN', () => {
        expect(atoi("")).toStrictEqual(NaN);
    });

    it('atoi("+A") should return NAN', () => {
        expect(atoi("+A")).toStrictEqual(NaN);
    });

    it('atoi("-A") should return NAN', () => {
        expect(atoi("-A")).toStrictEqual(NaN);
    });

    it('atoi("1A2F") should return NAN', () => {
        expect(atoi("1A2F")).toStrictEqual(NaN);
    });

    it('atoi("-+1") should return NAN', () => {
        expect(atoi("-+1")).toStrictEqual(NaN);
    });

    it('atoi("-+1") should return NAN', () => {
        expect(atoi("-+1")).toStrictEqual(NaN);
    });

    it('atoi("-+-1213") should return Nan', () => {
        expect(atoi("-+-1213")).toStrictEqual(NaN);
    });

    it('atoi("AF2") should return Nan', () => {
        expect(atoi("AF2")).toStrictEqual(NaN);
    });

    // // ################ computing string ############

    it('atoi("-0") should return -0', () => {
        expect(atoi("-0")).toStrictEqual(-0);
    });

    it('atoi("9") should return 9', () => {
        expect(atoi("9")).toStrictEqual(9);
    });

    it('atoi("007") should return 7', () => {
        expect(atoi("007")).toStrictEqual(7);
    });

    it('atoi("+007") should return 7', () => {
        expect(atoi("007")).toStrictEqual(7);
    });

    it('atoi("-0007") should return -7', () => {
        expect(atoi("-0007")).toStrictEqual(-7);
    });

    it('atoi("125") should return 125', () => {
        expect(atoi("125")).toStrictEqual(125);
    });

    it('atoi("+135") should return 135', () => {
        expect(atoi("+135")).toStrictEqual(135);
    });

    it('atoi("-135") should return -135', () => {
        expect(atoi("-135")).toStrictEqual(-135);
    });

    it('atoi("+000135") should return 135', () => {
        expect(atoi("+000135")).toStrictEqual(135);
    });
});
