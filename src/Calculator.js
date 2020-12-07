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

    const [input, writeChara, negate, backspace, resetInput] = WriteCache('')
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

    // const zeroInput = async () => {
    // // my theory was that if I do await, it will  create a delaying effect on the logic to run
    // // this is because it turns it async. By making it async, it doesn't have to finish
    // // since it doesn't have to finish it gets pushed behind and will be performed afterwards
    // // theoretically, then. This should also be possible with setTimeout
    //     resetInput()
    //     // because writeChara relies on an input that can't be updated until writeChara is fully called, it is writing over resetInput
    //     await writeChara('0')
    // }

    const zeroInput = async () => {
            resetInput()
            await writeChara('0')
        }

    useEffect(() => {
        console.log('input')
    }, [input])

    const cellMethods = {
        writeChara,
        negate,
        backspace,
        addToSequence,
        endSequence,
        resetSeq,
        resetOp,
        resetCalc,
        zeroInput
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