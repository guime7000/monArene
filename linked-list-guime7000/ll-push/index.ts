
type Link<T> = {
    data: T,
    next: Link<T> | null
}
type PushFn = <T> (list: Link<T> | null, data: T) => Link<T>
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

export const push: PushFn = <T>(list: Link<T> | null, data: T): Link<T> => {

    if (!list) {
        return { data: data, next: null };
    }

    const lastNode = getLast(list);
    let pushedNode: Link<T> = { data: data, next: null };
    lastNode!.next = pushedNode;

    return pushedNode;

}

