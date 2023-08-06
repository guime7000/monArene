import fs from 'fs';

type Link<T> = {
    data: T,
    next: Link<T> | null
}

type ReverseFn = <T> (list: Link<T> | null) => Link<T> | null

export const reverse: ReverseFn = <T>(list: Link<T> | null): Link<T> | null => {

    if (!list) {
        return null;
    }

    if (list.next === null) {
        return list;
    }


    if (list.next.next === null) {
        let tmp: Link<T> | null = list!.next;
        tmp!.next = list;
        list.next = null;
        return tmp;
    }

    let head = list;

    let previousNode: Link<T> = { data: head.data, next: null };
    let currentNode: Link<T> | null = head;
    let nextNode: Link<T> | null;

    while (currentNode) {
        nextNode = currentNode.next;
        if (currentNode === list) {
            currentNode.next = null;
        }
        else {
            currentNode.next = previousNode;
        }
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode;
}

// type PrintLinkedFn = <T> (list: Link<T> | null) => void
// export const printLinked: PrintLinkedFn = <T>(list: Link<T> | null) => {

//     if (list) {
//         while (list.next) {
//             fs.writeSync(1, "" + list.data);// + " " + list.next);
//             fs.writeSync(1, " -> ");
//             list = list.next;
//         }
//         fs.writeSync(1, "" + list.data);// + " " + list.next);
//         fs.writeSync(1, " \n");
//     }
// }

// let firstNode: Link<number> = { data: 1, next: null };
// let secondNode: Link<number> = { data: 2, next: null };
// let thirdNode: Link<number> = { data: 3, next: null };
// let fourthNode: Link<number> = { data: 4, next: null };
// let fifthNode: Link<number> = { data: 5, next: null };

// firstNode!.next = secondNode;
// secondNode!.next = thirdNode;

// // thirdNode!.next = fourthNode;
// // fourthNode!.next = fifthNode;

// let currNode: Link<number> | null = firstNode;
// console.log("BEFORE");
// printLinked(firstNode);
// while (currNode) {
//     console.log(currNode);
//     currNode = currNode.next;
// }
// // while (currNode) {
// //     console.log(currNode);
// //     console.log("->");
// //     currNode = currNode.next;
// // }
// // console.log("###############");

// const output = reverse(firstNode);
// console.log("RESULT OUtput:", output)
// console.log("######## AFTER ########");
// printLinked(output);
// currNode = output;

// while (currNode) {
//     console.log(currNode);
//     currNode = currNode.next;
// }
// // console.log(firstNode)

// // Object {
// //     "data": 1, "next": Object {
// //         "data": 2, "next": Object { "data": 1, "next": null, },
// //         -   },
// // }