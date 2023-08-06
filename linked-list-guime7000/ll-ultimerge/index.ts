import fs from 'fs';

type Link<T> = {
    data: T,
    next: Link<T> | null
}

type UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null

export const ultimerge: UltimergeFn = <T>(listA: Link<T> | null, listB: Link<T> | null) => {

    let outList: Link<T>;

    if (!listA && !listB) {
        return null;
    }
    if (listB === null) {
        return listA;
    }
    if (listA === null) {
        return listB;
    }

    if (listA.next === null && listB.next === null) {
        listA.next = listB;
        return listA;
    }

    let head = listA;

    let currentA: Link<T> = listA;
    let oldA: Link<T> = { data: head.data, next: null };

    let currentB: Link<T> = listB;
    let oldB: Link<T> = { data: listB.data, next: null };;

    while (currentA && currentB) {
        if (currentA.next) {
            oldA = currentA.next;
        }
        if (currentB.next) {
            oldB = currentB.next;
        }

        if (currentA.next === null && currentB.next !== null) {
            currentA.next = currentB;
            currentB.next = oldB;
            return head;
        }
        else if (currentB.next === null && currentA.next !== null) {
            currentA.next = currentB;
            currentB.next = oldA;
            return head;
        }
        else if (currentA.next === null && currentB.next === null) {
            currentA.next = currentB;
            currentB.next = null;
            return head;
        }
        else {
            currentA.next = currentB;
            currentB.next = oldA;
            currentA = oldA;
            currentB = oldB;
        }
    }


    return head;
}
