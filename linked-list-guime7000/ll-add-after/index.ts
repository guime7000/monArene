
type Link<T> = {
    data: T,
    next: Link<T> | null
}
type AddAfterFn = <T> (link: Link<T> | null, data: T) => Link<T>

export const addAfter: AddAfterFn = <T>(link: Link<T> | null, data: T): Link<T> => {
    let newNode: Link<T> = { data: data, next: null }

    if ((link !== null)) {
        newNode!.next = link!.next;
        link!.next = newNode;
    }
    return newNode;
}

