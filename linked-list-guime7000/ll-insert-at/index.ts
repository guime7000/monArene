
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type InsertAtFn = <T> (list: Link<T> | null, index: number, data: T) => Link<T> | undefined
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

export const insertAt: InsertAtFn = <T>(list: Link<T> | null, index: number, data: T): Link<T> | undefined => {

    if (!list && index === 0) {
        return { data: data, next: null };
    }

    if (index >= count(list) || index < 0) {
        return undefined;
    }


    let insertedNode = { data: data, next: list };

    if (list) {

        if (index === 0) {
            return insertedNode;
        }
        let counter: number = 0;
        let actualNode = list;
        while (counter !== index - 1 && actualNode?.next) {
            actualNode = actualNode?.next;
            counter++;
        }

        // if (actualNode.next !== null) {
        insertedNode.next = actualNode?.next;
        actualNode.next = insertedNode;
        // }
    }
    return insertedNode;
}