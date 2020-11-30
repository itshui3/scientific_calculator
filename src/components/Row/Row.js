import React from 'react'

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
