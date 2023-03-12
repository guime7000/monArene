export function strLength(str: string) {
    let i: number = 0;
    while (str[i] !== undefined) {
        i += 1;
    }
    return i
}
