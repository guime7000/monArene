type DiffFn = (arrA: number[], arrB: number[]) => number[]

//      diff([1,2,3], [1,4,5]);
//      // [2,3]

export const diff: DiffFn = (arrA: number[], arrB: number[]) => {
    let returnedArray: number[] = [];
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