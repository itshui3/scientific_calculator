import React, { useState } from 'react';

import { Controls, Interface } from './components'

function Calculator(props) {

    const [output, setOutput] = useState('')

    const writeToOutput = (char) => {
        setOutput((output) => {
            if (char !== '=') {
                return output + ' ' + char
            }

            if (char === '=') {
                // plug current output into fn that performs calculations
                return ''
            }
            
        })
    }

    return (
        <div className='calc_wrapper'>
            <Interface />
            <Controls />
        </div>
    );
}

export default Calculator