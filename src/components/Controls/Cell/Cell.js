import React, {useEffect} from 'react'

function Cell({
    symbol, 
    variableManipulation
}) {

    const {
        writeChara,
        negate,
        backspace
    } = variableManipulation

    let numVals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let negVals = ['+/-']
    let backspaceVals = ['Backspace']

    // determines background color
    let lightGrey = ['%', 'CE', 'C', 'Backspace', '1/x', 'x^2', 'sqrt(x)', '/', 'x', '-', '+']
    let white = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', '.']
    let blue = ['=']

    return (
        <div 
        className={
            `cell ${
                lightGrey.indexOf(symbol) > -1
                ?
                'cellBG_lightGrey'
                :
                white.indexOf(symbol) > -1
                ?
                'cellBG_white'
                :
                blue.indexOf(symbol) > -1
                ?
                'cellBG_blue'
                :
                ''
            }`
        }
        onClick={
            backspaceVals.indexOf(symbol) > -1
            ?
            backspace
            :
            negVals.indexOf(symbol) > -1
            ?
            negate
            :
            numVals.indexOf(symbol) > -1
            ?
            () => writeChara(symbol)
            :
            null
        }
        >
        {symbol}
        </div>
    )
}

export default Cell