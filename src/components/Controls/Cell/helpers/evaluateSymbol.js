let numVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let negVals = ['+/-']
let backspaceVals = ['Backspace']

// operations
let operations = ['+', '-', 'x', '/']
let evaluate = ['=']

// functions
let clearInput = ['CE']
let clear = ['C']
let divideByX = ['1/x']

const evaluateSymbol = (sym, methods, assets) => {

    const {
        writeChara,
        negate,
        backspace,
        addToSequence,
        endSequence,
        resetSeq,
        resetOp,
        resetCalc,
        zeroInput,
        divideX
    } = methods

    const {
        operator,
        endCalc
    } = assets

    if (endCalc) {
        resetCalc()
        return
    }

    if (divideByX.indexOf(sym) > -1) {
        divideX()
        return
    }

    if (clearInput.indexOf(sym) > -1) {
        zeroInput()
        return
    }

    if (clear.indexOf(sym) > -1) {
        resetCalc()
        return
    }

    if (operations.indexOf(sym) > -1) {
        addToSequence(sym)
        return
    }

    if (evaluate.indexOf(sym) > -1) {
        endSequence()
    }

    if (backspaceVals.indexOf(sym) > -1) {
        backspace()
        return
    }

    if (negVals.indexOf(sym) > -1) {
        negate()
        return
    }

    if (numVals.indexOf(sym) > -1) {

        if (operator.length > 1) {
            // ie. if equality op and user inputs a num
            // the sequence and Op must both reset
            resetOp()
            resetSeq()
        }

        writeChara(sym)
        return
    }

}

export { evaluateSymbol }