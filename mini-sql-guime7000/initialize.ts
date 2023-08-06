type initializeFunc = (indexPath: string, idMaxPath: string) => [string[], number]

export const initialize: initializeFunc = (indexFilePath, idMaxFilePath) => {

    let indexList: string[] = []

    let localIndex: string = "";

    const readLine = require('readline')
    const f = require('fs')

    indexList = require('fs').readFileSync(indexFilePath, 'utf-8').split('\n').filter(Boolean);
    localIndex = require('fs').readFileSync(idMaxFilePath, 'utf-8').split('\n').filter(Boolean);

    return [indexList, +localIndex]
}