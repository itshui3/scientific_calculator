import React, { useState, useEffect } from 'react';
// compos
import { Controls, Interface } from './components'
//hooks
import { WriteCache } from '../../hooks/WriteCache'
// css
import './centerCalc.css'

function Calculator(props) {

    const [input, writeChara, negate, backspace, reset] = WriteCache('')

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
                <Interface 
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