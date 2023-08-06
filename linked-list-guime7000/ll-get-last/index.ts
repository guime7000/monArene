
type Link<T> = {
    data: T,
    next: Link<T> | null
}

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

