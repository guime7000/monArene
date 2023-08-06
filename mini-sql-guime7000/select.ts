type selectFunc = (params: string, indexList: string[], idMax: number) => void

type listEntriesIdFunc = (indexPath: string) => string[]

export const listEntriesId: listEntriesIdFunc = (filePath) => {

    let entriesIdList: string[] = []

    const readLine = require('readline')
    const f = require('fs')

    entriesIdList = require('fs').readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    return entriesIdList
}

export const select: selectFunc = (params, indexList, idMax) => {
    if (params.length === 0) {
        if (idMax === 0) {
            console.log("found 0 entries:")
        }
        else {
            let entryIndex: number = 0
            console.log(`found ${idMax} entries:`)

            for (entryIndex; entryIndex < indexList.length; entryIndex++) {
                let username: string = indexList[entryIndex]
                let filePath: string = "./Datas/" + username + ".minisql"

                let entriesIdList = listEntriesId(filePath)

                let index: number = 0
                for (index; index < entriesIdList.length; index++) {
                    console.log(`-> id = ${entriesIdList[index]}, username=${username}`)
                }
            }
        }
    }
    else {
        let filePath: string = "./Datas/" + params + ".minisql"
        let entriesIdList = listEntriesId(filePath)

        let index: number = 0
        console.log(`found ${entriesIdList.length} entries:`)
        while (entriesIdList[index] !== undefined) {
            console.log(`-> id = ${entriesIdList[index]}, username=${params}`)
            index++
        }
    }

}