
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type CallbackFn<T> = (elem: Link<T>) => boolean
type FindFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => Link<T> | undefined

type CountFn = <T> (list: Link<T> | null) => number

// export const count: CountFn = <T>(list: Link<T> | null): number => {

//     let nodeNumber: number = 0;

//     if (list) {
//         let actualNode: Link<T> = list;
//         nodeNumber = 1;
//         while (actualNode?.next !== null) {
//             nodeNumber++;
//             actualNode = actualNode?.next;
//         }
//     }

//     return nodeNumber;
// }

export const find: FindFn = <T>(list: Link<T> | null, callback: CallbackFn<T>): Link<T> | undefined => {

    let actualNode = list;
    while (actualNode) {
        if (callback(actualNode)) {
            return actualNode;
        }
        actualNode = actualNode.next;
    }

    return undefined;
}