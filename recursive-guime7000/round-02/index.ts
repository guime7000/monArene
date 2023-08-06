type PowerFn = (nb: number, power: number) => number;

export const iterativePower: PowerFn = (nb: number, power: number) => {
    if (nb === 0 && power > 0) {
        return 0;
    }

    let powered: number = 1;
    let i: number = 1;
    while (i <= power) {
        powered = powered * nb;
        i++;
    }
    return powered;
}