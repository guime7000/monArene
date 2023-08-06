"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_parser_1 = require("./command_parser");
const errorHandling_1 = require("./errorHandling");
const insert_1 = require("./insert");
const select_1 = require("./select");
const exit_1 = require("./exit");
const initialize_1 = require("./initialize");
const indexFilePath = "./Datas/index.minisql";
const idMaxFilePath = "./Datas/idMax.minisql";
let commandList = ['INSERT', 'SELECT', 'EXIT'];
var indexList = [];
var idMax = 0;
[indexList, idMax] = (0, initialize_1.initialize)(indexFilePath, idMaxFilePath);
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'miniSQL$ '
});
rl.on('SIGINT', () => {
    rl.write('Aurélien, please use EXIT [code] to gracefully shutdown this beautiful miniSQL app\n');
});
rl.prompt();
rl.on('line', (input) => {
    let command = (0, command_parser_1.command_parser)(input)[0];
    let params = (0, command_parser_1.command_parser)(input)[1];
    if (!commandList.includes(command)) {
        if (input !== '') {
            (0, errorHandling_1.raiseCommandError)(input);
        }
        rl.prompt();
    }
    else {
        switch (command) {
            case 'INSERT': {
                if (params === "") {
                    (0, errorHandling_1.raiseCommandError)(input);
                }
                else {
                    [indexList, idMax] = (0, insert_1.insert)(params, indexList, +idMax);
                }
                rl.prompt();
                break;
            }
            case 'SELECT': {
                if (!indexList.includes(params) && params !== "") {
                    console.log("found 0 entries:");
                }
                else {
                    (0, select_1.select)(params, indexList, idMax);
                }
                rl.prompt();
                break;
            }
            case 'EXIT': {
                if (isNaN(+params) === true) {
                    (0, errorHandling_1.raiseCommandError)(input);
                    rl.prompt();
                }
                else {
                    (0, exit_1.myExit)(params);
                }
            }
        }
    }
});
