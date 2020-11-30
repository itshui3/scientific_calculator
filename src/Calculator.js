import React, { useState } from 'react';

import { Controls, Interface } from './components'

function Calculator(props) {

    return (
        <div className='calc_wrapper'>
            <Interface />
            <Controls />
        </div>
    );
}

export default Calculator