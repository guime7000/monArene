"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command_parser = exports.raiseCommandError = exports.tata = void 0;
const tata = (intata) => {
    return intata.toUpperCase();
};
exports.tata = tata;
function raiseCommandError(input) {
    process.stdout.write(`illegal instruction: ${input}\n`);
    process.stdout.write('usage: INSERT username\n');
    process.stdout.write(' '.padStart(7) + 'SELECT [username]\n');
    process.stdout.write(' '.padStart(7) + 'EXIT [code]\n');
}
exports.raiseCommandError = raiseCommandError;
const command_parser = (inString) => {
    let cmd = "";
    let param = "";
    const inStringLength = inString.length;
    let stringIndex = 0;
    let letter = inString[stringIndex];
    while (letter !== undefined) {
        if (letter === " ")
            break;
        cmd += letter;
        stringIndex++;
        letter = inString[stringIndex];
    }
    param = inString.slice(stringIndex + 1);
    switch (cmd) {
        case "INSERT": {
            if (param[0] === '"' && param[param.length - 1] === '"') {
                param = param.slice(1, param.length - 1);
            }
            break;
        }
        case "SELECT": {
            if (param.trim().length === 0)
                param = "";
            break;
        }
    }
    return [cmd, param];
};
exports.command_parser = command_parser;
