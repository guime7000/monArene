type IsAlphaFn = (str: string) => boolean
type DiffFn = (arrA: string[], arrB: string[]) => string[]
type SplitFn = (str: string) => string[]

//      isAlpha("BonjourJeSuisContent");
//      // true
//      isAlpha("Bonjour 123");
//      // false
//      isAlpha("Bonjour ");
//      // false


export function split(str: string) {
    let i: number = 0;
    let splittedString: string[] = [''];
    while (str[i] !== undefined) {
        splittedString[i] = str[i];
        i++;
    }
    return splittedString;

}

export const diff: DiffFn = (arrA: string[], arrB: string[]) => {
    let returnedArray: string[] = [];
    let i: number = 0;
    let k: number = 0;
    while (arrA[i] !== undefined) {
        let j: number = 0;
        let inBoth: boolean = false;
        while (arrB[j] !== undefined) {
            if (arrA[i] === arrB[j]) {
                inBoth = true;
                break;
            }
            j++;
        }
        if (!inBoth) {
            returnedArray[k] = arrA[i];
            k++;
        }
        i++;
    }
    return returnedArray;
}

export function arrLength(arr: string[]) {
    let i = 0;
    while (arr[i] !== undefined) {
        i += 1;
    }
    return i
}


export const isAlpha: IsAlphaFn = (str: string) => {
    const splittedString: string[] = split(str);
    const alphaBETA: string[] = ["a", "b", "c", "d", "e", "f",
        "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const diffArray: string[] = diff(splittedString, alphaBETA);

    return arrLength(diffArray) === 0;
}



