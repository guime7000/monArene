import { isAlpha } from "../../round-16/index";

// const arrLength = require('./arrLength');

describe('isAlphaModule', () => {

    it('isAlpha in "" should return false', () => {
        expect(isAlpha("")).toStrictEqual(false);
    });

    it('isAlpha in "BonjourJeSuisContent" should return true', () => {
        expect(isAlpha("BonjourJeSuisContent")).toStrictEqual(true);
    });

    it('isAlpha in "Bonjour 123" should return false', () => {
        expect(isAlpha("Bonjour 123")).toStrictEqual(false);
    });

    it('isAlpha in "Bonjour " should return false', () => {
        expect(isAlpha("Bonjour ")).toStrictEqual(false);
    });
});