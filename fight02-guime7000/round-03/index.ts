type PowerFn = (nb: number, power: number) => number;

// 5^3 = 125 = 5 * 25
//           = 5 * pow(5,2)
//           = 5 * 5 * pow(5,1)

export const recursivePower: PowerFn = (nb: number, power: number) => {

    if (power <= 0) {
        return 1;
    }
    return nb * recursivePower(nb, power - 1);
}
