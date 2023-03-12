type ReverseStringFn = (str: string) => string

export function strLength(str: string) {
    let i: number = 0;
    while (str[i] !== undefined) {
        i += 1;
    }
    return i
}


export function reverseString(toReverse: string) {

    let toReverseLength: number = strLength(toReverse);
    let i: number = toReverseLength - 1;
    let reversedString: string = "";
    while (i >= 0) {
        reversedString = reversedString + toReverse[i];
        i--;
    }

    return reversedString
}