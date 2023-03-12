type CallbackFn = (elem: any) => boolean
type FindFn = (arr: any[], cb: CallbackFn) => any

//      find([1,2,3], (elem) => (elem === 2));
//      2

export function find(arr: any[], cb: CallbackFn) {
    let i: number = 0;
    while (arr[i] !== undefined) {
        if (cb(arr[i])) {
            return arr[i]
        }
        i++;
    }
    return undefined;
}