type Runway = [number, number][];
type AvoidTheWarriorsFn = (runway: Runway) => number;

export const avoidTheWarriors: AvoidTheWarriorsFn = (runway) => {

    if (runway.length < 2) return 0;

    const stepSide = (runway: Runway, pos: number, iterNumber: number) => {
        // Pos: 0 == left
        //      1 == right

        if (iterNumber === runway.length - 1) {
            if (pos === 0) return 0;
            else {
                sideways += 1;
                return sideways;
            }
        }

        let nextStep = runway[(runway.length - 1) - (iterNumber + 1)]
        if (pos === 0 && nextStep[0] === 1) {
            sideways += 1
            stepSide(runway, 1, iterNumber + 1)
        }
        else if (pos === 1 && nextStep[1] === 1) {
            sideways += 1
            stepSide(runway, 0, iterNumber + 1)
        }
        else {
            stepSide(runway, pos, iterNumber + 1)
        }
        return sideways
    }

    let sideways: number = 0;

    return stepSide(runway, 0, 0);
}