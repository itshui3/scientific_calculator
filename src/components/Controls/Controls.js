import React, {useState, useEffect} from 'react';

//comps
import Row from './Row/Row'

//assets
import { buttonsConstruct } from './assets/buttonsConstruct'

//hooks
import { WriteCache } from './hooks/WriteCache'

//styles
import './alignButtons.css'

function Controls(props) {

    const [writeCache, writeChara, negate, backspace, reset] = WriteCache('')

    useEffect(() => {

        console.log('writeCache', writeCache)

    }, [writeCache])

    const variableManipulation = {
        writeChara,
        negate,
        backspace
    }

    return (
        <div className='controls_wrapper'>
            {
                buttonsConstruct.map((rowConstruct, rowID) => {
                    return (
                        <Row 
                        key={rowID}
                        rowConstruct={rowConstruct} 
                        variableManipulation={variableManipulation}
                        />
                        )
                })
            }
        </div>
    );
}

export default Controls;