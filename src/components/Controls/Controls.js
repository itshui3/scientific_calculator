import React, {useState} from 'react';

//comps
import Cell from './Cell/Cell'
import Row from './Row/Row'

//assets
import { buttonsConstruct } from './assets/buttonsConstruct'

//styles
import './alignButtons.css'

function Controls(props) {
    let [writeCache, setWriteCache] = useState('')

    const writeToCache = (num) => {

    }

    return (
        <div className='controls_wrapper'>
            {
                buttonsConstruct.map((rowConstruct) => {
                    return <Row rowConstruct={rowConstruct} />
                })
            }
        </div>
    );
}

export default Controls;