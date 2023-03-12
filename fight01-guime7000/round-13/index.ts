type CallbackFn = (elem: any) => boolean
type SomeFn = (arr: any[], cb: CallbackFn) => boolean

//       some([1,2,3], (elem) => (elem === 3));
//       // true
//       some([1,2,3], (elem) => (elem === 5));
//       // false

export function some(arr: any[], cb: CallbackFn) {
    let i: number = 0;
    while (arr[i] !== undefined) {
        if (cb(arr[i])) {
            return true;
        }
        i++;
    }
    return false;
}