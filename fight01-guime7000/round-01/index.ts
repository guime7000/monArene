type PrintNumberFn = (nbr: number) => void

export const printNumber: PrintNumberFn = (nbr: number) => {
    var stringedNbr = `${nbr}`;
    process.stdout.write(stringedNbr);

}