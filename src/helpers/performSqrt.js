const performSqrt = (input, precision) => {
    let inputFloat = parseFloat(input)
    if (inputFloat == 1) { return 1 }
    
    let valBuilder = '';

    for (let i = 1; i < inputFloat; i++) {
        if (i*i > inputFloat) {
            valBuilder += (i-1).toString()
            break;
        }
    }

    let wholeInt = parseInt(valBuilder)

    if (wholeInt*wholeInt === inputFloat) {
        return wholeInt
    }

    let expectedLength = valBuilder.length + precision + 1
    valBuilder += '.'

    while (valBuilder.length < expectedLength) {
        for (let i = 0; i <= 10; i++) {
            let curFloat = parseFloat( valBuilder + i.toString() )
            if (curFloat * curFloat > inputFloat) {
                valBuilder += (i-1).toString()
                break
            }
        }
    }

    return valBuilder
}

export { performSqrt }