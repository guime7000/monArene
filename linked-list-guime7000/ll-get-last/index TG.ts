
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type GetLastFn = <T> (list: Link<T> | null) => Link<T> | null

export const getLast: GetLastFn = <T>(list: Link<T> | null): Link<T> | null => {

    if (!list) {
        return null;
    }

    if (list?.next === null) {
        return list;
    }
    let actualNode: Link<T> = list;
    let nextNode: Link<T> = list?.next;
    // else if (list?.next !== null) {
    while (nextNode?.next !== null) {
        actualNode = nextNode;
        if (actualNode?.next !== null) {
            nextNode = actualNode?.next;
            // }
        }
    }
    return nextNode;

}

