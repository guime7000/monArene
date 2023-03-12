import { stringLiteral } from "@babel/types";

type ItoaFn = (nb: number) => string
type PowerFn = (nb: number, power: number) => number;

export const recursivePower: PowerFn = (nb: number, power: number) => {

    if (power <= 0) {
        return 1;
    }
    return nb * recursivePower(nb, power - 1);
}

export const itoa: ItoaFn = (nb: number) => {

    let intToStr: { [digit: number]: string; } = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9'
    }

    let result: string = "";
    let sign: string = "";
    if (1 / nb === -Infinity) {
        return "-0";
    }
    else if (1 / nb === Infinity) {
        return "0";
    }
    if (nb <= -1) {
        sign = "-";
        nb = -1 * nb;
    }
    let dividend: number = nb;
    while (dividend !== 0) {
        result = dividend % 10 + result;
        console.log(result)
        dividend = (dividend - dividend % 10) / 10
    }

    return sign + result;
}
