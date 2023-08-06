
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type CallbackFn<T, R> = (elem: Link<T>, index: number) => R
type MapFn = <T, R> (list: Link<T> | null, cb: CallbackFn<T, R>) => Array<R>

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

export const map: MapFn = <T, R>(list: Link<T> | null, callback: CallbackFn<T, R>): Array<R> => {

    let mappedArray: R[] = [];

    if (list) {
        let listLength: number = count(list);
        let index: number = 0;
        let actualNode = list;
        while (index < listLength - 1) {
            mappedArray[index] = callback(actualNode, index);
            if (actualNode.next) {
                actualNode = actualNode.next;
            }
            index++;
        }
        mappedArray[index] = callback(actualNode, index);
    }
    else {

    }
    return mappedArray;
}