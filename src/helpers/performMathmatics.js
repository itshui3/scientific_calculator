const performMathmatics = (running, input, fn) => {
    console.log('in performMathmatics: ')
    console.log('running: ', running)
    console.log('input: ', input)
    console.log('fn: ', fn)

    let runningNum = parseFloat(running)
    let inputNum = parseFloat(input)

    if (isNaN(runningNum) || isNaN(inputNum)) {
        throw new Error('one of the inputs cannot convert to float, so we cannot perform your mathmatics')
    }

    if (fn === '+') {
        console.log(runningNum + inputNum)
        return runningNum + inputNum
    }

    if (fn === '-') {
        console.log(runningNum - inputNum)
        return runningNum - inputNum
    }

    if (fn === 'x') {
        console.log(runningNum * inputNum)
        return runningNum * inputNum
    }

    if (fn === '/') {
        console.log(runningNum / inputNum)
        return runningNum / inputNum
    }
}

export { performMathmatics }