type Corridor = number[];

type ExitTheCorridorFn = (corridor: Corridor) => number;
type CorridoValueFn = (corridor: Corridor, index: number[]) => number;

export const exitTheCorridor: ExitTheCorridorFn = (corridor: Corridor) => {

    let nbSlots: number = 0;
    let index: number[] = [0];
    let value: number = corridor[index[0]];

    if (corridor.length === 0) {
        return 0;
    }
    if (corridor.length === 1) {
        return 1;
    }
    const corridorValue: CorridoValueFn = (corridor: Corridor, index: number[]) => {

        while (corridor[index[0]] !== undefined) {
            value = corridor[index[0]];
            console.log("Idx:", index[0], "Val:", value);
            if (value === 0) {
                nbSlots += 1;
                index[0]++;
            }
            else {
                index[0] = value;
                corridorValue(corridor, index);
            }
        }

        return nbSlots;
    }

    return corridorValue(corridor, index)

}
