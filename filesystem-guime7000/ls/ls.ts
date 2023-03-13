import fs from 'fs';
import { buffer } from 'stream/consumers';
import path from 'path';


// process.stdin.fd : 0
// process.stdout.fd: 1
// process.stderr.fd: 2

// fs.readdirSync
// fs.statSync
// fs.writeSync

// process.exit, Error Code 1 : process.exit(1)
// Error "./not-a-valid-path" is not a valid directory

// Stats.isFile
// Stats.isDirectory

// Array.sort
// Array.length

// String.padEnd
// String.localeCompare

// path.join

type TotalFieldFn = (rootPath: string, array: string[], total: number) => number;
type OutputFn = (dirTotal: number, dirArray: string[], fileArray: string[]) => void;
type BuildTreeListFn = (rootPath: string, dirStructure: string[]) => [string[], string[]];

const get_total_field: TotalFieldFn = (rootPath: string, array: string[], total: number) => {
    let index: number = 0;
    while (array[index] !== undefined) {
        total += fs.statSync(path.join(rootPath, array[index])).blocks;
        index++;
    }
    return total;
}

const ls_output: OutputFn = (dirTotal: number, dirArray: string[], fileArray: string[]) => {

    const paddingLength: number = 11;
    const dirPadding: string = "Directory".padEnd(paddingLength, " ");
    const filePadding: string = "File".padEnd(paddingLength, " ");

    let outString: string = "total " + dirTotal + "\n";
    fs.writeSync(1, outString);

    let index = 0;
    if (dirArray.length > 0) {
        while (dirList[index] !== undefined) {
            outString = dirPadding + dirList[index] + "\n";
            fs.writeSync(1, outString);
            index++;
        }
    }

    index = 0;
    while (filesList[index] !== undefined) {
        outString = filePadding + filesList[index] + "\n";
        fs.writeSync(1, outString);
        index++;
    }
}

const build_tree_list: BuildTreeListFn = (rootPath: string, dirStructure: string[]) => {

    let i: number = 0;
    let dirIndex: number = 0;
    let fileIndex: number = 0;

    let dirList: string[] = [];
    let filesList: string[] = [];

    while (dirStructArray[i] !== undefined) {
        if (fs.statSync(path.join(rootPath, dirStructure[i])).isDirectory()) {
            dirList[dirIndex] = dirStructArray[i];
            dirIndex++;
        }
        else if (fs.statSync(path.join(rootPath, dirStructure[i])).isFile()) {
            filesList[fileIndex] = dirStructArray[i];
            fileIndex++;
        }
        i++;
    }

    dirList.sort((a, b) => a.localeCompare(b));
    filesList.sort((a, b) => a.localeCompare(b));

    return [dirList, filesList];
}


const rootPath: string = process.argv[2];
var lsTotal: number = 0;

try {
    const dirStats = fs.statSync(rootPath);
} catch (err) {
    let errorString: string = 'Error \"' + rootPath + '\" is not a valid directory';
    fs.writeSync(2, errorString);
    fs.writeSync(2, "\n");
    process.exit(1);
}

const dirStructArray: string[] = fs.readdirSync(rootPath);

let dirList: string[] = [];
let filesList: string[] = [];

[dirList, filesList] = build_tree_list(rootPath, dirStructArray);

if (dirList.length > 0) {

    lsTotal = get_total_field(rootPath, dirList, lsTotal);
    lsTotal = lsTotal - fs.statSync(path.join(rootPath, dirList[0])).blocks
}

lsTotal = get_total_field(rootPath, filesList, lsTotal);

ls_output(lsTotal, dirList, filesList)
