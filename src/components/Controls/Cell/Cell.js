import React from 'react'
// helpers
import { evaluateSymbol } from './helpers/evaluateSymbol'
import { evaluateColor } from './helpers/evaluateColor'

function Cell({
    symbol,
    cellMethods,
    cellAssets
}) {

    return (
        <div 
        className={`cell ${evaluateColor(symbol)}`}
        onClick={() => evaluateSymbol(symbol, cellMethods, cellAssets)}
        >
        {symbol}
        </div>
    )
}

export default Cell