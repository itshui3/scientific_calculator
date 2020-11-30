import React from 'react'
// compos
import Cell from './Cell/Cell'

function Row({rowConstruct, writeChara, negate}) {
    return (
        <div className='row'>
        {
            rowConstruct
            ?
            rowConstruct.map((sym, cellID) => {
                return (
                    <Cell 
                    key={cellID}
                    symbol={sym} 
                    writeChara={writeChara}
                    negate={negate}
                    />
                )
            })
            :
            null
        }
        </div>
    )
}

export default Row
