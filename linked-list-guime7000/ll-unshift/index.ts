type Link<T> = {
    data: T,
    next: Link<T> | null
}

type UnshiftFn = <T> (begin: Link<T> | null, data: T) => Link<T>

export const unshift: UnshiftFn = <T>(begin: Link<T> | null, data: T): Link<T> => {
    let newNode: Link<T> = { data: data, next: begin }

    return newNode;
}

