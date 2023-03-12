type FactorialFn = (nb: number) => number;

export const recursiveFactorial: FactorialFn = (n: number) => {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}