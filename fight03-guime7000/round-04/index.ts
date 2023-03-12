import { stringLiteral } from "@babel/types";

type ItojiFn = (nb: number) => string

export const itoji: ItojiFn = (nb: number) => {



    let intToJi: { [digit: number]: string; } = {
        0: '👍',
        1: '🐕',
        2: '🥹',
        3: '💕',
        4: '🎁',
        5: '😊',
        6: '🏡',
        7: '✨',
    }


    let base: number = 8;

    let result: string = "";
    let sign: string = "";
    if (1 / nb === -Infinity) {
        return `-${intToJi[0]}`;
    }
    else if (1 / nb === Infinity) {
        return `${intToJi[0]}`;
    }
    if (nb <= -1) {
        sign = "-";
        nb = -1 * nb;
    }
    let dividend: number = nb;
    while (dividend !== 0) {
        result = intToJi[dividend % base] + result;
        console.log(result)
        dividend = (dividend - dividend % base) / base
    }

    return sign + result;
}
