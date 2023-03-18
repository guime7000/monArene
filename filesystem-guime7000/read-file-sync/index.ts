
import fs from 'fs';
type ReadFileSyncFn = (path: string) => string;

export const readFileSync: ReadFileSyncFn = (filePath: string) => {

    const bufferLength = 1024;
    let fileBuff = Buffer.alloc(bufferLength);

    let fileFd = fs.openSync(filePath, 'r');
    let result: number = fs.readSync(fileFd, fileBuff, 0, bufferLength, 0);

    let outString: string = "";

    if (result < bufferLength) {
        let swapBuff = Buffer.alloc(result);
        fileBuff.copy(swapBuff, 0, 0, result);
        outString += swapBuff.toString();
        fs.closeSync(fileFd);
    }
    else {
        let i: number = 1;
        while (result !== 0) {
            result = fs.readSync(fileFd, fileBuff, 0, bufferLength, -1);
            if (result < bufferLength) {
                let swapBuff = Buffer.alloc(result);
                fileBuff.copy(swapBuff, 0, 0, result);
                outString += swapBuff.toString();
            }
            else {
                outString += fileBuff.toString();
            }
            i++;
        }
        fs.closeSync(fileFd);
    }
    return outString;
}
