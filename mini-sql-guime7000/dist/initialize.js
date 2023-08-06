"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const initialize = (indexFilePath, idMaxFilePath) => {
    let indexList = [];
    let localIndex = "";
    const readLine = require('readline');
    const f = require('fs');
    indexList = require('fs').readFileSync(indexFilePath, 'utf-8').split('\n').filter(Boolean);
    localIndex = require('fs').readFileSync(idMaxFilePath, 'utf-8').split('\n').filter(Boolean);
    return [indexList, +localIndex];
};
exports.initialize = initialize;
