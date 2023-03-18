import { openSync, writeSync, closeSync, fstat } from 'fs';

type WriteFileSyncFn = (path: string, buffer: Buffer) => number

export const writeFileSync: WriteFileSyncFn = (path: string, buffer: Buffer) => {

    const writeFileFd = openSync(path, 'w');
    let nbWrittenBytes = writeSync(writeFileFd, buffer);

    closeSync(writeFileFd)
    return nbWrittenBytes;
}