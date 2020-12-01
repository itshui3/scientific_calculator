import Cell from '../Cell/Cell'

const renderCells = (row, cellMethods) => {

    return row.map((sym, cellID) => {
        return <Cell 
        id={cellID}
        key={cellID}
        symbol={sym} 
        cellMethods={cellMethods} 
        />
    })
}

export { renderCells }