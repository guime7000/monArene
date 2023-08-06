import { command_parser } from "./command_parser";
import { raiseCommandError } from "./errorHandling";
import { insert } from "./insert";
import { select } from "./select";
import { myExit } from "./exit";
import { initialize } from "./initialize"

const indexFilePath: string = "./Datas/index.minisql"
const idMaxFilePath: string = "./Datas/idMax.minisql"

let commandList: string[] = ['INSERT', 'SELECT', 'EXIT']

var indexList: string[] = []
var idMax: number = 0;

[indexList, idMax] = initialize(indexFilePath, idMaxFilePath)


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'miniSQL$ '
});

rl.on('SIGINT', () => {
    rl.write('Aurélien, please use EXIT [code] to gracefully shutdown this beautiful miniSQL app\n')
})

rl.prompt()
rl.on('line', (input: string) => {
    let command: string = command_parser(input)[0]
    let params: string = command_parser(input)[1]

    if (!commandList.includes(command)) {
        if (input !== '') {
            raiseCommandError(input)
        }
        rl.prompt()
    }
    else {
        switch (command) {
            case 'INSERT': {
                if (params === "") {
                    raiseCommandError(input)
                }
                else {
                    [indexList, idMax] = insert(params, indexList, +idMax);
                }
                rl.prompt()
                break
            }
            case 'SELECT': {
                if (!indexList.includes(params) && params !== "") {
                    console.log("found 0 entries:")
                }
                else {
                    select(params, indexList, idMax)
                }
                rl.prompt()
                break
            }
            case 'EXIT': {
                if (isNaN(+params) === true) {
                    raiseCommandError(input)
                    rl.prompt()
                }
                else {
                    myExit(params)
                }
            }
        }
    }
});


