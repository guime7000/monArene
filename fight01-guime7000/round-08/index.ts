import { PassThrough } from "stream"

type IndexOfFn = (arr: any[], elem: any) => number

export const indexOf: IndexOfFn = (arr: any[], elem: any) => {
    let i: number = 0;
    while (arr[i] !== undefined) {

        if (arr[i] === elem) {
            return i;
        }
        i++;
    }
    return -1;
}