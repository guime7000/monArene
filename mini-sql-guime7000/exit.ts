type exitFunc = (params: string) => void

export const myExit: exitFunc = (params) => {
    process.exit(+params)
}