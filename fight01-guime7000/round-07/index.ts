import { PassThrough } from "stream";

type ReverseNumbersFn = (numbers: number[]) => number[]

export function arrLength(arr: number[]) {
    let i = 0;
    while (arr[i] !== undefined) {
        i += 1;
    }
    return i
}

export function reverseNumbers(numbers: number[]) {
    const arrayLen: number = arrLength(numbers);
    const reversedArray: number[] = [];
    let i: number = arrayLen - 1;
    let j: number = 0;
    while (i >= 0) {
        reversedArray[j] = numbers[i];
        j++;
        i--;
    }
    return reversedArray;
}