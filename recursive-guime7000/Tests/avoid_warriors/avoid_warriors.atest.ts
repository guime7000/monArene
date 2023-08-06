import { avoidTheWarriors } from "../../avoid-the-warriors/index"

type Runway = [number, number][]

describe('avoidWarriorsModule', () => {


    it('empty runway should return 0', () => {
        expect(avoidTheWarriors([])).toStrictEqual(0);
    });

    it('length 1 runway should return 0', () => {
        expect(avoidTheWarriors([[0, 0]])).toStrictEqual(0);
    });

    it('length 2 witn no ennemy runway should return 0', () => {
        expect(avoidTheWarriors([[0, 0], [0, 0]])).toStrictEqual(0);
    });

    it('length 3 witn no ennemy runway should return 0', () => {
        expect(avoidTheWarriors([[0, 0], [0, 0], [0, 0]])).toStrictEqual(0);
    });

    it('length 3 witn 1 ennemy runway should return 0', () => {
        expect(avoidTheWarriors([[0, 0], [0, 1], [0, 0]])).toStrictEqual(0);
    });

    let myrunway: Runway = [
        [0, 0],
        [0, 1],
        [0, 0],
        [1, 0],
        [1, 0],
        [0, 0],
    ] // 2
    it('length 6 witn 3 ennemies runway should return 2', () => {
        expect(avoidTheWarriors(myrunway)).toStrictEqual(2);
    });

    let toto: Runway = [
        [0, 0],
        [0, 0],
        [0, 0],
        [1, 0],
        [1, 0],
        [0, 0],
    ] // 2
    it('length 6 witn 2 ennemies runway should return 2', () => {
        expect(avoidTheWarriors(toto)).toStrictEqual(2);
    });

});


// [
//     [0, 0],
//     [0, 0],
//     [0, 0],
// ] // 0

// [
//     [0, 0],
//     [0, 1],
//     [0, 0],
// ] // 0

// [
//     [0, 0],
//     [0, 1],
//     [0, 0],
//     [1, 0],
//     [1, 0],
//     [0, 0],
// ] // 2