import React, { useState } from 'react';

import { Controls, Interface } from './components'

import './centerCalc.css'

function Calculator(props) {

    const [input, setInput] = useState('')

    return (
        <div className='app_wrapper'>
            <div className='calc_wrapper'>
                <Interface 
                input={input}
                />
                <Controls 
                input={input}
                />
            </div>
        </div>

    );
}

export default Calculator