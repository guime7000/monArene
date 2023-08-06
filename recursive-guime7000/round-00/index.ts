type FactorialFn = (nb: number) => number;

export const iterativeFactorial: FactorialFn = (n: number) => {
    let facto: number = 1;
    let i = n;
    while (i > 0) {
        facto = facto * i
        i--;
    }
    return facto;
}

