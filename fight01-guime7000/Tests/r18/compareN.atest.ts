import { compareN } from "../../round-18/index";

describe('conparetNModule', () => {

    it('compareN("", "", 3) should return 0', () => {
        expect(compareN("", "", 3)).toStrictEqual(0);
    });

    it('compareN("hello", "habbo", 3) should return 2', () => {
        expect(compareN("hello", "habbo", 3)).toStrictEqual(2);
    });

    it('compareN("hello", "habbo", 30)) should return 3', () => {
        expect(compareN("hello", "habbo", 30)).toStrictEqual(3);
    });

    it('compareN("julius", "julius2", 7)) should return 1', () => {
        expect(compareN("julius", "julius2", 7)).toStrictEqual(1);
    });

    it('compareN("julius", "julius2", 7)) should return 1', () => {
        expect(compareN("julius2", "julius", 7)).toStrictEqual(1);
    });

    it('compareN("haaa", "habb", 4) should return 2', () => {
        expect(compareN("haaa", "habb", 4)).toStrictEqual(2);
    });

    it('compareN("hello", "habbox", 6) should return 4', () => {
        expect(compareN("hello", "habbox", 6)).toStrictEqual(4);
    });
});