import React from 'react'
// compos
import Cell from './Cell/Cell'

function Row({rowConstruct}) {
    return (
        <>
        {
            rowConstruct
            ?
            rowConstruct.map((sym) => {
                return <Cell symbol={sym} />
            })
            :
            null
        }
        </>
    )
}

export default Row
