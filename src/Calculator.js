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

        // if (endCalc) {
        //     resetCalc()
        //     return
        // }

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
        if (!operator) {
            return
        } else {
            let finalProd = performMathmatics(
                runningProd,
                input? input : runningProd,
                operator
            )

            setRunningProd(finalProd)
            setSequence(sequence + ' ' + operator + ' ' + input? input : runningProd + ' ' + '=')
            console.log('init case seq', sequence)
            console.log('init case op', operator)
            resetInput()
            setEndCalc(true)
        }
    }

    // const endSequence = () => {
    //     // dependencies: 
    //     // input
    //     // sequence
    //     // operator(this would be the prev one)
    //     // runningProd

    //     // case: there's an input but no pre-existing calcs
    //     // it should show '=' in sequence, but be replaceable with other ops
    //     // and not calculate anything, since without a prev op we can't automate 
    //     // assignment operator
    //     if (!operator) {
    //         console.log('in endSequence')
    //         console.log('triggered by: input | !operator')
    //         setOperator('=')

    //         setSequence(sequence.length? sequence: input + ' ' + '=')
    //         if (input) {
    //             setRunningProd(input)
    //         }
    //         resetInput()
    //     } else {
    //         // check for pre-existing equality calcs
    //         if (operator.length > 1) {
    //             let cachedInput = operator[2];
    //             let cachedOp = operator[0];

    //             // perform the calculations
    //             let nextProd = performMathmatics(input? input: runningProd, cachedInput, cachedOp)

    //             // state setters
    //             setRunningProd(nextProd)
    //             setOperator(cachedOp + '=' + cachedInput)
    //             setSequence(runningProd + ' ' + cachedOp + ' ' + cachedInput + ' ' + '=')
    //             resetInput()
    //         } else {
    //             let nextProd = performMathmatics(runningProd, input? input: runningProd, operator)

    //             setRunningProd(nextProd)
    //             setOperator(operator + '=' + input? input: runningProd)
    //             setSequence(sequence + ' ' + input? input: runningProd + ' ' + '=')
    //             resetInput()
    //         }

    //         // if input, operate prevProd against input
    //     }
    //     // calculate prev op against input
    //     // let nextProd = performMathmatics(runningProd, input, operator)


    // }

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
        resetCalc
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