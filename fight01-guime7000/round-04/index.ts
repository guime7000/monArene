type SplitFn = (str: string) => string[]

export function split(str: string) {
    let i: number = 0;
    let splittedString: string[] = [''];
    while (str[i] !== undefined) {
        splittedString[i] = str[i];
        i++;
    }
    return splittedString;

}