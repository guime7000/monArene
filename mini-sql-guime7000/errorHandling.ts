

export function raiseCommandError(input: string) {
    process.stdout.write(`illegal instruction: ${input}\n`)
    process.stdout.write('usage: INSERT username\n')
    process.stdout.write(' '.padStart(7) + 'SELECT [username]\n')
    process.stdout.write(' '.padStart(7) + 'EXIT [code]\n')

}