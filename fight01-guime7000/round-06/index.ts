type PushFn = (arr: any[], item: any) => void

export function objectLength(str: any) {
    let i: number = 0;
    while (str[i] !== undefined) {
        i += 1;
    }
    return i
}

export const push: PushFn = (arr: any[], item: any) => {

    const arrayLength = objectLength(arr);
    // var x = arr;
    arr[arrayLength] = item;
}
