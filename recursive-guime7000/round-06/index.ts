import { CommonConnectionOptions } from "tls";

type Coordinate = [number, number];
type Matrix = number[][];
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number;
type RecursiveRsult = [Coordinate[], boolean];
type FindNextValidOneFn = (begin: Coordinate, end: Coordinate,
    myPathArray: Coordinate[], matrix: Matrix, visited: Coordinate[], blocked: boolean) => Coordinate[];

// Coordinate = [colonnes ; lignes]

//  AUTRORISEES: Array.length, Array.push

// matrix.length : nb de lignes
// matrix[0].length : nb de colonnes

//      [0 1 1 0 0 0]
//      [0 0 1 0 1 1]
//      [0 0 1 0 1 0]
//      [0 0 1 1 1 0]

export const shortestPath: FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => {

    let pathLength: number = 0;
    let shortestPathLength: number = 100000000000000;
    let pathFound: boolean = false;

    let visited: Matrix = [];
    let ivisited: number = 0;
    let jvisited: number = 0;
    // let initRow: number[] = [];
    let vecteur: number[] = [];

    // vecteur = []
    // while (ivisited < matrix.length) {
    //     visited[ivisited] = []
    //     ivisited++;
    // }

    // console.log("TA MERE :", visited)
    ivisited = 0;
    while (ivisited < matrix.length) {
        visited[ivisited] = []
        while (jvisited < matrix[0].length) {
            // visited[ivisited][jvisited] = 0;
            vecteur[jvisited] = 0;
            jvisited++;
        }
        // visited.push(vecteur[ivisited]);
        visited[ivisited] = vecteur;
        vecteur = []
        jvisited = 0;
        ivisited++;
    }
    // console.log("TA MEME :", visited)
    // visited[1][2] = 12;
    // console.log("TA MEME 2:", visited)


    const reachedEndPoint = (pointA: Coordinate, pointB: Coordinate) => {
        return (pointA[0] === pointB[0] && pointA[1] === pointB[1])
    }

    const validCardinalPoint = (point: Coordinate, matrix: Matrix, visited: Matrix) => {
        let colNumber: number;
        let rowNumber: number;
        [colNumber, rowNumber] = point;
        // console.log("Col:", colNumber, "Row:", rowNumber)
        if (colNumber < 0 || rowNumber < 0
            || rowNumber > matrix.length - 1
            || colNumber > matrix[0].length - 1) {
            // console.log("False 1");
            return false;
        }

        if (matrix[rowNumber][colNumber] === 0 || visited[rowNumber][colNumber] === 1) {
            // console.log("False 2");
            // console.log("Row, Col", rowNumber, colNumber)
            // console.log("Matrix:", matrix[rowNumber][colNumber])
            // console.log("Visited:", visited[rowNumber][colNumber]);
            // console.log("--------------");

            return false;
        }
        return true;
    }

    const minValue = (valueA: number, valueB: number) => {
        // console.log("left Min:", valueA, "Right min:", valueB)
        if (valueA >= valueB) {
            return valueB;
        }
        else {
            return valueA;
        }
    }

    function findNextValidOne(begin: Coordinate, end: Coordinate,
        matrix: Matrix, visited: Matrix,
        pathLength: number, shortestPathLength: number,
        pathFound: boolean): any {

        // console.log(visited)

        // const reachedEndPoint = (pointA: Coordinate, pointB: Coordinate) => {
        //     return (pointA[0] === pointB[0] && pointA[1] === pointB[1])
        // }

        console.log("Forward tracking", begin, end)

        if (reachedEndPoint(begin, end)) {
            // console.log("Path Found")
            pathFound = true;
            shortestPathLength = minValue(pathLength, shortestPathLength);
            return shortestPathLength;
        }

        // console.log("begin:", begin)
        let currentCol = begin[0];
        let currentRow = begin[1];

        let upDownCol = currentCol;
        let downRow = currentRow + 1;
        let upRow = currentRow - 1;

        let leftRightRow = currentRow;
        let leftCol = currentCol - 1;
        let rightCol = currentCol + 1;

        let upPoint: Coordinate = [upDownCol, upRow];
        let downPoint: Coordinate = [upDownCol, downRow];
        let leftPoint: Coordinate = [leftCol, leftRightRow];
        let rightPoint: Coordinate = [rightCol, leftRightRow,];
        let toto: number = 0;

        // console.log(visited);
        // console.log("-VISITED AVANT MARQUAGE-", visited[currentRow][currentCol], [currentCol, currentRow])
        visited[currentRow][currentCol] = 1;
        // console.log("-VISITED APRES MARQUAGE-", visited[currentRow][currentCol], [currentCol, currentRow])

        // console.log("updated visited at", currentRow, currentCol);
        // console.log(visited);

        // console.log("Currrent:", currentRow, currentCol)
        // console.log(visited);
        pathLength += 1;
        // console.log("PathLength1:", pathLength)

        if (validCardinalPoint(rightPoint, matrix, visited)) {
            // console.log("Je viens de la gauche")
            // console.log(visited)
            // console.log("-------------")
            // findNextValidOne(rightPoint, end, matrix, visited, pathLength, shortestPathLength, pathFound);
            shortestPathLength = findNextValidOne(rightPoint, end, matrix, visited, pathLength, shortestPathLength, pathFound);
        }

        if (validCardinalPoint(downPoint, matrix, visited)) {
            // console.log("Je viens d'en haut'")
            // console.log(visited)
            // console.log("-------------")
            shortestPathLength = findNextValidOne(downPoint, end, matrix, visited, pathLength, shortestPathLength, pathFound);
        }

        if (validCardinalPoint(leftPoint, matrix, visited)) {
            // console.log("Je viens de droite'")
            // console.log(visited)
            // console.log("-------------")
            shortestPathLength = findNextValidOne(leftPoint, end, matrix, visited, pathLength, shortestPathLength, pathFound);
        }

        if (validCardinalPoint(upPoint, matrix, visited)) {
            // console.log("Je viens d'en bas'")
            // console.log(visited)
            // console.log("-------------")
            shortestPathLength = findNextValidOne(upPoint, end, matrix, visited, pathLength, shortestPathLength, pathFound);
        }

        // console.log("###############")
        // console.log("Visited en fin", visited);
        // console.log("###############")

        visited[currentRow][currentCol] = 0;
        pathLength -= 1;
        return shortestPathLength;

        // console.log("Backtracking")

    }

    shortestPathLength = findNextValidOne(begin, end, matrix, visited, pathLength, shortestPathLength, pathFound);

    return shortestPathLength + 1;

}

// let toto: Coordinate[][] = [[]];
// let pathLoops: number = 0;
// let continueBacktracking: boolean = true;
// let allMyPaths: number[] = [];
// while (continueBacktracking) {
//     allMyPaths.push(shortestPath([1, 0], [3, 1], [[0, 1, 1, 0], [0, 1, 1, 1]]));
//     console.log(allMyPaths)
//     if (allMyPaths[allMyPaths.length - 1] === 0) {
//         continueBacktracking = false;
//     }
// }

// console.log(allMyPaths.push(shortestPath([1, 0], [3, 1], [[0, 1, 1, 0], [0, 1, 1, 1]])));
// console.log(shortestPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 1, 1, 1]]));

// [0, 1, 1, 0]
// [0, 1, 1, 1]

// console.log(allMyPaths.push(shortestPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 0, 1, 1]])));
// console.log(shortestPath([1, 0], [3, 1], [[0, 1, 1, 0], [0, 0, 1, 1]]));
// [0, 1, 1, 1]
// [0, 0, 1, 1]

// console.log(allMyPaths.push(shortestPath([1, 0], [3, 4], [[0, 1, 1, 0, 1],
// [0, 0, 1, 0, 1],
// [0, 0, 1, 1, 1],
// [0, 0, 1, 0, 1],
// [0, 0, 1, 1, 1],
// ])));
// console.log(shortestPath([1, 0], [3, 4], [
//     [0, 1, 1, 0, 1],
//     [0, 0, 1, 0, 1],
//     [0, 0, 1, 1, 1],
//     [0, 0, 1, 0, 1],
//     [0, 0, 1, 1, 1],
// ]));

// console.log(shortestPath([1, 0], [3, 4], [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
// ]));