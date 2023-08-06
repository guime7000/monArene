
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type CountFn = <T> (list: Link<T> | null) => number

export const count: CountFn = <T>(list: Link<T> | null): number => {

    let nodeNumber: number = 0;

    if (list) {
        let actualNode: Link<T> = list;
        nodeNumber = 1;
        while (actualNode?.next !== null) {
            nodeNumber++;
            actualNode = actualNode?.next;
        }
    }

    return nodeNumber;
}

