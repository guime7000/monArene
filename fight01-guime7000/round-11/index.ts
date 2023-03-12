type CallbackFn = (elem: any) => boolean
type FilterFn = (arr: any[], cb: CallbackFn) => any[]

//      filter([1,2,3], (elem) => (elem === 1));
//      // [1]

export function filter(arr: any[], cb: CallbackFn) {
    let i: number = 0;
    let mappedArray: any[] = [];
    let j: number = 0;
    while (arr[i] !== undefined) {
        if (cb(arr[i])) {
            mappedArray[j] = arr[i];
            j++;
        }
        i++;
    }
    return mappedArray;
}
