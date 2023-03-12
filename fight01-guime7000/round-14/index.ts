type CallbackFn = (elem: any) => boolean
type EveryFn = (arr: any[], cb: CallbackFn) => boolean

//      every([1,2,3], (elem) => (elem === 3));
//      // false
//      every([1,1,1], (elem) => (elem === 1));
//      // true

export function every(arr: any[], cb: CallbackFn) {
    let i: number = 0;

    if (arr[i] === undefined) {
        return false;
    }

    while (arr[i] !== undefined) {
        if (!cb(arr[i])) {
            return false;
        }
        i++;
    }
    return true;
}