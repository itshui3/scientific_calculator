import React from 'react'

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

    return (
        <div 
        className='cell'
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