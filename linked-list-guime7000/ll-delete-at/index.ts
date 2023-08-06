
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type DeleteAtFn = <T> (list: Link<T> | null, index: number) => Link<T> | undefined
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

export const deleteAt: DeleteAtFn = <T>(list: Link<T> | null, index: number) => {

    if (!list || index >= count(list) || index < 0) {
        return undefined;
    }

    if (list?.next === null || index === 0) {
        return list;
    }

    let counter: number = 0;

    let nodeBeforeDeletion: Link<T> = list;
    let deletedNode: Link<T> = list;
    let nodeAfterDeletion: Link<T> = list.next;

    while (counter < index && deletedNode.next) {
        if (counter >= 1) {
            nodeBeforeDeletion = deletedNode;
        }
        deletedNode = deletedNode?.next;
        if (deletedNode.next) {
            nodeAfterDeletion = deletedNode.next;
        }
        counter++;
    }

    nodeBeforeDeletion!.next = nodeAfterDeletion;
    return deletedNode;
}