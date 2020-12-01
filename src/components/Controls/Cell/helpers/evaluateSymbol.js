let numVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let negVals = ['+/-']
let backspaceVals = ['Backspace']

// operations
let operations = ['+', '-', '*', '/']

const evaluateSymbol = (sym, methods) => {

    const {
        writeChara,
        negate,
        backspace,
        addToSequence
    } = methods

    if (operations.indexOf(sym) > -1) {
        addToSequence(sym)
        return
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
        writeChara(sym)
        return
    }

}

export { evaluateSymbol }