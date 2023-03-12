type CallbackFn = (elem: any) => any
type ForEachFn = (arr: any[], cb: CallbackFn) => void

export function strLength(str: string) {
    let i: number = 0;
    while (str[i] !== undefined) {
        i += 1;
    }
    console.log("FUnc strLength:" + i)
    return i
}

export function forEach(arr: any[], callb: CallbackFn) {
    let i: number = 0;
    while (arr[i] !== undefined) {
        callb(arr[i]);
        i++;
    }
}

// const arr = ["a", "ab", "abc"];
// let i: number = 0;
// while (arr[i] !== undefined) {
//     console.log(strLength(arr[i]));
//     i++;
// }

// let toto = forEach(["a", "ab", "abc"], strLength);
// console.log(toto);