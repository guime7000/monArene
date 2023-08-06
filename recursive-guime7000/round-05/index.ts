type Coordinate = [number, number];
type Matrix = number[][];
type FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => number;

// Coordinate = [colonnes ; lignes]

//  AUTRORISEES: Array.length, Array.push

// matrix.length : nb de lignes
// matrix[0].length : nb de colonnes

//      [0 1 1 0 0 0]
//      [0 0 1 0 1 1]
//      [0 0 1 0 1 0]
//      [0 0 1 1 1 0]

export const findPath: FindPathFn = (begin: Coordinate, end: Coordinate, matrix: Matrix) => {

    const matrixColsNumber: number = matrix[0].length;
    const matrixRowsNumber: number = matrix.length;

    let myPathArray: Coordinate[] = [begin];
    let visited: Coordinate[] = [begin];

    const isSamePoint = (pointA: Coordinate, pointB: Coordinate) => {
        return (pointA[0] === pointB[0] && pointA[1] === pointB[1])
    }

    const pointAlreadyVisited = (pointA: Coordinate, pointArray: Coordinate[]) => {
        let x: number;
        let y: number;
        let visitedX: number;
        let visitedY: number;
        let i: number = 0;

        [x, y] = pointA;
        while (i < pointArray.length) {
            [visitedX, visitedY] = pointArray[i];
            if (x === visitedX && y === visitedY) {
                return true;
            }
            i++;
        }
        return false;
    }

    function findNextValidOne(begin: Coordinate, end: Coordinate,
        myPathArray: Coordinate[], matrix: Matrix, visited: Coordinate[]) {

        if (isSamePoint(begin, end)) {
            return myPathArray;
        }

        let currentCol = begin[0];
        let currentRow = begin[1];

        let upDownCol = currentCol;
        let downRow = currentRow + 1;
        let upRow = currentRow - 1;

        let leftRightRow = currentRow;
        let leftCol = currentCol - 1;
        let rightCol = currentCol + 1;

        let testedPointValue: number = 0;

        let upPoint: Coordinate = [upDownCol, upRow];
        let downPoint: Coordinate = [upDownCol, downRow];
        let leftPoint: Coordinate = [leftCol, leftRightRow];
        let rightPoint: Coordinate = [rightCol, leftRightRow,];


        // Up point test value
        if (upRow >= 0) {

            testedPointValue = matrix[upRow][upDownCol];
            if ((testedPointValue)) {

                if (pointAlreadyVisited(upPoint, visited) === false) {
                    begin = upPoint;
                }
            }
        }

        // Bottom point test value
        if ((downRow < matrixRowsNumber)) {

            testedPointValue = matrix[downRow][upDownCol];
            if ((testedPointValue)) {

                if (pointAlreadyVisited(downPoint, visited) === false) {
                    begin = downPoint;
                }
            }
        }

        // left point test value
        if ((leftRightRow < matrixRowsNumber)) {

            testedPointValue = matrix[leftRightRow][leftCol];
            if ((testedPointValue)) {
                if (pointAlreadyVisited(leftPoint, visited) === false) {
                    begin = leftPoint;
                }
            }
        }

        // right point test value
        if ((leftRightRow < matrixRowsNumber)) {

            testedPointValue = matrix[leftRightRow][rightCol];
            if ((testedPointValue)) {

                if (pointAlreadyVisited(rightPoint, visited) === false) {
                    begin = rightPoint;
                }
            }

        };

        visited.push(begin);
        myPathArray.push(begin);

        findNextValidOne(begin, end, myPathArray, matrix, visited);

    }


    findNextValidOne(begin, end, myPathArray, matrix, visited);
    console.log(myPathArray)
    return myPathArray.length;
}



findPath([1, 0], [3, 1], [[0, 1, 1, 0], [0, 1, 1, 1]]);


// [0, 1, 1, 0] 
// [0, 1, 1, 1]

// findPath([1, 0], [2, 1], [[0, 1, 1, 0], [0, 0, 1, 1]]);
// [0, 1, 1, 0] 
// [0, 0, 1, 1]


