type FibonacciFn = (n: number) => number;

//      fibonacci(1) === 0 // true
//      fibonacci(2) === 1 // true
//      fibonacci(3) === 1 // true
//      fibonacci(4) === 2 // true

export const fibonacci: FibonacciFn = (n: number) => {
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}