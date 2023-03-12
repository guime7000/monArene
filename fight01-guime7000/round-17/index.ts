type ConcatNFn = (strA: string, strB: string, n: number) => string
type StrLengthFn = (str: string) => number

//      concatN("hello", "world", 3);
//      // "hellowor"
//      concatN("hello", "world", 100);
//      // "helloworld"

export function strLength(str: string) {
    let i: number = 0;
    while (str[i] !== undefined) {
        i += 1;
    }
    return i
}


export const concatN: ConcatNFn = (strA: string, strB: string, n: number) => {
    let concatened: string = strA;
    const BLength: number = strLength(strB);
    let i: number = 0;

    if (n >= BLength) {
        n = BLength;
    }

    while (i !== n) {
        concatened = concatened + strB[i];
        i++;
    }


    return concatened;
}