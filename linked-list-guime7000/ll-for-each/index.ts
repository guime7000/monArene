
type Link<T> = {
    data: T,
    next: Link<T> | null
}

type CallbackFn<T> = (elem: Link<T>, index: number) => void

type ForEachFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => void

type CountFn = <T> (list: Link<T> | null) => number


// type GetAtFn = <T> (list: Link<T>, index: number) => Link<T>
// export const getAt: GetAtFn = (list, index) => {
//     let counter: number = 0;

//     let actualNode = list;
//     while (counter < index && actualNode?.next) {
//         actualNode = actualNode?.next;
//         counter++;
//     }
//     return actualNode;
// }

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

export const forEach: ForEachFn = (list, callback) => {

    if (list) {
        let listLength: number = count(list);
        let index: number = 0;
        let actualNode = list;
        while (index < listLength - 1) {
            callback(actualNode, index);
            if (actualNode.next) {
                actualNode = actualNode.next;
            }
            index++;
        }
        callback(actualNode, index);
    }
}