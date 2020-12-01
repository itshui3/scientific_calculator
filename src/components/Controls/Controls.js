import React, {useState, useEffect} from 'react';

//comps
import Row from './Row/Row'
import Cell from './Cell/Cell'

//assets
import { buttonsConstruct } from './assets/buttonsConstruct'

//helpers
import { renderCells } from './helpers/renderCells'

//hooks
import { WriteCache } from './hooks/WriteCache'

//styles
import './alignButtons.css'

function Controls({input}) {

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
                        <div 
                        className='row'
                        key={rowID}
                        >
                        {
                            rowConstruct
                            ?
                            renderCells(rowConstruct, variableManipulation, Cell)
                            :
                            null
                        }
                        </div>
                        )

                })
            }
        </div>
    );
}

export default Controls;