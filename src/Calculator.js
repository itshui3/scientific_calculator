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

    const [input, writeChara, setWriteCache, negate, backspace, resetInput] = WriteCache('')
    const [sequence, setSequence] = useState('')
    const [runningProd, setRunningProd] = useState(0)
    const [operator, setOperator] = useState('')

    const [endCalc, setEndCalc] = useState(false)

    const addToSequence = (fn) => {

        if (fn === '=') {
            endSequence()
            return
        }

        if (!input.length && !sequence.length) {
            setSequence(0 + ' ' + fn)
            setOperator(fn)
            setRunningProd(0)
            resetInput()
            return
        }

        if (input.length && !sequence.length) {
            setSequence(input + ' ' + fn)
            setOperator(fn)
            setRunningProd(input)
            resetInput()
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
            resetInput()
            return
        }

    }

    const endSequence = () => {
        console.log('seq at beginning of end Seq', sequence)
        if (!operator) {
            return
        } else {
            let finalProd = performMathmatics(
                runningProd,
                input? input : runningProd,
                operator
            )

            setRunningProd(finalProd)

            if (input) {
                setSequence((seq) => {
                    return seq + ' ' + input + ' ' + '='
                })
            } else {
                setSequence((seq) => {
                    return seq + ' ' + runningProd + ' ' + '='
                })
            }

            resetInput()
            setEndCalc(true)
        }
    }

    const resetSeq = () => {
        setSequence('')
    }

    const resetOp = () => {
        setOperator('')
    }

    const resetCalc = () => {
        console.log('reset Calc')
        resetSeq()
        resetOp()
        resetInput()
        setRunningProd('')
        setEndCalc(false)
    }

    const zeroInput = async () => {
            resetInput()
            await writeChara('0')
    }

    const divideX = () => {
        if (!input) {return}

        setWriteCache((written) => {
            return (1/input).toString()
        })
    }

    const cellMethods = {
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
    }

    const cellAssets = {
        operator,
        endCalc
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
                cellAssets={cellAssets}
                input={input}
                />
            </div>
        </div>

    );
}

export default Calculator