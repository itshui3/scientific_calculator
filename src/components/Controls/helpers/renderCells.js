import Cell from '../Cell/Cell'

const renderCells = (row, varMethods) => {

    return row.map((sym, cellID) => {
        return <Cell 
        id={cellID}
        key={cellID}
        symbol={sym} 
        variableManipulation={varMethods} 
        />
    })
}

export { renderCells }