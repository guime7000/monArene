
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type PopFn = <T> (list: Link<T> | null) => Link<T> | undefined
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
export const pop: PopFn = <T>(list: Link<T> | null) => {

    if (!list) {
        return undefined;
    }

    if (list?.next === null) {
        return list;
    }

    let listLength = count(list);
    let counter: number = 0;

    let beforePoppedNode = list;
    let poppedNode = list;
    while (counter <= listLength - 1 && poppedNode.next) {
        if (counter >= 1) {
            beforePoppedNode = poppedNode;
        }
        poppedNode = poppedNode.next;
        counter++;
    }

    beforePoppedNode.next = null;

    return poppedNode;

}

