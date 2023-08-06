type Link<T> = {
    data: T,
    next: Link<T> | null
}

type MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null

type GetLastFn = <T> (list: Link<T> | null) => Link<T> | null

export const getLast: GetLastFn = list => {

    if (!list) {
        return null;
    }

    if (list?.next === null) {
        return list;
    }
    let actualNode = list;
    let nextNode = list?.next;
    while (nextNode?.next !== null) {
        actualNode = nextNode;
        if (actualNode?.next !== null) {
            nextNode = actualNode?.next;
        }
    }
    return nextNode;

}

export const merge: MergeFn = <T>(listA: Link<T> | null, listB: Link<T> | null): Link<T> | null => {
    let mergedList = listA;

    if (!listA && !listB) {
        return null;
    }
    if (listA === null && listB) {
        return listB;
    }
    if (listB === null && listA) {
        return listA;
    }
    let lastOfListA = getLast(listA);
    if (lastOfListA) {
        lastOfListA.next = listB;
    }
    return listA;
}