
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type GetAtFn = <T> (list: Link<T> | null, index: number) => Link<T> | undefined
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

export const getAt: GetAtFn = <T>(list: Link<T> | null, index: number) => {
    let counter: number = 0;

    if (!list || index >= count(list)) {
        return undefined;
    }
    let actualNode: Link<T> = list;
    while (counter < index && actualNode.next) {
        actualNode = actualNode?.next;
        counter++;
    }
    return actualNode;
}