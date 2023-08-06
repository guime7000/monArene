type Link<T> = {
    data: T,
    next: Link<T> | null
}

type CreateLinkFn = <T>(data: T) => Link<T>

export const createLink: CreateLinkFn = <T>(data: T) => {

    let newNode: Link<T> = { data: data, next: null };

    return newNode;
}