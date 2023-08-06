"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.listEntriesId = void 0;
const listEntriesId = (filePath) => {
    let entriesIdList = [];
    const readLine = require('readline');
    const f = require('fs');
    entriesIdList = require('fs').readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);
    return entriesIdList;
};
exports.listEntriesId = listEntriesId;
const select = (params, indexList, idMax) => {
    if (params.length === 0) {
        if (idMax === 0) {
            console.log("found 0 entries:");
        }
        else {
            let entryIndex = 0;
            console.log(`found ${idMax} entries:`);
            for (entryIndex; entryIndex < indexList.length; entryIndex++) {
                let username = indexList[entryIndex];
                let filePath = "./Datas/" + username + ".minisql";
                let entriesIdList = (0, exports.listEntriesId)(filePath);
                let index = 0;
                for (index; index < entriesIdList.length; index++) {
                    console.log(`-> id = ${entriesIdList[index]}, username=${username}`);
                }
            }
        }
    }
    else {
        let filePath = "./Datas/" + params + ".minisql";
        let entriesIdList = (0, exports.listEntriesId)(filePath);
        let index = 0;
        console.log(`found ${entriesIdList.length} entries:`);
        while (entriesIdList[index] !== undefined) {
            console.log(`-> id = ${entriesIdList[index]}, username=${params}`);
            index++;
        }
    }
};
exports.select = select;
