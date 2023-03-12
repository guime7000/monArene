type CallbackFn = (elem: any) => any
type MapFn = (arr: any[], cb: CallbackFn) => any[]

export function map(arr: any[], cb: CallbackFn) {
    let i: number = 0;
    let mappedArray: any[] = [];
    while (arr[i] !== undefined) {
        mappedArray[i] = cb(arr[i]);
        i++;
    }
    return mappedArray;
}