type ArrLengthFn = (arr: number[]) => number

export function arrLength(arr: number[]) {
    let i = 0;
    while (arr[i] !== undefined) {
        i += 1;
    }
    return i
}