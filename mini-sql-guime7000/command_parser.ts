type tataFunc = (inString: string) => string;
type commandParserFunc = (inString: string) => [string, string];


export const tata: tataFunc = (intata) => {
    return intata.toUpperCase()
}

export function raiseCommandError(input: string) {
    process.stdout.write(`illegal instruction: ${input}\n`)
    process.stdout.write('usage: INSERT username\n')
    process.stdout.write(' '.padStart(7) + 'SELECT [username]\n')
    process.stdout.write(' '.padStart(7) + 'EXIT [code]\n')
}

export const command_parser: commandParserFunc = (inString: string) => {

    let cmd: string = ""
    let param: string = ""

    const inStringLength = inString.length

    let stringIndex: number = 0;
    let letter: string = inString[stringIndex]
    while (letter !== undefined) {
        if (letter === " ") break
        cmd += letter
        stringIndex++
        letter = inString[stringIndex]
    }

    param = inString.slice(stringIndex + 1)

    switch (cmd) {

        case "INSERT": {
            if (param[0] === '"' && param[param.length - 1] === '"') {
                param = param.slice(1, param.length - 1)
            }
            break
        }

        case "SELECT": {
            if (param.trim().length === 0) param = ""
            break
        }
    }

    return [cmd, param]

}