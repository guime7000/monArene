
type Link<T> = {
    data: T,
    next: Link<T> | null
}
type ShiftFn = <T> (list: Link<T> | null) => Link<T> | undefined
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

export const shift: ShiftFn = list => {

    if (!list || list.next == null || !list.next) {
        return undefined;
    }

    let newFirstNode = list.next;
    if (list.next) {
        list.next = null;
    }

    return newFirstNode;
    // const lastNode = getLast(list);
    // let pushedNode: Link<T> = null;
    // lastNode!.next = pushedNode;

    // return pushedNode;

}

