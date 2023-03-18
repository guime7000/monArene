import fs from 'fs';
import path from 'path';

const sourceArg: string = process.argv[2];
const destArg: string = process.argv[3];


try {
    if (process.argv.length !== 4) {
        console.log("Wrong Args NumberError");
        throw new Error('Wrong Args Number');
    }
}
catch (err) {
    process.exit(1);
}

try {
    let sourceStats = fs.statSync(sourceArg);
    if (sourceStats.isDirectory()) {
        console.log('Error: Source Path is a directory')
        throw new Error('Error: Source Path is a directory');
    }
} catch (err) {
    console.log("Error: Source Path not Valid");
    process.exit(1);
}

if (sourceArg === destArg) {
    console.log("Same source and Dest");
    process.exit(0);
}

const sourceFileName: string = path.basename(sourceArg);

let sourceFilePath: string = sourceArg;
let destFilePath: string = destArg;
let destFileFd: number = 0;

const bufferLength = 1_048_576;

let destStats: fs.Stats | undefined = fs.statSync(destArg, { throwIfNoEntry: false });

if (destStats === undefined) {
    console.log("File doesn't exist ! Creating buffer")
    let destBuff = Buffer.alloc(bufferLength);
    try {
        console.log("DestFilePath:", destFilePath);
        destFileFd = fs.openSync(destFilePath, 'w');
    }
    catch (err) {
        console.log("Bad Destination Path");
        process.exit(1);
    }
}
else {
    console.log("########################");
    console.log("Validity Checks passed !");
    console.log("########################");

    if (destStats.isDirectory()) {
        destFilePath = path.join(destArg, sourceFileName);
        destFileFd = fs.openSync(destFilePath, 'w');
    }
    destFileFd = fs.openSync(destFilePath, 'w');
    let destBuff = Buffer.alloc(bufferLength);
}

let destResult: number = 0;
let sourceBuff = Buffer.alloc(bufferLength);
let sourcefileFd = fs.openSync(sourceFilePath, 'r');
let sourceResult: number = fs.readSync(sourcefileFd, sourceBuff, 0, bufferLength, 0);

if (sourceResult < bufferLength) {
    let swapBuff = Buffer.alloc(sourceResult);
    sourceBuff.copy(swapBuff, 0, 0, sourceResult);
    destResult = fs.writeSync(destFileFd, swapBuff, 0, sourceResult, 0);
}
else {
    let i: number = 0;
    while (sourceResult !== 0) {
        sourceResult = fs.readSync(sourcefileFd, sourceBuff, 0, bufferLength, -1);
        if (sourceResult < bufferLength) {
            let swapBuff = Buffer.alloc(sourceResult);
            sourceBuff.copy(swapBuff, 0, 0, sourceResult);
            destResult = fs.writeSync(destFileFd, sourceBuff, 0, sourceResult, i * bufferLength);
        }
        else {
            destResult = fs.writeSync(destFileFd, sourceBuff, 0, bufferLength, i * bufferLength);
        }
        i++;
    }
}

console.log("Source:", sourceArg, "SrcPath:", sourceFilePath);
console.log("Dest:", destArg, destFilePath);
