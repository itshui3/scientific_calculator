import React from 'react'

function Cell({
    symbol, 
    writeChara,
    negate

}) {

    let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let neg = ['+/-']

    return (
        <div 
        className='cell'
        onClick={
            symbol in nums
            ?
            () => writeChara(symbol)
            :
            symbol in neg
            ?
            negate
            :
            null
        }
        >
        {symbol}
        </div>
    )
}

export default Cell
