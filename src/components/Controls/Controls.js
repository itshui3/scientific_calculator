import React, {useState, useEffect} from 'react';

//assets
import { buttonsConstruct } from './assets/buttonsConstruct'

//helpers
import { renderCells } from './helpers/renderCells'

//styles
import './alignButtons.css'

function Controls({variableManipulation}) {

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
                            rowConstruct.length
                            ?
                            renderCells(rowConstruct, variableManipulation)
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