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
    const [operator, setOperator] = useState('')

    const addToSequence = (fn) => {

        if (fn === 'x') {
            console.log('in addToSeq, printing called op', fn)
        }

        if (!input.length && !sequence.length) {
            setSequence(0 + ' ' + fn)
            setOperator(fn)
            setRunningProd(0)
            resetCache()
            return
        }

        if (input.length && !sequence.length) {
            setSequence(input + ' ' + fn)
            setOperator(fn)
            setRunningProd(input)
            resetCache()
            return
        }

        if (!input.length && sequence.length) {
            setSequence((seq) => {
                return seq.slice(0, seq.length-1) + fn
            })
            setOperator(fn)
            return
        }

        if (input.length && sequence.length) {
            let nextProd = performMathmatics(runningProd, input, operator)
            setSequence(sequence + ' ' + input + ' ' + fn)
            setOperator(fn)
            setRunningProd(nextProd)
            resetCache()
            return
        }

    }

    useEffect(() => {
        console.log('input')
    }, [input])

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
                runningProd={runningProd.toString()}
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