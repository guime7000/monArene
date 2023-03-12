import { stringLiteral } from "@babel/types";

type AtoiFn = (str: string) => number
type PowerFn = (nb: number, power: number) => number;
type ReverseStringFn = (str: string) => string

export const recursivePower: PowerFn = (nb: number, power: number) => {

    if (power <= 0) {
        return 1;
    }
    return nb * recursivePower(nb, power - 1);
}

export const atoi: AtoiFn = (str: string) => {

    let strToInt: { [digit: string]: number; } = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9
    }
    const shrinkString: ReverseStringFn = (str: string) => {

        let shrinkedString: string = ""
        let uselessZero: boolean = true;
        let i: number = 0;
        if (strToInt[str[0]] === undefined) {
            i = 1;
        }
        while (i <= str.length - 1) {
            if (str[i] === "0" && uselessZero) {
                i++;
            }
            else {
                uselessZero = false;
                shrinkedString += str[i];
                i++;
            }
        }
        return shrinkedString;
    }

    let base: number = 10;

    let signe: number = 1;
    let result: number = 0;

    // Validity check
    if (str.length === 0 || str[0] === "+" || str[0] === "-") {
        if (strToInt[str[1]] === undefined) {
            return NaN;
        }
    }
    else {
        let i: number = 0;
        while (i < str.length) {
            if (strToInt[str[i]] === undefined) {
                return NaN;
            }
            i++;
        }
    }

    // Expression is valid
    if (str === "-0") {
        return -1 * strToInt[str[1]]
    }

    if (str.length === 1) {
        return strToInt[str];
    }
    else {
        // Expression's sign assignation
        if (str[0] === "-") {
            signe = -1;
        }

        str = shrinkString(str);
        let arrayOfInt: number[] = [];
        let i = str.length - 1;
        while (i >= 0) {
            arrayOfInt.push(strToInt[str[i]]);
            i--;
        }
        let digitIndex: number = 0;
        while (digitIndex < arrayOfInt.length) {
            result += arrayOfInt[digitIndex] * recursivePower(base, digitIndex);
            digitIndex++;
        }

    }
    return signe * result;
}
