import React, { useState, useEffect } from 'react'
// compos
import { Controls, Dashboard } from './components'
//hooks
import { WriteCache } from './hooks/WriteCache'
// helpers
import { performMathmatics } from './helpers/performMathmatics'
// css
import './centerCalc.css'
import './shadowCalc.css'
import './colorBG.css'

function Calculator(props) {

    const [input, writeChara, negate, backspace, resetCache] = WriteCache('')
    const [sequence, setSequence] = useState('')
    const [runningProd, setRunningProd] = useState(0)

    const addToSequence = (fn) => {

        if (!sequence.length) {

            if (input.length) {
                setSequence(input + ' ' + fn)
                setRunningProd(parseFloat(input))
                resetCache()
                return
            } else {
                setSequence('0' + ' ' + fn)
                setRunningProd(0)
                resetCache()
                return
            }

        }

        setSequence(sequence + ' ' + input + ' ' + fn)
        setRunningProd( performMathmatics(runningProd, input, fn) )
        resetCache()

    }

    const cellMethods = {
        writeChara,
        negate,
        backspace,
        addToSequence
    }

    return (
        <div className='app_wrapper'>
            <div className='calc_wrapper'>
                <Dashboard 
                input={input}
                sequence={sequence}
                runningProd={runningProd}
                />
                <Controls 
                cellMethods={cellMethods}
                input={input}
                />
            </div>
        </div>

    );
}

export default Calculator