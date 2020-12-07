import Cell from '../Cell/Cell'

const renderCells = (row, cellMethods, cellAssets) => {

    return row.map((sym, cellID) => {
        return <Cell
        id={cellID}
        key={cellID}
        symbol={sym}
        cellMethods={cellMethods}
        cellAssets={cellAssets}
        />
    })
}

export { renderCells }