

const renderCells = (row, varMethods, Cell) => {
    return row.map((sym, cellID) => {
        <Cell 
        key={cellID}
        symbol={sym} 
        variableManipulation={varMethods} 
        />
    })
}

export { renderCells }