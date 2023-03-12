import { stringLiteral } from "@babel/types";

type ItobinFn = (nb: number) => string

export const itobin: ItobinFn = (nb: number) => {

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


    let base: number = 2;

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
        result = dividend % base + result;
        console.log(result)
        dividend = (dividend - dividend % base) / base
    }

    return sign + result;
}
