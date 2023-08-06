"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = void 0;
const indexFilePath = "./Datas/index.minisql";
const idMaxFilePath = "./Datas/idMax.minisql";
const f = require('fs');
const insert = (params, indexList, localIndex) => {
    if (!indexList.includes(params)) {
        // Update local index list
        indexList.push(params);
        localIndex++;
        // Update index File
        try {
            f.writeFileSync(indexFilePath, params + "\n", { flag: 'a' });
        }
        catch (err) {
            console.error(err);
        }
        // Update max Id value File
        try {
            f.writeFileSync(idMaxFilePath, "" + localIndex, { flag: 'w' });
        }
        catch (err) {
            console.error(err);
        }
        // Creates new file for new params username
        try {
            let newFilePath = `./Datas/${params}.minisql`;
            f.writeFileSync(newFilePath, "" + "" + localIndex + "\n", { flag: 'w' });
        }
        catch (err) {
            console.error(err);
        }
        console.log(`added: id= ${localIndex}, username=${params}`);
    }
    else {
        localIndex++;
        // Update max Id value File
        try {
            f.writeFileSync(idMaxFilePath, "" + localIndex, { flag: 'w' });
        }
        catch (err) {
            console.error(err);
        }
        // Creates new file for new params username
        try {
            let newFilePath = `./Datas/${params}.minisql`;
            f.writeFileSync(newFilePath, "" + "" + localIndex + "\n", { flag: 'a' });
        }
        catch (err) {
            console.error(err);
        }
        console.log(`added: id= ${localIndex}, username=${params}`);
    }
    return [indexList, localIndex];
};
exports.insert = insert;
