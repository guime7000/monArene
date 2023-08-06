"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raiseCommandError = void 0;
function raiseCommandError(input) {
    process.stdout.write(`illegal instruction: ${input}\n`);
    process.stdout.write('usage: INSERT username\n');
    process.stdout.write(' '.padStart(7) + 'SELECT [username]\n');
    process.stdout.write(' '.padStart(7) + 'EXIT [code]\n');
}
exports.raiseCommandError = raiseCommandError;
