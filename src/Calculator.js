import React, { useEffect } from 'react'
// compos
import { Controls, Dashboard } from './components'
//hooks
import { WriteCache } from './hooks/WriteCache'
// css
import './centerCalc.css'

function Calculator(props) {

    const [input, writeChara, negate, backspace, resetCache] = WriteCache('')

    const variableManipulation = {
        writeChara,
        negate,
        backspace
    }

    useEffect(() => {
        console.log('input', input)
    }, [input])

    return (
        <div className='app_wrapper'>
            <div className='calc_wrapper'>
                <Dashboard 
                input={input}
                />
                <Controls 
                variableManipulation={variableManipulation}
                input={input}
                />
            </div>
        </div>

    );
}

export default Calculator