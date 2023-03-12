type CompareNFn = (strA: string, strB: string, n: number) => number

//      compareN("hello", "habbo", 3);
//      // 2
//      compareN("hello", "habbo", 30);
//      // 3
//      compareN("julius", "julius2", 7);
//      // 1

export function strLength(str: string) {
    let i: number = 0;
    while (str[i] !== undefined) {
        i += 1;
    }
    return i
}

export function split(str: string) {
    let i: number = 0;
    let splittedString: string[] = [''];
    while (str[i] !== undefined) {
        splittedString[i] = str[i];
        i++;
    }
    return splittedString;

}


export const compareN: CompareNFn = (strA: string, strB: string, n: number) => {

    const Alength: number = strLength(strA);
    const Blength: number = strLength(strB);

    const splittedA: string[] = split(strA);
    const splittedB: string[] = split(strB);

    const shrunkenA: string[] = [];
    const shrunkenB: string[] = [];

    let i: number = 0;
    while (i < n) {
        if (i < Alength) {
            shrunkenA[i] = splittedA[i];
        }
        if (i < Blength) {
            shrunkenB[i] = splittedB[i];
        }
        i++;
    }

    let maxIter: number = 0;

    if (Alength >= Blength) {
        maxIter = Alength;
    }
    else {
        maxIter = Blength;
    }

    let diffArray: string[] = [];
    i = 0;
    let j: number = 0;
    while (i < maxIter) {
        if (shrunkenA[i] != shrunkenB[i]) {
            j++;
        }
        i++;
    }

    return j;
}