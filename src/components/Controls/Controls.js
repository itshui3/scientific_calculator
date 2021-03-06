import React from 'react'

//assets
import { buttonsConstruct } from './assets/buttonsConstruct'

//helpers
import { renderCells } from './helpers/renderCells'

//styles
import './alignButtons.css'

function Controls({cellMethods, cellAssets}) {

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
                            renderCells(rowConstruct, cellMethods, cellAssets)
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